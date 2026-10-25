// src/components/milestone4/M4ContextSection.jsx
// Section "Vì sao phải xây dựng lực lượng?": 2 cột + câu nhấn ở giữa
// Layout kế thừa từ ContextSection với phong cách Museum Editorial

import { memo } from 'react';

function M4ContextSection({ contextData }) {
  const { cotTrai, cotPhai, cauNhanGiua } = contextData;

  return (
    <section id="boi-canh" className="m1-section" aria-labelledby="heading-vi-sao">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">BỐI CẢNH & YÊU CẦU LỊCH SỬ</span>
        <h2 id="heading-vi-sao" className="m1-sec-title">
          {contextData.tieuDe}
        </h2>
        <p className="m1-sec-p">{contextData.phuDe}</p>
      </div>

      <div className="m4-context-wrapper">
        {/* Lưới 2 cột: Tiền đề từ đường lối vs Yêu cầu từ thực tiễn */}
        <div className="m4-context-grid-2col">
          {/* CỘT TRÁI: TIỀN ĐỀ TỪ ĐƯỜNG LỐI */}
          <article className="m4-context-card">
            <div className="m4-context-card__header">
              <span className="m4-context-card__icon" aria-hidden="true">📜</span>
              <h3 className="m4-context-card__title">{cotTrai.tieuDe}</h3>
            </div>
            <ul className="m4-context-list">
              {cotTrai.diemChinh.map((item, idx) => (
                <li key={idx} className="m4-context-item">
                  <span className="m4-context-bullet" aria-hidden="true">✦</span>
                  <span className="m4-context-text">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* CỘT PHẢI: YÊU CẦU TỪ THỰC TIỄN */}
          <article className="m4-context-card">
            <div className="m4-context-card__header">
              <span className="m4-context-card__icon" aria-hidden="true">⚡</span>
              <h3 className="m4-context-card__title">{cotPhai.tieuDe}</h3>
            </div>
            <ul className="m4-context-list">
              {cotPhai.diemChinh.map((item, idx) => (
                <li key={idx} className="m4-context-item">
                  <span className="m4-context-bullet" aria-hidden="true">✦</span>
                  <span className="m4-context-text">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* CÂU NHẤN NẰM GIỮA HAI BÊN BỐI CẢNH */}
        <div className="m4-context-banner-accent" role="note">
          <blockquote className="m4-context-banner-quote">
            “{cauNhanGiua}”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default memo(M4ContextSection);
