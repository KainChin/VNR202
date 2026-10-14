// src/components/PosterHome.jsx
// Trang chủ hiển thị poster và 6 hotspot

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hotspot from './Hotspot.jsx';

// Dữ liệu 6 hotspot: tọa độ phần trăm trong khung poster
// Tọa độ dùng transform: translate(-50%,-50%) nên đây là tâm nút
const HOTSPOTS = [
  {
    so: 1,
    left: 19.2,
    top: 73.4,
    nhan: '11/1939 · Chuyển hướng chiến lược',
    duongDan: '/cot-moc/1',
    mauMobile: 'var(--m1)',
  },
  {
    so: 2,
    left: 34.3,
    top: 63.0,
    nhan: '5/1941 · Việt Minh',
    duongDan: '/cot-moc/2',
    mauMobile: 'var(--m2)',
  },
  {
    so: 3,
    left: 48.8,
    top: 53.2,
    nhan: '1941–1944 · Xây dựng lực lượng',
    duongDan: '/cot-moc/3',
    mauMobile: 'var(--m3)',
  },
  {
    so: 4,
    left: 62.5,
    top: 42.6,
    nhan: '3–8/1945 · Nhận định thời cơ',
    duongDan: '/cot-moc/4',
    mauMobile: 'var(--m4)',
  },
  {
    so: 5,
    left: 76.3,
    top: 32.7,
    nhan: '8/1945 · Chớp thời cơ',
    duongDan: '/cot-moc/5',
    mauMobile: 'var(--m5)',
  },
  {
    so: 6,
    left: 91.8,
    top: 21.3,
    nhan: '2/9/1945 · Tuyên ngôn Độc lập',
    duongDan: '/cot-moc/6',
    mauMobile: 'var(--m6)',
  },
];

function PosterHome() {
  const frameRef = useRef(null);

  // Trạng thái toàn màn hình của trình duyệt
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="poster-home">
      {/* Nút bật/tắt toàn màn hình: chỉ icon [ ] nét đậm, không có chữ */}
      <button
        type="button"
        className="poster-fullscreen-btn"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
        title={isFullscreen ? 'Thu nhỏ màn hình (Esc)' : 'Toàn màn hình [ ]'}
      >
        {isFullscreen ? (
          /* Biểu tượng thu nhỏ: 4 góc hướng vào trong */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14h5v5" />
            <path d="M20 14h-5v5" />
            <path d="M4 10h5V5" />
            <path d="M20 10h-5V5" />
          </svg>
        ) : (
          /* Biểu tượng phóng to: dấu [ ] 4 góc mở rộng đậm nét */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9V4h5" />
            <path d="M20 9V4h-5" />
            <path d="M4 15v5h5" />
            <path d="M20 15v5h-5" />
          </svg>
        )}
      </button>

      {/* Khung chứa poster và 6 hotspot - giữ nguyên độ sắc nét cao nhất */}
      <motion.div
        ref={frameRef}
        className="poster-frame"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Ảnh poster – hiển thị sắc nét, không bị subpixel blur do transform */}
        <img
          src="./poster.png"
          alt="Poster Quyết Định Chiến Lược – Chớp Thời Cơ 1945"
          className="poster-img"
          loading="eager"
          decoding="sync"
        />

        {/* 6 Hotspot xuất hiện lần lượt từ 1 đến 6 */}
        {HOTSPOTS.map((hs, idx) => (
          <Hotspot
            key={hs.so}
            so={hs.so}
            left={hs.left}
            top={hs.top}
            nhan={hs.nhan}
            duongDan={hs.duongDan}
            index={idx}
          />
        ))}
      </motion.div>

      {/* Danh sách nút thẻ giấy cũ cho màn hình nhỏ (< 700px) */}
      <nav className="mobile-list" aria-label="Danh sách cột mốc">
        {HOTSPOTS.map((hs) => (
          <Link
            key={hs.so}
            to={hs.duongDan}
            className="mobile-list__item"
            aria-label={`Cột mốc ${hs.so}: ${hs.nhan}`}
          >
            <span
              className="mobile-list__so"
              style={{ background: hs.mauMobile }}
            >
              {hs.so}
            </span>
            <span>{hs.nhan}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default PosterHome;
