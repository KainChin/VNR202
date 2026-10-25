// src/components/milestone7/M7StrategicShiftSection.jsx
// Section "Tuyên ngôn Độc lập tuyên bố điều gì?": 2 bản tuyên thư lịch sử trang trọng
// Khối 1: Tuyên bố chấm dứt chế độ thuộc địa (viền đỏ nâu)
// Khối 2: Khẳng định quyền độc lập, tự do (viền vàng đồng)

import { memo, useState } from 'react';

function M7StrategicShiftSection({ shiftData }) {
  const [activeBlock, setActiveBlock] = useState(null);
  if (!shiftData) return null;
  const { khoi1, khoi2 } = shiftData;

  return (
    <section
      id="tuyen-bo"
      className="m1-section"
      aria-labelledby="heading-tuyen-bo-m7"
    >
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">NỘI DUNG TUYÊN NGÔN LỊCH SỬ</span>
        <h2 id="heading-tuyen-bo-m7" className="m1-sec-title">
          {shiftData.tieuDe}
        </h2>
        <p className="m1-sec-p">{shiftData.phuDe}</p>
      </div>

      <div className="m1-shifts-container">
        {/* BẢN TUYÊN THƯ I: CHẤM DỨT CHẾ ĐỘ THUỘC ĐỊA */}
        <div
          className={`m7-decree-card is-crimson ${
            activeBlock === 'khoi1' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('khoi1')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('khoi1')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoi1?.tieuDeChinh}
        >
          <span className="m7-decree-badge">NỘI DUNG I</span>
          <h3 className="m7-decree-title">{khoi1?.tieuDeChinh}</h3>
          <p className="m7-decree-subtitle">{khoi1?.tieuDePhu}</p>

          <ul className="m7-decree-list">
            {khoi1?.noiDung?.map((item, idx) => (
              <li key={idx} className="m7-decree-item">
                <span className="m7-decree-bullet" aria-hidden="true" style={{ color: 'var(--m1-red, #8F2418)' }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Callout đúc kết của Khối 1 */}
          {khoi1?.callout && (
            <div className="m7-decree-callout">
              <p className="m7-decree-callout-p">
                {khoi1.callout}
              </p>
            </div>
          )}
        </div>

        {/* BẢN TUYÊN THƯ II: KHẲNG ĐỊNH QUYỀN ĐỘC LẬP, TỰ DO */}
        <div
          className={`m7-decree-card is-gold ${
            activeBlock === 'khoi2' ? 'is-focused' : ''
          }`}
          onMouseEnter={() => setActiveBlock('khoi2')}
          onMouseLeave={() => setActiveBlock(null)}
          onFocus={() => setActiveBlock('khoi2')}
          onBlur={() => setActiveBlock(null)}
          tabIndex={0}
          role="region"
          aria-label={khoi2?.tieuDeChinh}
        >
          <span className="m7-decree-badge">NỘI DUNG II</span>
          <h3 className="m7-decree-title">{khoi2?.tieuDeChinh}</h3>
          <p className="m7-decree-subtitle">{khoi2?.tieuDePhu}</p>

          <ul className="m7-decree-list">
            {khoi2?.noiDung?.map((item, idx) => (
              <li key={idx} className="m7-decree-item">
                <span className="m7-decree-bullet" aria-hidden="true" style={{ color: 'var(--m1-gold, #B98B4A)' }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Callout đúc kết của Khối 2 */}
          {khoi2?.callout && (
            <div className="m7-decree-callout" style={{ borderLeft: '4px solid var(--m1-gold, #B98B4A)' }}>
              <p className="m7-decree-callout-p" style={{ color: '#7D571E' }}>
                {khoi2.callout}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(M7StrategicShiftSection);
