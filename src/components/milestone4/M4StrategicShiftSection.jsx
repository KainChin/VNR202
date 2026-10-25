// src/components/milestone4/M4StrategicShiftSection.jsx
// Section "Đảng xây dựng lực lượng như thế nào?": 2 khối lớn (Lực lượng chính trị vs Lực lượng vũ trang)
// Kế thừa layout từ StrategicShiftSection của Cột mốc 01

import { memo, useState } from 'react';

function M4StrategicShiftSection({ shiftData }) {
  const [activeBlock, setActiveBlock] = useState(null);
  const { khoiChinhTri, khoiVuTrang } = shiftData;

  return (
    <section
      id="xay-dung"
      className="m1-section"
      aria-labelledby="heading-xay-dung-luc-luong"
    >
      <div>
        <span className="m1-sec-eyebrow">QUYẾT SÁCH BẢN LỀ</span>
        <h2 id="heading-xay-dung-luc-luong" className="m1-sec-title">
          {shiftData.tieuDe}
        </h2>
        <p className="m1-sec-p">{shiftData.phuDe}</p>
      </div>

      <div className="m1-shifts-container">
        {/* KHỐI 1: XÂY DỰNG LỰC LƯỢNG CHÍNH TRỊ */}
        <div
          className={`shift-block shift-block--task ${
            activeBlock === 'chinh-tri' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('chinh-tri')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('chinh-tri')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiChinhTri.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">{khoiChinhTri.badge}</span>
            <h3 className="shift-block-title">{khoiChinhTri.tieuDe}</h3>
            <p className="shift-block-role">{khoiChinhTri.headline}</p>
          </div>

          <div className="shift-points-list">
            {khoiChinhTri.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>

          {/* Callout đúc kết của Khối 1 */}
          <div className="shift-core-banner" style={{ marginTop: 'auto' }}>
            <p className="shift-core-p">
              “{khoiChinhTri.callout}”
            </p>
          </div>
        </div>

        {/* KHỐI 2: XÂY DỰNG LỰC LƯỢNG VŨ TRANG */}
        <div
          className={`shift-block shift-block--method ${
            activeBlock === 'vu-trang' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('vu-trang')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('vu-trang')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiVuTrang.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">{khoiVuTrang.badge}</span>
            <h3 className="shift-block-title">{khoiVuTrang.tieuDe}</h3>
            <p className="shift-block-role">{khoiVuTrang.headline}</p>
          </div>

          <div className="shift-points-list">
            {khoiVuTrang.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>

          {/* Callout đúc kết của Khối 2 */}
          <div className="shift-core-banner" style={{ marginTop: 'auto', borderLeftColor: 'var(--m1-gold)' }}>
            <p className="shift-core-p" style={{ color: 'var(--m1-text)' }}>
              “{khoiVuTrang.callout}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(M4StrategicShiftSection);
