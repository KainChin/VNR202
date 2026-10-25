// src/components/milestone3/M3Header.jsx
// Header cố định chuẩn Museum Editorial cho Cột mốc 03
// Hiển thị: "← Về poster" | "CỘT MỐC 03 / 05/1941 – HOÀN CHỈNH CHUYỂN HƯỚNG" | Nav 1–7 + Phụ lục AI + Toàn màn hình

import { memo } from 'react';
import { Link } from 'react-router-dom';
import HeaderNavPills from '../HeaderNavPills.jsx';

function M3Header({
  scrollProgress,
  isFullScreen,
  onToggleFullScreen,
  onOpenAiModal,
  data,
}) {
  return (
    <header className="m1-sticky-header" aria-label="Thanh công cụ và điều hướng Cột mốc 03">
      {/* Thanh tiến trình cuộn mỏng ở mép trên */}
      <div
        className="scroll-progress-line"
        style={{
          width: `${scrollProgress}%`,
          height: '2px',
          background: 'var(--m1-red, #8F2418)',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'width 0.15s ease-out',
        }}
        aria-hidden="true"
      />

      <div className="m1-header-inner">
        {/* 1. Nút quay về poster bản đồ */}
        <Link
          to="/"
          className="m1-btn-ghost"
          title="Quay lại trang poster bản đồ chiến lược 1945"
          aria-label="Quay về poster bản đồ chính"
        >
          ← Về poster
        </Link>

        {/* 2. Biểu ngữ cột mốc trung tâm (chuẩn mốc 1, 2, 3) */}
        <div className="m1-header-center" aria-label={`Cột mốc ${data?.hero?.cotMoc || '03'}`}>
          <span className="m1-header-badge">{data?.hero?.cotMoc || 'CỘT MỐC 03'}</span>
          <span style={{ color: 'var(--m1-gold)', fontSize: '0.8rem', flexShrink: 0 }}>✦</span>
          <span className="m1-header-title">
            {data?.hero?.namThang || '05 / 1941'} – {data?.hero?.tieuDe || 'HOÀN CHỈNH CHUYỂN HƯỚNG'}
          </span>
        </div>

        {/* 3. Cụm công cụ bên phải: Nav 1–7 (nút số 3 active) + Phụ lục AI + Toàn màn hình */}
        <div className="m1-header-tools">
          <HeaderNavPills currentMilestone={3} total={7} />

          {/* Nút xem Phụ lục AI */}
          <button
            type="button"
            className="m1-btn-ghost"
            onClick={onOpenAiModal}
            title="Xem Phụ lục kê khai sử dụng AI trong đồ án VNR202"
            aria-label="Phụ lục sử dụng AI"
          >
            <span style={{ color: 'var(--m1-gold)', fontSize: '0.85rem' }}>✦</span>
            Phụ lục AI
          </button>

          {/* Nút Toàn màn hình */}
          <button
            type="button"
            className="m1-btn-ghost"
            onClick={onToggleFullScreen}
            title={isFullScreen ? 'Thu nhỏ màn hình (Esc)' : 'Bật toàn màn hình để xem phóng to'}
            aria-label={isFullScreen ? 'Thu nhỏ cửa sổ' : 'Toàn màn hình'}
          >
            {isFullScreen ? '⤓ Thu nhỏ' : '⛶ Toàn màn hình'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default memo(M3Header);
