// src/components/milestone5/M5StrategicShiftSection.jsx
// Section "Đảng điều chỉnh như thế nào?": 2 khối lớn (Kẻ thù & Khẩu hiệu vs Hình thức đấu tranh)
// Kế thừa layout từ StrategicShiftSection của Cột mốc 01 & 04

import { memo, useState } from 'react';

function M5StrategicShiftSection({ shiftData }) {
  const [activeBlock, setActiveBlock] = useState(null);
  const { khoiKeThuKhauHieu, khoiHinhThucDauTranh } = shiftData;

  return (
    <section
      id="dieu-chinh"
      className="m1-section"
      aria-labelledby="heading-dieu-chinh-m5"
    >
      <div>
        <span className="m1-sec-eyebrow">CHUYỂN HƯỚNG MŨI NHỌN</span>
        <h2 id="heading-dieu-chinh-m5" className="m1-sec-title">
          {shiftData.tieuDe}
        </h2>
        <p className="m1-sec-p">{shiftData.phuDe}</p>
      </div>

      <div className="m1-shifts-container">
        {/* KHỐI 1: ĐIỀU CHỈNH KẺ THÙ VÀ KHẨU HIỆU */}
        <div
          className={`shift-block shift-block--task ${
            activeBlock === 'ke-thu' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('ke-thu')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('ke-thu')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiKeThuKhauHieu.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">{khoiKeThuKhauHieu.badge}</span>
            <h3 className="shift-block-title">{khoiKeThuKhauHieu.tieuDe}</h3>
            <p className="shift-block-role">{khoiKeThuKhauHieu.headline}</p>
          </div>

          <div className="shift-points-list">
            {khoiKeThuKhauHieu.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>

          {/* Callout đúc kết của Khối 1 */}
          <div className="shift-core-banner" style={{ marginTop: 'auto' }}>
            <p className="shift-core-p">
              “{khoiKeThuKhauHieu.callout}”
            </p>
          </div>
        </div>

        {/* KHỐI 2: ĐIỀU CHỈNH HÌNH THỨC ĐẤU TRANH */}
        <div
          className={`shift-block shift-block--method ${
            activeBlock === 'hinh-thuc' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('hinh-thuc')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('hinh-thuc')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiHinhThucDauTranh.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">{khoiHinhThucDauTranh.badge}</span>
            <h3 className="shift-block-title">{khoiHinhThucDauTranh.tieuDe}</h3>
            <p className="shift-block-role">{khoiHinhThucDauTranh.headline}</p>
          </div>

          <div className="shift-points-list">
            {khoiHinhThucDauTranh.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>

          {/* Callout đúc kết của Khối 2 */}
          <div className="shift-core-banner" style={{ marginTop: 'auto', borderLeftColor: 'var(--m1-gold)' }}>
            <p className="shift-core-p" style={{ color: 'var(--m1-text)' }}>
              “{khoiHinhThucDauTranh.callout}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(M5StrategicShiftSection);
