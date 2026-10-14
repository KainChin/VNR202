// src/components/PosterHome.jsx
// Trang chủ hiển thị poster chiến lược và các hotspot tương tác

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hotspot from './Hotspot.jsx';
import Moc1VideoModal from './Moc1VideoModal.jsx';

// Dữ liệu 7 hotspot chuẩn xác theo vị trí các vòng tròn đỏ trên poster mới
// Tọa độ phần trăm (left %, top %) căn chỉnh chính xác theo tâm vòng tròn đỏ
const HOTSPOTS = [
  {
    so: 1,
    left: 3.3,
    top: 55.7,
    nhan: '1930 · Đảng Cộng sản Việt Nam ra đời',
    duongDan: '/cot-moc/1',
    mauMobile: '#8B1A10',
  },
  {
    so: 2,
    left: 18.0,
    top: 51.7,
    nhan: '11/1939 · Mở đầu chuyển hướng chiến lược',
    duongDan: '/cot-moc/1',
    mauMobile: 'var(--m1)',
  },
  {
    so: 3,
    left: 32.9,
    top: 43.9,
    nhan: '5/1941 · Hoàn chỉnh chuyển hướng, Việt Minh',
    duongDan: '/cot-moc/2',
    mauMobile: 'var(--m2)',
  },
  {
    so: 4,
    left: 46.7,
    top: 37.5,
    nhan: '1941–1944 · Xây dựng lực lượng',
    duongDan: '/cot-moc/3',
    mauMobile: 'var(--m3)',
  },
  {
    so: 5,
    left: 60.5,
    top: 31.2,
    nhan: '3–8/1945 · Cao trào kháng Nhật – Chuẩn bị thời cơ',
    duongDan: '/cot-moc/4',
    mauMobile: 'var(--m4)',
  },
  {
    so: 6,
    left: 73.0,
    top: 21.7,
    nhan: '8/1945 · Chớp thời cơ Tổng khởi nghĩa',
    duongDan: '/cot-moc/5',
    mauMobile: 'var(--m5)',
  },
  {
    so: 7,
    left: 86.8,
    top: 18.1,
    nhan: '2/9/1945 · Tuyên ngôn Độc lập',
    duongDan: '/cot-moc/6',
    mauMobile: 'var(--m6)',
  },
];

function PosterHome() {
  const frameRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMoc1VideoOpen, setIsMoc1VideoOpen] = useState(false);

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
      {/* Nút bật/tắt toàn màn hình */}
      <button
        type="button"
        className="poster-fullscreen-btn"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
        title={isFullscreen ? 'Thu nhỏ màn hình (Esc)' : 'Toàn màn hình [ ]'}
      >
        {isFullscreen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14h5v5" />
            <path d="M20 14h-5v5" />
            <path d="M4 10h5V5" />
            <path d="M20 10h-5V5" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9V4h5" />
            <path d="M20 9V4h-5" />
            <path d="M4 15v5h5" />
            <path d="M20 15v5h-5" />
          </svg>
        )}
      </button>

      {/* Khung chứa poster và các hotspot tương tác */}
      <motion.div
        ref={frameRef}
        className="poster-frame"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Ảnh poster mới */}
        <img
          src="./poster.png"
          alt="Poster Quyết Định Chiến Lược – Chớp Thời Cơ 1945"
          className="poster-img"
          loading="eager"
          decoding="sync"
        />

        {/* Các Hotspot xuất hiện lần lượt từ 1 đến 7 */}
        {HOTSPOTS.map((hs, idx) => (
          <Hotspot
            key={hs.so}
            so={hs.so}
            left={hs.left}
            top={hs.top}
            nhan={hs.nhan}
            duongDan={hs.duongDan}
            onClick={hs.so === 1 ? () => setIsMoc1VideoOpen(true) : undefined}
            index={idx}
          />
        ))}
      </motion.div>

      {/* Danh sách thẻ cho màn hình nhỏ (< 700px) */}
      <nav className="mobile-list" aria-label="Danh sách cột mốc">
        {HOTSPOTS.map((hs) =>
          hs.so === 1 ? (
            <button
              key={hs.so}
              type="button"
              onClick={() => setIsMoc1VideoOpen(true)}
              className="mobile-list__item"
              style={{
                width: '100%',
                textAlign: 'left',
                border: '1.5px solid var(--vien)',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
              aria-label={`Cột mốc ${hs.so}: ${hs.nhan} (Xem video)`}
            >
              <span
                className="mobile-list__so"
                style={{ background: hs.mauMobile }}
              >
                {hs.so}
              </span>
              <span>{hs.nhan} 🎬</span>
            </button>
          ) : (
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
          )
        )}
      </nav>

      {/* Modal video tư liệu cho Cột mốc 1 */}
      <Moc1VideoModal
        isOpen={isMoc1VideoOpen}
        onClose={() => setIsMoc1VideoOpen(false)}
      />
    </div>
  );
}

export default PosterHome;
