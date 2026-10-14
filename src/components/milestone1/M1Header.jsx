// src/components/milestone1/M1Header.jsx
// Header cố định với thanh tiến trình mỏng và nút toàn màn hình
// Đã xóa Trình chiếu và Chấm tiến trình 1-6 theo yêu cầu; tiêu đề thẳng hàng không xuống dòng

import { memo } from 'react';
import { Link } from 'react-router-dom';

function M1Header({
  scrollProgress,
  isFullScreen,
  onToggleFullScreen,
  data,
}) {
  return (
    <header className="m1-sticky-header" aria-label="Thanh công cụ và điều hướng">
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

        {/* Biểu ngữ cột mốc trung tâm (thẳng hàng tuyệt đối, không xuống dòng) */}
        <div className="m1-header-center" aria-label={`Cột mốc ${data.hero.cotMoc}`}>
          <span className="m1-header-badge">{data.hero.cotMoc}</span>
          <span style={{ color: 'var(--m1-gold)', fontSize: '0.8rem', flexShrink: 0 }}>✦</span>
          <span className="m1-header-title">
            {data.hero.namThang} – {data.hero.tieuDe}
          </span>
        </div>

        {/* Cụm công cụ bên phải: Giữ nút Toàn màn hình */}
        <div className="m1-header-tools">
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

export default memo(M1Header);
