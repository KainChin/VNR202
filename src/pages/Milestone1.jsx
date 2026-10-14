// src/pages/Milestone1.jsx
// Trang Cột mốc 01 – 11/1939: Chuyển hướng chiến lược
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, thanh lịch, nhiều khoảng trắng, tương tác trình chiếu mượt mà

import { useState, useEffect, useRef, useCallback } from 'react';
import data from '../data/milestone1.js';

import M1Header from '../components/milestone1/M1Header.jsx';
import HeroSection from '../components/milestone1/HeroSection.jsx';
import ContextSection from '../components/milestone1/ContextSection.jsx';
import ConferenceSection from '../components/milestone1/ConferenceSection.jsx';
import LogicFlowSection from '../components/milestone1/LogicFlowSection.jsx';
import StrategicShiftSection from '../components/milestone1/StrategicShiftSection.jsx';
import MeaningSection from '../components/milestone1/MeaningSection.jsx';
import VideoModal from '../components/milestone1/VideoModal.jsx';
import GemButton from '../components/GemButton.jsx';

import '../styles/milestone1-editorial.css';

// Danh sách thứ tự các section phục vụ điều hướng bằng phím mũi tên
const ORDERED_SECTIONS = [
  'hero',
  'boi-canh',
  'hoi-nghi',
  'logic-chuyen-huong',
  'dieu-chinh',
  'y-nghia',
];

function Milestone1() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

  // 3. Scroll-spy theo dõi section đang hiển thị để highlight trên Strategy Rail
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

  // 5. Chế độ trình chiếu: Bấm phím ← / → hoặc PageUp / PageDown để chuyển nhanh giữa các section
  useEffect(() => {
    const handleKeyNav = (e) => {
      // Bỏ qua nếu đang mở video modal hoặc đang focus vào input
      if (isVideoModalOpen) return;
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
  }, [activeSection, isVideoModalOpen, scrollToSection]);

  return (
    <div className={`m1-editorial-page ${isFullScreen ? 'is-fullscreen' : ''}`}>
      {/* HEADER CỐ ĐỊNH: Thanh tiến trình mỏng, nút toàn màn hình & điều hướng cột mốc */}
      <M1Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        {/* 1. HERO SECTION & COMPOSITION DUY NHẤT */}
        <HeroSection heroData={data.hero} />

        {/* 2. BỐI CẢNH LỊCH SỬ (TIMELINE NGANG 3 MỐC) */}
        <ContextSection boiCanhData={data.boiCanh} />

        {/* 3. HỘI NGHỊ TRUNG ƯƠNG 6 (BỐ CỤC 2 CỘT MỚI) */}
        <ConferenceSection confData={data.hoiNghiTW6} />

        {/* 4. FLOW "LOGIC CHUYỂN HƯỚNG" (6 BƯỚC KHÔNG DÙNG CARD) */}
        <LogicFlowSection logicData={data.logicChuyenHuong} />

        {/* 5. ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO? (2 KHỐI LỚN: NHIỆM VỤ / HÌNH THỨC) */}
        <StrategicShiftSection shiftData={data.dieuChinhChienLuoc} />

        {/* 6. Ý NGHĨA & TIẾN TRÌNH 1939 – 1945 + 8. NGUỒN TƯ LIỆU */}
        <MeaningSection
          meaningData={data.yNghiaTienTrinh}
          refData={data.nguonTuLieu}
        />
      </main>

      {/* Nút trợ lý Gem AI */}
      <GemButton milestoneId={data.id} />

      {/* 7. MODAL VIDEO YOUTUBE SHORTS (DỰ PHÒNG NẾU CẦN) */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoData={data.hoiNghiTW6.videoShorts}
        triggerRef={videoTriggerRef}
      />
    </div>
  );
}

export default Milestone1;
