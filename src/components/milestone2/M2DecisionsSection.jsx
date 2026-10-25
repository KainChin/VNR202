// src/components/milestone2/M2DecisionsSection.jsx
// Section "3 QUYẾT SÁCH CHIẾN LƯỢC" của Hội nghị Trung ương 8 (5/1941)
// Tối ưu: Card 1 dạng Tuyên ngôn biểu tượng (không tốn ảnh); Card 2 & 3 có ảnh tư liệu sắc nét

import { memo } from 'react';

function M2DecisionsSection({ decisionsData, onOpenPhoto }) {
  if (!decisionsData) return null;

  return (
    <section id="quyet-sach" className="m1-section" aria-labelledby="heading-quyet-sach">
      <div>
        <span className="m1-sec-eyebrow">QUYẾT ĐỊNH BẢN LỀ CỦA HỘI NGHỊ TW8</span>
        <h2 id="heading-quyet-sach" className="m1-sec-title">
          {decisionsData.tieuDe}
        </h2>
        <p className="m1-sec-p">{decisionsData.phuDe}</p>
      </div>

      <div className="m2-decisions-grid">
        {decisionsData.cacQuyetDinh?.map((item) => (
          <article key={item.so} className="m2-decision-card">
            <div className="m2-card-header">
              <span className="m2-card-num">{item.so}</span>
              <span className="m2-card-role">{item.vaiTro}</span>
            </div>

            <h3 className="m2-card-title">{item.tieuDe}</h3>

            <blockquote className="m2-card-quote">
              <p>{item.quote}</p>
            </blockquote>

            {/* Ảnh minh họa tư liệu (nếu có) hoặc Khối Tuyên ngôn trọng tâm */}
            {item.hinhAnh ? (
              <div
                className="m2-card-img-wrap"
                onClick={() => onOpenPhoto && onOpenPhoto({ src: item.hinhAnh, nhan: item.tieuDe, chuThich: item.chuThichAnh })}
                style={{ cursor: onOpenPhoto ? 'zoom-in' : 'default' }}
                title={onOpenPhoto ? 'Nhấn để phóng to toàn bộ ảnh' : undefined}
              >
                <img src={item.hinhAnh} alt={item.chuThichAnh} loading="lazy" />
                <span className="m2-card-img-caption">{item.chuThichAnh}</span>
              </div>
            ) : (
              <div className="m2-card-manifesto-highlight">
                <span className="m2-manifesto-icon">★</span>
                <p className="m2-manifesto-text">
                  Quyền lợi của bộ phận và giai cấp phải đặt dưới quyền lợi sống còn của toàn thể dân tộc.
                </p>
              </div>
            )}

            <ul className="m2-card-points">
              {item.cacY.map((point, idx) => (
                <li key={idx} className="m2-point-item">
                  <span className="m2-point-bullet">▸</span>
                  <span className="m2-point-text">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(M2DecisionsSection);
