// src/components/HeaderNavPills.jsx
// Thanh 7 mốc lịch sử trên Header chuẩn Museum Editorial
// Cho phép chuyển nhanh giữa 7 cột mốc (1–7) và làm nổi bật mốc đang xem

import { memo } from 'react';
import { Link } from 'react-router-dom';

function HeaderNavPills({ currentMilestone, total = 7 }) {
  const pills = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="m4-header-nav-pills" aria-label="Tiến trình 7 cột mốc lịch sử">
      {pills.map((num) => {
        const isActive = num === currentMilestone;
        if (isActive) {
          return (
            <span
              key={num}
              className="m4-nav-pill is-active"
              title={`Cột mốc 0${num} (Đang xem)`}
              aria-current="page"
            >
              {num}
            </span>
          );
        }

        // Cột mốc 1 (1930) xem qua video popup trên poster chính -> giữ khóa
        if (num === 1) {
          return (
            <span
              key={num}
              className="m4-nav-pill is-locked"
              title="Cột mốc 01 (Khóa – Xem video tại Poster chính)"
              aria-disabled="true"
            >
              {num}
            </span>
          );
        }

        // Các cột mốc còn lại (2–7) mở cho phép click xem tự do
        return (
          <Link
            key={num}
            to={`/cot-moc/${num}`}
            className="m4-nav-pill"
            title={`Chuyển tới Cột mốc 0${num}`}
          >
            {num}
          </Link>
        );
      })}
    </nav>
  );
}

export default memo(HeaderNavPills);
