// src/pages/Milestone2.jsx
// Trang Cột mốc 02 – 05/1941: Hoàn chỉnh chuyển hướng chiến lược
// Phong cách: Historical Editorial + Museum Website cao cấp
// Chuẩn thiết kế: Tối giản, trang trọng, giàu tính học thuật, tương tác trình chiếu mượt mà

import { useState, useEffect, useCallback } from 'react';
import data from '../data/milestone2.js';

import M2Header from '../components/milestone2/M2Header.jsx';
import M2HeroSection from '../components/milestone2/M2HeroSection.jsx';
import M2ContextSection from '../components/milestone2/M2ContextSection.jsx';
import M2ConferenceSection from '../components/milestone2/M2ConferenceSection.jsx';
import M2DecisionsSection from '../components/milestone2/M2DecisionsSection.jsx';
import M2LogicFlowSection from '../components/milestone2/M2LogicFlowSection.jsx';
import M2MeaningSection from '../components/milestone2/M2MeaningSection.jsx';
import GemButton from '../components/GemButton.jsx';

import '../styles/milestone1-editorial.css';
import '../styles/milestone2-editorial.css';

// Danh sách thứ tự các section phục vụ điều hướng bằng phím mũi tên khi trình chiếu
const ORDERED_SECTIONS = [
  'hero',
  'boi-canh',
  'hoi-nghi',
  'quyet-sach',
  'logic-chien-luoc',
  'y-nghia',
];

function Milestone2() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  // 5. Chế độ trình chiếu: Bấm phím ← / → hoặc PageUp / PageDown để chuyển nhanh giữa các section
  useEffect(() => {
    const handleKeyNav = (e) => {
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
  }, [activeSection, scrollToSection]);

  return (
    <div className={`m1-editorial-page ${isFullScreen ? 'is-fullscreen' : ''}`}>
      {/* HEADER CỐ ĐỊNH: Thanh tiến trình mỏng, nút toàn màn hình & điều hướng cột mốc */}
      <M2Header
        scrollProgress={scrollProgress}
        isFullScreen={isFullScreen}
        onToggleFullScreen={toggleFullScreen}
        data={data}
      />

      {/* NỘI DUNG CHÍNH (EDITORIAL SHELL) */}
      <main className="m1-editorial-shell">
        {/* 1. HERO SECTION: LÃNH TỤ VỀ NƯỚC & HOÀN CHỈNH ĐƯỜNG LỐI */}
        <M2HeroSection heroData={data.hero} />

        {/* 2. BỐI CẢNH LỊCH SỬ (TIMELINE NGANG 3 MỐC ĐẦU NĂM 1941) */}
        <M2ContextSection boiCanhData={data.boiCanh} />

        {/* 3. HỘI NGHỊ TRUNG ƯƠNG 8 (PÁC BÓ, CAO BẰNG) */}
        <M2ConferenceSection confData={data.hoiNghiTW8} />

        {/* 4. 3 QUYẾT SÁCH CHIẾN LƯỢC CỦA HỘI NGHỊ TW8 */}
        <M2DecisionsSection decisionsData={data.noiDungChinh} />

        {/* 5. FLOW "LOGIC CHIẾN LƯỢC 1939 – 1945" (6 BƯỚC KHÔNG DÙNG CARD) */}
        <M2LogicFlowSection logicData={data.logicChienLuoc} />

        {/* 6. Ý NGHĨA LỊCH SỬ, CÂU KẾT LỚN & NGUỒN TƯ LIỆU */}
        <M2MeaningSection
          meaningData={data.yNghiaTienTrinh}
          refData={data.nguonTuLieu}
        />
      </main>

      {/* Nút trợ lý Gem AI */}
      <GemButton milestoneId={data.id} />
    </div>
  );
}

export default Milestone2;
