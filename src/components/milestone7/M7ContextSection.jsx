// src/components/milestone7/M7ContextSection.jsx
// Section "Vì sao có Tuyên ngôn Độc lập?": 2 cột thẻ parchment + dải danh ngôn vàng ở giữa

import { memo } from 'react';

function M7ContextSection({ contextData }) {
  if (!contextData) return null;
  const { cotTrai, cotPhai, cauNhanGiua } = contextData;

  return (
    <section id="boi-canh" className="m1-section" aria-labelledby="heading-vi-sao-m7">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">BỐI CẢNH LỊCH SỬ</span>
        <h2 id="heading-vi-sao-m7" className="m1-sec-title">
          {contextData.tieuDe}
        </h2>
        <p className="m1-sec-p">{contextData.phuDe}</p>
      </div>

      <div className="m4-context-wrapper">
        {/* Lưới 2 cột: Từ thắng lợi của Tổng khởi nghĩa vs Yêu cầu của lịch sử */}
        <div className="m4-context-grid-2col">
          {/* CỘT TRÁI: TỪ THẮNG LỢI CỦA TỔNG KHỞI NGHĨA */}
          <article className="m7-context-card">
            <div className="m4-context-card__header" style={{ marginBottom: '1.25rem' }}>
              <span className="m4-context-card__icon" aria-hidden="true" style={{ fontSize: '1.5rem' }}>🚩</span>
              <h3 className="m4-context-card__title" style={{ fontFamily: "var(--m1-font-serif, 'Playfair Display', Georgia, serif)", fontSize: '1.25rem' }}>
                {cotTrai?.tieuDe}
              </h3>
            </div>
            <ul className="m4-context-list">
              {cotTrai?.diemChinh?.map((item, idx) => (
                <li key={idx} className="m4-context-item">
                  <span className="m4-context-bullet" aria-hidden="true" style={{ color: 'var(--m1-red, #8F2418)' }}>✦</span>
                  <span className="m4-context-text" style={{ fontSize: '0.96rem', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* CỘT PHẢI: YÊU CẦU CỦA LỊCH SỬ */}
          <article className="m7-context-card">
            <div className="m4-context-card__header" style={{ marginBottom: '1.25rem' }}>
              <span className="m4-context-card__icon" aria-hidden="true" style={{ fontSize: '1.5rem' }}>📜</span>
              <h3 className="m4-context-card__title" style={{ fontFamily: "var(--m1-font-serif, 'Playfair Display', Georgia, serif)", fontSize: '1.25rem' }}>
                {cotPhai?.tieuDe}
              </h3>
            </div>
            <ul className="m4-context-list">
              {cotPhai?.diemChinh?.map((item, idx) => (
                <li key={idx} className="m4-context-item">
                  <span className="m4-context-bullet" aria-hidden="true" style={{ color: 'var(--m1-gold, #B98B4A)' }}>✦</span>
                  <span className="m4-context-text" style={{ fontSize: '0.96rem', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* CÂU NHẤN NẰM GIỮA HAI BÊN BỐI CẢNH */}
        {cauNhanGiua && (
          <div className="m7-quote-banner-gold" role="note">
            <blockquote className="m7-quote-banner-text">
              “{cauNhanGiua}”
            </blockquote>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(M7ContextSection);
