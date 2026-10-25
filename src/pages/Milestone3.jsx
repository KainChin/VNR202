// src/pages/Milestone3.jsx
// Trang Cột mốc 03 – 05/1941: HOÀN CHỈNH CHUYỂN HƯỚNG CHIẾN LƯỢC, THÀNH LẬP VIỆT MINH (Hội nghị TW 8, Pác Bó)
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, trang trọng, giàu tính học thuật, tương tác mượt mà

import { useState, useEffect, useCallback } from 'react';
import data from '../data/milestone3.js';

import M3Header from '../components/milestone3/M3Header.jsx';
import M2HeroSection from '../components/milestone2/M2HeroSection.jsx';
import M2ContextSection from '../components/milestone2/M2ContextSection.jsx';
import M2ConferenceSection from '../components/milestone2/M2ConferenceSection.jsx';
import M2DecisionsSection from '../components/milestone2/M2DecisionsSection.jsx';
import M2LogicFlowSection from '../components/milestone2/M2LogicFlowSection.jsx';
import M2MeaningSection from '../components/milestone2/M2MeaningSection.jsx';
import VideoModal from '../components/milestone1/VideoModal.jsx';
import ImageLightbox from '../components/milestone1/ImageLightbox.jsx';
import AiAppendixModal from '../components/AiAppendixModal.jsx';

import '../styles/milestone1-editorial.css';
import '../styles/milestone2-editorial.css';
import '../styles/milestone4-editorial.css';

const ORDERED_SECTIONS = [
  'hero',
  'boi-canh',
  'hoi-nghi',
  'quyet-sach',
  'logic-chien-luoc',
  'y-nghia',
];

function Milestone3() {
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
      <M3Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        <M2HeroSection heroData={data.hero} onOpenPhoto={setSelectedPhoto} />
        <M2ContextSection boiCanhData={data.boiCanh} />
        <M2ConferenceSection
          confData={data.hoiNghiTW8}
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenPhoto={setSelectedPhoto}
        />
        <M2DecisionsSection
          decisionsData={data.noiDungChinh || data.bonQuyetSach}
          onOpenPhoto={setSelectedPhoto}
        />
        <M2LogicFlowSection logicData={data.logicChienLuoc || data.logicChuyenHuong} />
        <M2MeaningSection
          meaningData={data.yNghiaTienTrinh}
          refData={data.nguonTuLieu}
        />
      </main>

      <ImageLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {data.hoiNghiTW8?.videoShorts && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoData={data.hoiNghiTW8.videoShorts}
        />
      )}

      <AiAppendixModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}

export default Milestone3;
