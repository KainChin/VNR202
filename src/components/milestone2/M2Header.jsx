// src/components/milestone2/M2Header.jsx
// Header cố định chuẩn Museum Editorial cho Cột mốc 02
// Hiển thị: "← Về poster" | "CỘT MỐC 02 / 11/1939 – MỞ ĐẦU CHUYỂN HƯỚNG" | Nav 1–7 + Phụ lục AI + Toàn màn hình

import { memo } from 'react';
import { Link } from 'react-router-dom';
import HeaderNavPills from '../HeaderNavPills.jsx';

function M2Header({
  scrollProgress,
  isFullScreen,
  onToggleFullScreen,
  onOpenAiModal,
  data,
}) {
  return (
    <header className="m1-sticky-header" aria-label="Thanh công cụ và điều hướng Cột mốc 02">
      {scrollProgress !== undefined && (
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
      )}

      <div className="m1-header-inner">
        {/* Nút quay về poster bản đồ */}
        <Link
          to="/"
          className="m1-btn-ghost"
          title="Quay lại trang poster bản đồ chiến lược 1945"
          aria-label="Quay về poster bản đồ chính"
        >
          ← Về poster
        </Link>

        {/* Biểu ngữ cột mốc trung tâm */}
        <div className="m1-header-center" aria-label={`Cột mốc ${data?.hero?.cotMoc || '02'}`}>
          <span className="m1-header-badge">{data?.hero?.cotMoc || 'CỘT MỐC 02'}</span>
          <span style={{ color: 'var(--m1-gold)', fontSize: '0.8rem', flexShrink: 0 }}>✦</span>
          <span className="m1-header-title">
            {data?.hero?.namThang || '11 / 1939'} – {data?.hero?.tieuDe || 'MỞ ĐẦU CHUYỂN HƯỚNG CHIẾN LƯỢC'}
          </span>
        </div>

        {/* Cụm công cụ bên phải: Nav 1–7 + Phụ lục AI & Toàn màn hình */}
        <div className="m1-header-tools">
          <HeaderNavPills currentMilestone={2} total={7} />

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

export default memo(M2Header);
