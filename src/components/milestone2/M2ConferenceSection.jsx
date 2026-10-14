// src/components/milestone2/M2ConferenceSection.jsx
// Section Hội nghị Trung ương 8 (10–19/5/1941) tại Lán Khuổi Nặm, Pác Bó
// Bố cục mới: Không video, 2 ảnh tư liệu (Lán Khuổi Nặm & Tranh Hội nghị) đặt song song trang trọng
// Phía dưới là Bảng thông tin nhanh 3 mục và Khối trích dẫn đúc kết ý nghĩa lịch sử

import { memo } from 'react';

function M2ConferenceSection({ confData }) {
  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-hoi-nghi">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">HỘI NGHỊ LỊCH SỬ TẠI PÁC BÓ</span>
        <h2 id="heading-hoi-nghi" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="m2-conf-wrapper">
        {/* 1. HAI BỨC ẢNH TƯ LIỆU ĐẶT SONG SONG (MUSEUM GALLERY GRID) */}
        <div className="m2-conf-gallery-grid">
          {confData.anhTuLieu.map((img, idx) => (
            <figure key={idx} className="m2-conf-photo-card">
              <div className="m2-conf-photo-inner">
                <img src={img.src} alt={img.tieuDe} loading="lazy" />
              </div>
              <figcaption className="m2-conf-photo-caption">
                <strong className="m2-conf-photo-title">{img.tieuDe}</strong>
                <span className="m2-conf-photo-note">{img.ghiChu}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 2. KHỐI THÔNG TIN HỘI NGHỊ & TRÍCH DẪN ĐÚC KẾT */}
        <div className="m2-conf-details-bar">
          {/* Bảng 3 thông số then chốt */}
          <div className="m2-conf-facts-grid">
            {confData.thongTinCoBan.map((item, idx) => (
              <div key={idx} className="m2-conf-fact-item">
                <span className="m2-conf-fact-lbl">{item.nhan}</span>
                <span className="m2-conf-fact-val">{item.giaTri}</span>
              </div>
            ))}
          </div>

          {/* Trích dẫn khẳng định vai trò lịch sử */}
          <blockquote className="m2-conf-quote-callout">
            <p className="m2-conf-quote-p">
              “{confData.quoteBox}”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default memo(M2ConferenceSection);
