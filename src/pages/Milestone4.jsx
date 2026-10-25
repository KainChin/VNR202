// src/pages/Milestone4.jsx
// Trang Cột mốc 04 – 1941–1944: XÂY DỰNG LỰC LƯỢNG
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, trang trọng, giàu tính học thuật, tương tác mượt mà

import { useState, useEffect, useCallback, useRef } from 'react';
import data from '../data/milestone4.js';

import M4Header from '../components/milestone4/M4Header.jsx';
import M4HeroSection from '../components/milestone4/M4HeroSection.jsx';
import M4ContextSection from '../components/milestone4/M4ContextSection.jsx';
import M4ConferenceSection from '../components/milestone4/M4ConferenceSection.jsx';
import M4StrategicShiftSection from '../components/milestone4/M4StrategicShiftSection.jsx';
import M4LogicFlowSection from '../components/milestone4/M4LogicFlowSection.jsx';
import M4MeaningSection from '../components/milestone4/M4MeaningSection.jsx';
import VideoModal from '../components/milestone1/VideoModal.jsx';
import AiAppendixModal from '../components/AiAppendixModal.jsx';

import '../styles/milestone1-editorial.css';
import '../styles/milestone4-editorial.css';

const ORDERED_SECTIONS = [
  'hero',
  'boi-canh',
  'hoi-nghi',
  'xay-dung',
  'logic-xay-dung',
  'y-nghia',
];

function Milestone4() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  const videoTriggerRef = useRef(null);

  // Cuộn mượt lên đầu trang khi mở
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 1. Tính toán phần trăm thanh tiến trình cuộn mỏng ở đầu trang
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const totalScroll = el.scrollHeight - el.clientHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Lắng nghe trạng thái toàn màn hình của trình duyệt
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // 3. Scroll-spy theo dõi section đang hiển thị
  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: [0.1, 0.4],
    };

    ORDERED_SECTIONS.forEach((secId) => {
      const el = document.getElementById(secId);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        });
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // 4. Hàm cuộn mượt tới section
  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const headerOffset = 70;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  // 5. Điều hướng bằng phím mũi tên: Bấm ← / → hoặc PageUp / PageDown để chuyển nhanh giữa các section
  useEffect(() => {
    const handleKeyNav = (e) => {
      if (isVideoModalOpen || isAiModalOpen) return;
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        const curIdx = ORDERED_SECTIONS.indexOf(activeSection);
        const nextIdx = Math.min(ORDERED_SECTIONS.length - 1, curIdx + 1);
        scrollToSection(ORDERED_SECTIONS[nextIdx]);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        const curIdx = ORDERED_SECTIONS.indexOf(activeSection);
        const prevIdx = Math.max(0, curIdx - 1);
        scrollToSection(ORDERED_SECTIONS[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [activeSection, isVideoModalOpen, isAiModalOpen, scrollToSection]);

  return (
    <div className={`m1-editorial-page ${isFullScreen ? 'is-fullscreen' : ''}`}>
      {/* HEADER CỐ ĐỊNH CHUẨN MUSEUM EDITORIAL */}
      <M4Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        {/* 1. HERO SECTION */}
        <M4HeroSection heroData={data.hero} />

        {/* 2. "VÌ SAO PHẢI XÂY DỰNG LỰC LƯỢNG?" */}
        <M4ContextSection contextData={data.viSaoXayDung} />

        {/* 3. "MỐC THEN CHỐT: 22/12/1944" */}
        <M4ConferenceSection
          confData={data.mocThenChot}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          videoTriggerRef={videoTriggerRef}
        />

        {/* 4. "ĐẢNG XÂY DỰNG LỰC LƯỢNG NHƯ THẾ NÀO?" */}
        <M4StrategicShiftSection shiftData={data.dangXayDung} />

        {/* 5. FLOW "LOGIC XÂY DỰNG LỰC LƯỢNG" */}
        <M4LogicFlowSection logicData={data.logicXayDung} />

        {/* 6. "Ý NGHĨA" + MINI TIMELINE + NÚT TIẾP THEO */}
        <M4MeaningSection
          meaningData={data.yNghia}
          refData={data.nguonTuLieu}
        />
      </main>

      {/* MODAL VIDEO TƯ LIỆU */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoData={data.mocThenChot?.videoModal}
        triggerRef={videoTriggerRef}
      />

      {/* MODAL PHỤ LỤC SỬ DỤNG AI */}
      <AiAppendixModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}

export default Milestone4;
