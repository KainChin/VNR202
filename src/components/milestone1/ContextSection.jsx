// src/components/milestone1/ContextSection.jsx
// Section Bối cảnh lịch sử: 3 mốc dồn dập trong mùa thu 1939

import { memo } from 'react';

function ContextSection({ boiCanhData, onOpenPhoto }) {
  return (
    <section id="boi-canh" className="m1-section" aria-labelledby="heading-boi-canh">
      <div>
        <span className="m1-sec-eyebrow">TÌNH HÌNH THẾ GIỚI & ĐÔNG DƯƠNG</span>
        <h2 id="heading-boi-canh" className="m1-sec-title">
          {boiCanhData.tieuDe}
        </h2>
        <p className="m1-sec-p">{boiCanhData.phuDe}</p>
      </div>

      <div className="m1-context-timeline">
        {/* Đường nối ngang mảnh */}
        <div className="m1-context-track" aria-hidden="true" />

        <div className="m1-context-grid">
          {boiCanhData.cacMoc.map((moc) => {
            const imgSrc = moc.hinhAnh || moc.anh?.src || moc.anh || moc.src;
            const imgAlt = moc.chuThich || moc.anh?.chuThich || moc.tieuDe || 'Ảnh tư liệu lịch sử';

            return (
              <article key={moc.so} className="m1-ctx-card">
                <div className="m1-ctx-header">
                  <span className="m1-ctx-num">{moc.so}</span>
                  <span className="m1-ctx-date">{moc.thoiDiem}</span>
                </div>

                <div
                  className="m1-ctx-thumb"
                  onClick={() => onOpenPhoto && onOpenPhoto({ src: imgSrc, nhan: moc.tieuDe, chuThich: imgAlt })}
                  style={{ cursor: onOpenPhoto ? 'zoom-in' : 'default' }}
                  title={onOpenPhoto ? 'Nhấn để phóng to toàn bộ ảnh' : undefined}
                >
                  {imgSrc ? (
                    <img src={imgSrc} alt={imgAlt} loading="lazy" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: '#2B1810' }} />
                  )}
                </div>

                <h3 className="m1-ctx-title">{moc.tieuDe}</h3>
                <p className="m1-ctx-desc">{moc.moTa}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(ContextSection);
