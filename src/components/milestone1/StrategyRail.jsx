// src/components/milestone1/StrategyRail.jsx
// Thanh tiến trình chiến lược cố định dọc bên trái (desktop) và ngang (mobile)
// Hiển thị chuỗi: "Chuyển hướng đúng → Chuẩn bị lực lượng → Nhận diện thời cơ → Chớp thời cơ → Thắng lợi"
// Bước 1 active, các bước sau mờ. Tích hợp scroll-spy highlight section đang xem.

import { memo } from 'react';

const SUB_SECTIONS = [
  { id: 'hero', label: '01. Giới thiệu' },
  { id: 'boi-canh', label: '02. Bối cảnh lịch sử' },
  { id: 'hoi-nghi', label: '03. Hội nghị TW6' },
  { id: 'logic-chuyen-huong', label: '04. Logic chuyển hướng' },
  { id: 'dieu-chinh', label: '05. Điều chỉnh chiến lược' },
  { id: 'y-nghia', label: '06. Ý nghĩa & Tiến trình' },
];

function StrategyRail({ chuoiChienLuoc, activeSection, onNavigateSection }) {
  return (
    <>
      {/* 1. THANH TIẾN TRÌNH DỌC BÊN TRÁI TRÊN DESKTOP */}
      <aside
        className="m1-strategy-rail-desktop"
        aria-label="Thanh tiến trình chuỗi quyết định chiến lược 1945"
      >
        <div className="rail-heading">
          <span>✦</span>
          <span>Chuỗi chiến lược 1945</span>
        </div>

        {/* 5 Bước tổng thể: Bước 1 active, bước 2–5 mờ */}
        <div className="rail-steps-list">
          <div className="rail-track-line" aria-hidden="true" />
          {chuoiChienLuoc.map((step) => {
            const isActive = step.isActive;
            return (
              <div
                key={step.id}
                className={`rail-step-item ${isActive ? 'is-active' : 'is-muted'}`}
                title={`${step.so}. ${step.ten} (${step.moc}): ${step.moTa}`}
              >
                <div className="rail-step-dot" aria-hidden="true">
                  {step.so}
                </div>
                <div className="rail-step-body">
                  <span className="rail-step-title">{step.ten}</span>
                  <span className="rail-step-date">{step.moc}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-section navigation bên trong Cột mốc 1 */}
        <nav className="rail-subsections" aria-label="Nội dung Cột mốc 01">
          <span className="rail-subsec-title">Mục đang xem</span>
          {SUB_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              className={`rail-subsec-link ${activeSection === sec.id ? 'is-current' : ''}`}
              onClick={() => onNavigateSection(sec.id)}
              aria-current={activeSection === sec.id ? 'true' : undefined}
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. THANH TIẾN TRÌNH NGANG DƯỚI HEADER TRÊN MOBILE */}
      <nav
        className="m1-strategy-rail-mobile"
        aria-label="Tiến trình chiến lược trên mobile"
      >
        <div className="m1-rail-mobile-inner">
          {chuoiChienLuoc.map((step) => (
            <span
              key={step.id}
              className={`rail-mobile-step ${step.isActive ? 'is-active' : ''}`}
            >
              <strong>{step.so}.</strong> {step.ten}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}

export default memo(StrategyRail);
