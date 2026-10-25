// src/pages/Milestone6.jsx
// Trang Cột mốc 06 – 08/1945: CHỚP THỜI CƠ TỔNG KHỞI NGHĨA
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, trang trọng, giàu tính học thuật, tương tác trình chiếu mượt mà

import { useState, useEffect, useCallback } from 'react';
import data from '../data/milestone6.js';

import M6Header from '../components/milestone6/M6Header.jsx';
import M6HeroSection from '../components/milestone6/M6HeroSection.jsx';
import M6ContextSection from '../components/milestone6/M6ContextSection.jsx';
import M6ConferenceSection from '../components/milestone6/M6ConferenceSection.jsx';
import M6StrategicShiftSection from '../components/milestone6/M6StrategicShiftSection.jsx';
import M6LogicFlowSection from '../components/milestone6/M6LogicFlowSection.jsx';
import M6MeaningSection from '../components/milestone6/M6MeaningSection.jsx';
import VideoModal from '../components/milestone1/VideoModal.jsx';
import ImageLightbox from '../components/milestone1/ImageLightbox.jsx';
import AiAppendixModal from '../components/AiAppendixModal.jsx';

import '../styles/milestone1-editorial.css';
import '../styles/milestone4-editorial.css';
import '../styles/milestone5-editorial.css';

const ORDERED_SECTIONS = [
  'hero',
  'boi-canh',
  'hoi-nghi',
  'dieu-chinh',
  'logic-thoi-co',
  'y-nghia',
];

function Milestone6() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Cuộn mượt lên đầu trang khi mở
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 1. Tính toán thanh tiến trình cuộn mỏng ở đầu trang
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
      if (isVideoModalOpen || isAiModalOpen || selectedPhoto) return;
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
  }, [activeSection, isVideoModalOpen, isAiModalOpen, selectedPhoto, scrollToSection]);

  return (
    <div className={`m1-editorial-page ${isFullScreen ? 'is-fullscreen' : ''}`}>
      {/* HEADER CỐ ĐỊNH CHUẨN MUSEUM EDITORIAL */}
      <M6Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        {/* 1. HERO SECTION: 08/1945 CHỚP THỜI CƠ TỔNG KHỞI NGHĨA */}
        <M6HeroSection
          heroData={data.hero}
          onOpenPhoto={setSelectedPhoto}
        />

        {/* 2. BỐI CẢNH LỊCH SỬ THÁNG 8/1945: 3 MỐC BIẾN CHUYỂN DỒN DẬP */}
        <M6ContextSection
          boiCanhData={data.boiCanh}
          onOpenPhoto={setSelectedPhoto}
        />

        {/* 3. MỐC THEN CHỐT: HỘI NGHỊ TÂN TRÀO (14–17/8/1945) */}
        <M6ConferenceSection
          confData={data.mocThenChot}
          onOpenPhoto={setSelectedPhoto}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 4. HÀNH ĐỘNG ĐỒNG LOẠT: 15 NGÀY THẦN TỐC */}
        <M6StrategicShiftSection shiftData={data.dieuChinh} />

        {/* 5. FLOW "LOGIC CHỚP THỜI CƠ 6 BƯỚC" */}
        <M6LogicFlowSection logicData={data.logicChienLuoc} />

        {/* 6. Ý NGHĨA LỊCH SỬ & ĐÚC KẾT TIẾN TRÌNH + MINI TIMELINE + NÚT TIẾP THEO + NGUỒN TƯ LIỆU */}
        <M6MeaningSection
          meaningData={data.yNghia}
          refData={data.yNghia.nguonTuLieu}
        />
      </main>

      {/* LIGHTBOX PHÓNG TO ẢNH TƯ LIỆU TOÀN MÀN HÌNH CÓ NÚT ✕ */}
      <ImageLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* MODAL VIDEO TƯ LIỆU TỔNG KHỞI NGHĨA THÁNG TÁM */}
      {data.mocThenChot.videoShorts && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoData={data.mocThenChot.videoShorts}
        />
      )}

      {/* MODAL PHỤ LỤC SỬ DỤNG AI */}
      <AiAppendixModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}

export default Milestone6;
