// src/components/MilestoneNav.jsx
// Thanh điều hướng: chấm tiến trình 1–6 + nút Trước / Về poster / Sau

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import milestones from '../data/index.js';

// Màu của từng cột mốc để tô chấm active
const MAU_COT_MOC = {
  1: '#3A3F47',
  2: '#1F4E79',
  3: '#A8541A',
  4: '#D9501E',
  5: '#A31621',
  6: '#C98F10',
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
              <Link
                to={`/cot-moc/${m.id}`}
                className={`milestone-progress__dot${isActive ? ' milestone-progress__dot--active' : ''}`}
                style={
                  isActive
                    ? { background: mauCham, borderColor: mauCham }
                    : { color: 'var(--chu-nhat)' }
                }
                title={`Cột mốc ${m.id}: ${m.tieuDe} ${m.id > 2 ? '(Sắp có)' : ''}`}
                aria-label={`Cột mốc ${m.id}: ${m.tieuDe} ${m.id > 2 ? '(Sắp có)' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {m.id}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Nút điều hướng cuối trang (chỉ hiện khi showButtons = true) */}
      {showButtons && (
        <nav className="milestone-nav" aria-label="Điều hướng cột mốc">
          {/* Nút Trước – ẩn nếu là cột mốc đầu */}
          {id > 1 ? (
            <Link
              to={`/cot-moc/${id - 1}`}
              className="nut-giay"
              aria-label={`Cột mốc trước: Cột mốc ${id - 1}`}
            >
              ← Cột mốc trước
            </Link>
          ) : (
            // Giữ layout cân bằng khi không có nút trước
            <span style={{ minWidth: '120px' }} />
          )}

          {/* Nút Về poster */}
          <Link
            to="/"
            className="nut-giay"
            aria-label="Quay về trang chủ poster"
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

          {/* Nút Sau – ẩn nếu là cột mốc cuối */}
          {id < 6 ? (
            <Link
              to={`/cot-moc/${id + 1}`}
              className="nut-giay"
              aria-label={`Cột mốc sau: Cột mốc ${id + 1}`}
            >
              Cột mốc sau →
            </Link>
          ) : (
            <span style={{ minWidth: '120px' }} />
          )}
        </nav>
      )}
    </div>
  );
}

export default MilestoneNav;
