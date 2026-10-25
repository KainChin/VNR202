// src/pages/Milestone2.jsx
// Trang Cột mốc 02 – 11/1939: MỞ ĐẦU CHUYỂN HƯỚNG CHIẾN LƯỢC (Hội nghị TW 6, Bà Điểm)
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, trang trọng, giàu tính học thuật, tương tác mượt mà

import { useState, useEffect, useCallback } from 'react';
import data from '../data/milestone2.js';

import M2Header from '../components/milestone2/M2Header.jsx';
import HeroSection from '../components/milestone1/HeroSection.jsx';
import ContextSection from '../components/milestone1/ContextSection.jsx';
import ConferenceSection from '../components/milestone1/ConferenceSection.jsx';
import LogicFlowSection from '../components/milestone1/LogicFlowSection.jsx';
import StrategicShiftSection from '../components/milestone1/StrategicShiftSection.jsx';
import MeaningSection from '../components/milestone1/MeaningSection.jsx';
import VideoModal from '../components/milestone1/VideoModal.jsx';
import ImageLightbox from '../components/milestone1/ImageLightbox.jsx';
import AiAppendixModal from '../components/AiAppendixModal.jsx';

import '../styles/milestone1-editorial.css';
import '../styles/milestone4-editorial.css';

const ORDERED_SECTIONS = [
  'hero',
  'boi-canh',
  'hoi-nghi',
  'logic-chuyen-huong',
  'dieu-chinh',
  'y-nghia',
];

function Milestone2() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
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
      <M2Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        <HeroSection heroData={data.hero} onOpenPhoto={setSelectedPhoto} />
        <ContextSection
          boiCanhData={data.boiCanh}
          onOpenPhoto={setSelectedPhoto}
        />
        <ConferenceSection
          confData={data.hoiNghiTW6}
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenPhoto={setSelectedPhoto}
        />
        <LogicFlowSection logicData={data.logicChuyenHuong} />
        <StrategicShiftSection shiftData={data.dieuChinhChienLuoc} />
        <MeaningSection
          meaningData={data.yNghiaTienTrinh}
          refData={data.nguonTuLieu}
        />
      </main>

      {/* LIGHTBOX XEM ẢNH TƯ LIỆU PHÓNG TO CHÍNH GIỮA MÀN HÌNH VỚI NÚT ĐÓNG */}
      <ImageLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* MODAL VIDEO TƯ LIỆU */}
      {data.hoiNghiTW6?.videoShorts && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoData={data.hoiNghiTW6.videoShorts}
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

export default Milestone2;
