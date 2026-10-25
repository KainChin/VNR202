// src/components/milestone6/M6StrategicShiftSection.jsx
// Section "Hành động đồng loạt: 15 ngày thần tốc": 2 khối lớn
// - Khối 1: Ba thắng lợi đầu não quyết định (Hà Nội, Huế, Sài Gòn)
// - Khối 2: Nghệ thuật chỉ đạo khởi nghĩa (Chủ động, Lực lượng chính trị nòng cốt, Thần tốc)
// Kế thừa layout từ StrategicShiftSection của Cột mốc 01, 04, 05

import { memo, useState } from 'react';

function M6StrategicShiftSection({ shiftData }) {
  const [activeBlock, setActiveBlock] = useState(null);
  const { khoiNhiemVu, khoiHinhThuc } = shiftData;

  return (
    <section
      id="dieu-chinh"
      className="m1-section"
      aria-labelledby="heading-dieu-chinh-m6"
    >
      <div>
        <span className="m1-sec-eyebrow">KHỞI NGHĨA TOÀN DÂN</span>
        <h2 id="heading-dieu-chinh-m6" className="m1-sec-title">
          {shiftData.tieuDe}
        </h2>
        <p className="m1-sec-p">{shiftData.phuDe}</p>
      </div>

      <div className="m1-shifts-container">
        {/* KHỐI 1: BA THẮNG LỢI ĐẦU NÃO QUYẾT ĐỊNH */}
        <div
          className={`shift-block shift-block--task ${
            activeBlock === 'dau-nao' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('dau-nao')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('dau-nao')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiNhiemVu.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">ĐỘT PHÁ CHIẾN LƯỢC</span>
            <h3 className="shift-block-title">{khoiNhiemVu.tieuDe}</h3>
            <p className="shift-block-role">{khoiNhiemVu.vaiTro}</p>
          </div>

          <div className="shift-points-list">
            {khoiNhiemVu.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>

          {/* Callout đúc kết của Khối 1 */}
          <div className="shift-core-banner" style={{ marginTop: 'auto' }}>
            <p className="shift-core-p">
              “{khoiNhiemVu.noiDungChinh}”
            </p>
          </div>
        </div>

        {/* KHỐI 2: NGHỆ THUẬT CHỈ ĐẠO KHỞI NGHĨA */}
        <div
          className={`shift-block shift-block--method ${
            activeBlock === 'nghe-thuat' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('nghe-thuat')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('nghe-thuat')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoiHinhThuc.tieuDe}
        >
          <div className="shift-block-header">
            <span className="shift-block-badge">NGHỆ THUẬT KHỞI NGHĨA</span>
            <h3 className="shift-block-title">{khoiHinhThuc.tieuDe}</h3>
            <p className="shift-block-role">{khoiHinhThuc.vaiTro}</p>
          </div>

          <div className="shift-points-list">
            {khoiHinhThuc.cacDiem.map((item, idx) => (
              <div key={idx} className="shift-point-item">
                <h4 className="shift-point-title">{item.tieuDeNho}</h4>
                <p className="shift-point-desc">{item.moTa}</p>
              </div>
            ))}
          </div>

          {/* Callout đúc kết của Khối 2 */}
          <div className="shift-core-banner" style={{ marginTop: 'auto', borderLeftColor: 'var(--m1-gold)' }}>
            <p className="shift-core-p" style={{ color: 'var(--m1-text)' }}>
              “{khoiHinhThuc.noiDungChinh}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(M6StrategicShiftSection);
