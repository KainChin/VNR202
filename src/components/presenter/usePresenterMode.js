// src/components/presenter/usePresenterMode.js
// Custom Hook quản lý trạng thái, phím tắt, đồng hồ đếm giờ và điều hướng cho Chế độ thuyết trình

import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function usePresenterMode({
  sections = [],
  nextMilestoneUrl = '/',
  isVideoOpen = false,
  onOpenVideo,
  onCloseVideo,
  logicStepsCount = 6,
  timelineStepsCount = 4,
}) {
  const navigate = useNavigate();

  const [isPresenterMode, setIsPresenterMode] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(-1); // -1: hiển thị tự nhiên hoặc tất cả; >=0: đang chiếu từng bước
  const [showNotes, setShowNotes] = useState(true);
  const [showTimer, setShowTimer] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const timerRef = useRef(null);

  // Tổng thời lượng dự kiến của toàn bộ cột mốc (tính bằng giây)
  const totalExpectedDuration = sections.reduce(
    (sum, sec) => sum + (Number(sec.duration) || 0),
    0
  );

  const currentSection = sections[activeSectionIndex] || {};

  // Cuộn mượt (hoặc tức thì nếu người dùng bật reduced motion) tới section
  const scrollToSectionIndex = useCallback((index) => {
    const sec = sections[index];
    if (!sec) return;
    const el = document.getElementById(sec.id);
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const headerOffset = 58;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
    });
  }, [sections]);

  // Bật/tắt chế độ thuyết trình
  const togglePresenterMode = useCallback(() => {
    setIsPresenterMode((prev) => {
      const nextState = !prev;
      if (nextState) {
        // Vào toàn màn hình nếu trình duyệt cho phép
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
        setElapsedSeconds(0);
        setActiveSectionIndex(0);
        setStepIndex(-1);
        setShowNotes(true);
        setTimeout(() => scrollToSectionIndex(0), 100);
      } else {
        // Thoát toàn màn hình nếu đang bật
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      }
      return nextState;
    });
  }, [scrollToSectionIndex]);

  // Đồng hồ tính giờ thuyết trình thực tế
  useEffect(() => {
    if (isPresenterMode) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPresenterMode]);

  // Tiến tới bước hoặc section kế tiếp
  const handleNext = useCallback(() => {
    const sec = sections[activeSectionIndex];
    const isLogicSec = sec?.id?.includes('logic');

    // Nếu ở section Logic và chưa đi hết các bước logic
    if (isLogicSec && isPresenterMode) {
      if (stepIndex < logicStepsCount - 1) {
        setStepIndex((prev) => prev + 1);
        return;
      }
    }

    // Nếu chưa ở section cuối cùng: nhảy sang section kế tiếp
    if (activeSectionIndex < sections.length - 1) {
      const nextIdx = activeSectionIndex + 1;
      setActiveSectionIndex(nextIdx);
      setStepIndex(-1);
      scrollToSectionIndex(nextIdx);
    } else {
      // Đã ở section cuối cùng: bấm → chuyển sang Cột mốc kế tiếp!
      if (nextMilestoneUrl) {
        navigate(nextMilestoneUrl);
      }
    }
  }, [activeSectionIndex, sections, isPresenterMode, stepIndex, logicStepsCount, scrollToSectionIndex, nextMilestoneUrl, navigate]);

  // Lùi lại bước hoặc section trước đó
  const handlePrev = useCallback(() => {
    const sec = sections[activeSectionIndex];
    const isLogicSec = sec?.id?.includes('logic');

    // Nếu đang chiếu từng bước trong section Logic
    if (isLogicSec && isPresenterMode && stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
      return;
    }

    if (activeSectionIndex > 0) {
      const prevIdx = activeSectionIndex - 1;
      setActiveSectionIndex(prevIdx);
      setStepIndex(-1);
      scrollToSectionIndex(prevIdx);
    }
  }, [activeSectionIndex, sections, isPresenterMode, stepIndex, scrollToSectionIndex]);

  // Bộ lắng nghe phím tắt toàn cục
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Bỏ qua khi người dùng đang nhập liệu trong ô input/textarea
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      // Phím Esc: ưu tiên đóng modal trợ giúp hoặc video, sau đó thoát thuyết trình
      if (e.key === 'Escape') {
        if (showHelp) {
          e.preventDefault();
          setShowHelp(false);
          return;
        }
        if (isVideoOpen && onCloseVideo) {
          e.preventDefault();
          onCloseVideo();
          return;
        }
        if (isPresenterMode) {
          e.preventDefault();
          setIsPresenterMode(false);
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
          }
          return;
        }
      }

      // Phím ?: Bật/tắt hướng dẫn phím tắt
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShowHelp((prev) => !prev);
        return;
      }

      // Phím N: Bật/tắt bảng Speaker Notes
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowNotes((prev) => !prev);
        return;
      }

      // Phím T: Bật/tắt đồng hồ đếm giờ
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setShowTimer((prev) => !prev);
        return;
      }

      // Phím V: Mở/đóng video tư liệu
      if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        if (isVideoOpen && onCloseVideo) {
          onCloseVideo();
        } else if (!isVideoOpen && onOpenVideo) {
          onOpenVideo();
        }
        return;
      }

      // Phím điều hướng slide: ArrowRight / PageDown
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
        return;
      }

      // Phím điều hướng slide: ArrowLeft / PageUp
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isPresenterMode,
    isVideoOpen,
    showHelp,
    onCloseVideo,
    onOpenVideo,
    handleNext,
    handlePrev,
  ]);

  return {
    isPresenterMode,
    togglePresenterMode,
    activeSectionIndex,
    setActiveSectionIndex,
    stepIndex,
    setStepIndex,
    showNotes,
    setShowNotes,
    showTimer,
    setShowTimer,
    showHelp,
    setShowHelp,
    elapsedSeconds,
    totalExpectedDuration,
    currentSection,
    handleNext,
    handlePrev,
    scrollToSectionIndex,
  };
}

export default usePresenterMode;
