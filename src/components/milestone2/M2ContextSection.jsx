// src/components/milestone2/M2ContextSection.jsx
// Section Bối cảnh lịch sử Cột mốc 02: 2 chuyển biến then chốt đầu năm 1941
// Thiết kế: Tối giản, gọn gàng, súc tích (không dùng ảnh để tiết kiệm số ảnh)

import { memo } from 'react';

function M2ContextSection({ boiCanhData }) {
  return (
    <section id="boi-canh" className="m1-section" aria-labelledby="heading-boi-canh">
      <div>
        <span className="m1-sec-eyebrow">BƯỚC NGOẶT ĐẦU NĂM 1941</span>
        <h2 id="heading-boi-canh" className="m1-sec-title">
          {boiCanhData.tieuDe}
        </h2>
        <p className="m1-sec-p">{boiCanhData.phuDe}</p>
      </div>

      <div className="m2-context-compact-grid">
        {boiCanhData.cacMoc.map((moc) => (
          <article key={moc.so} className="m2-ctx-clean-card">
            <div className="m2-ctx-badge-bar">
              <span className="m2-ctx-num">{moc.so}</span>
              <span className="m2-ctx-date">{moc.thoiDiem}</span>
            </div>
            <h3 className="m2-ctx-card-title">{moc.tieuDe}</h3>
            <p className="m2-ctx-card-desc">{moc.moTa}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(M2ContextSection);
