// src/pages/Milestone5.jsx
// Trang Cột mốc 05 – 3–8/1945: CAO TRÀO KHÁNG NHẬT – CHUẨN BỊ THỜI CƠ
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, trang trọng, giàu tính học thuật, tương tác mượt mà

import { useState, useEffect, useCallback } from 'react';
import data from '../data/milestone5.js';

import M5Header from '../components/milestone5/M5Header.jsx';
import M5HeroSection from '../components/milestone5/M5HeroSection.jsx';
import M5ContextSection from '../components/milestone5/M5ContextSection.jsx';
import M5ConferenceSection from '../components/milestone5/M5ConferenceSection.jsx';
import M5StrategicShiftSection from '../components/milestone5/M5StrategicShiftSection.jsx';
import M5LogicFlowSection from '../components/milestone5/M5LogicFlowSection.jsx';
import M5MeaningSection from '../components/milestone5/M5MeaningSection.jsx';
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

function Milestone5() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
      if (isAiModalOpen || selectedPhoto) return;
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
  }, [activeSection, isAiModalOpen, selectedPhoto, scrollToSection]);

  return (
    <div className={`m1-editorial-page ${isFullScreen ? 'is-fullscreen' : ''}`}>
      {/* HEADER CỐ ĐỊNH CHUẨN MUSEUM EDITORIAL */}
      <M5Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        {/* 1. HERO SECTION */}
        <M5HeroSection heroData={data.hero} />

        {/* 2. "VÌ SAO TÌNH HÌNH THAY ĐỔI?" */}
        <M5ContextSection contextData={data.viSaoThayDoi} />

        {/* 3. "MỐC THEN CHỐT: 9–12/3/1945" */}
        <M5ConferenceSection
          confData={data.mocThenChot}
          onOpenPhoto={setSelectedPhoto}
        />

        {/* 4. "ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO?" */}
        <M5StrategicShiftSection shiftData={data.dangDieuChinh} />

        {/* 5. FLOW "LOGIC CHUẨN BỊ THỜI CƠ" */}
        <M5LogicFlowSection logicData={data.logicChuanBiThoiCo} />

        {/* 6. "Ý NGHĨA" + MINI TIMELINE + NÚT TIẾP THEO */}
        <M5MeaningSection
          meaningData={data.yNghia}
          refData={data.nguonTuLieu}
        />
      </main>

      {/* LIGHTBOX XEM ẢNH TƯ LIỆU PHÓNG TO CHÍNH GIỮA MÀN HÌNH VỚI NÚT ĐÓNG */}
      <ImageLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* MODAL PHỤ LỤC SỬ DỤNG AI */}
      <AiAppendixModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}

export default Milestone5;
