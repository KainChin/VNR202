// src/components/MilestoneNav.jsx
// Thanh điều hướng: chấm tiến trình 1–6 + nút Trước / Về poster / Sau

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import milestones from '../data/index.js';

// Màu của từng cột mốc để tô chấm active (7 cột mốc)
const MAU_COT_MOC = {
  1: '#8B1A10',
  2: '#8F2418',
  3: '#1F4E79',
  4: '#D9501E',
  5: '#A31621',
  6: '#A8541A',
  7: '#C98F10',
};

/**
 * MilestoneNav – Thanh tiến trình và điều hướng cột mốc
 * @param {number} currentId - ID cột mốc hiện tại (1–6)
 * @param {boolean} showButtons - Có hiển thị các nút điều hướng phía dưới không (mặc định: true)
 */
function MilestoneNav({ currentId, showButtons = true }) {
  const id = Number(currentId);
  const mauHienTai = MAU_COT_MOC[id];

  return (
    <div>
      {/* Thanh tiến trình 6 chấm */}
      <nav
        className="milestone-progress"
        aria-label="Tiến trình các cột mốc"
      >
        {milestones.map((m, idx) => {
          const isActive = m.id === id;
          const mauCham = MAU_COT_MOC[m.id];

          return (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Đường nối giữa các chấm */}
              {idx > 0 && (
                <div
                  className="milestone-progress__line"
                  style={{
                    background: m.id <= id ? mauCham : 'var(--vien)',
                    transition: 'background 0.4s',
                  }}
                />
              )}

              {/* Chấm số */}
              {isActive ? (
                <span
                  className="milestone-progress__dot milestone-progress__dot--active"
                  style={{ background: mauCham, borderColor: mauCham }}
                  title={`Cột mốc 0${m.id}: ${m.tieuDe} (Đang xem)`}
                  aria-label={`Cột mốc 0${m.id}: ${m.tieuDe} (Đang xem)`}
                  aria-current="step"
                >
                  {m.id}
                </span>
              ) : (
                <span
                  className="milestone-progress__dot is-locked"
                  style={{
                    color: 'var(--chu-nhat)',
                    cursor: 'not-allowed',
                    opacity: 0.65,
                    userSelect: 'none',
                  }}
                  title={`Cột mốc 0${m.id}: ${m.tieuDe} (Đã khóa – Về poster để chọn mốc)`}
                  aria-label={`Cột mốc 0${m.id}: ${m.tieuDe} (Đã khóa – Về poster để chọn mốc)`}
                  aria-disabled="true"
                >
                  {m.id}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Nút điều hướng cuối trang: Quay về poster hoặc Lên đầu trang */}
      {showButtons && (
        <nav
          className="milestone-nav"
          aria-label="Điều hướng cột mốc"
          style={{ justifyContent: 'center', gap: '1.25rem' }}
        >
          {/* Nút Về poster */}
          <Link
            to="/"
            className="nut-giay"
            aria-label="Quay về trang chủ poster để chọn cột mốc khác"
            style={{ fontWeight: 700, borderColor: mauHienTai, color: mauHienTai }}
          >
            🗺 Về poster
          </Link>

          {/* Nút Lướt lên đầu trang */}
          <button
            type="button"
            className="nut-giay"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Lướt lại lên đầu trang"
            title="Lướt lại lên đầu trang (↑)"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            ↑ Lên đầu trang
          </button>
        </nav>
      )}
    </div>
  );
}

export default MilestoneNav;
