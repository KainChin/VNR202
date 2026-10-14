// src/components/milestone1/StrategicShiftSection.jsx
// Section "Đảng điều chỉnh như thế nào?": 2 khối lớn (Nhiệm vụ / Hình thức đấu tranh)
// Thêm tương tác nhẹ khi hover/focus làm nổi bật khối, KHÔNG dùng card nhỏ.

import { memo, useState } from 'react';

function StrategicShiftSection({ shiftData }) {
  const [activeBlock, setActiveBlock] = useState(null);

  const { khoiNhiemVu, khoiHinhThuc } = shiftData;

  return (
    <section
      id="dieu-chinh"
      className="m1-section"
      aria-labelledby="heading-strategic-shifts"
    >
      <div>
        <span className="m1-sec-eyebrow">QUYẾT SÁCH BẢN LỀ</span>
        <h2 id="heading-strategic-shifts" className="m1-sec-title">
          {shiftData.tieuDe}
        </h2>
        <p className="m1-sec-p">{shiftData.phuDe}</p>
      </div>

      <div className="m1-shifts-container">
        {/* KHỐI 1: ĐIỀU CHỈNH VỀ NHIỆM VỤ CHIẾN LƯỢC */}
        <div
          className={`shift-block shift-block--task ${
            activeBlock === 'task' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('task')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('task')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiNhiemVu.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">Quyết sách 01</span>
            <h3 className="shift-block-title">{khoiNhiemVu.tieuDe}</h3>
            <p className="shift-block-role">{khoiNhiemVu.vaiTro}</p>
          </div>

          <div className="shift-core-banner">
            <p className="shift-core-p">
              “{khoiNhiemVu.noiDungChinh}”
            </p>
          </div>

          <div className="shift-points-list">
            {khoiNhiemVu.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KHỐI 2: ĐIỀU CHỈNH VỀ HÌNH THỨC & PHƯƠNG PHÁP */}
        <div
          className={`shift-block shift-block--method ${
            activeBlock === 'method' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('method')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('method')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiHinhThuc.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">Quyết sách 02</span>
            <h3 className="shift-block-title">{khoiHinhThuc.tieuDe}</h3>
            <p className="shift-block-role">{khoiHinhThuc.vaiTro}</p>
          </div>

          <div className="shift-core-banner" style={{ borderLeftColor: 'var(--m1-gold)' }}>
            <p className="shift-core-p" style={{ color: 'var(--m1-text)' }}>
              “{khoiHinhThuc.noiDungChinh}”
            </p>
          </div>

          <div className="shift-points-list">
            {khoiHinhThuc.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(StrategicShiftSection);
