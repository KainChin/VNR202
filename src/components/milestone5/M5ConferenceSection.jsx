// src/components/milestone5/M5ConferenceSection.jsx
// Section "Mốc then chốt: 9–12/3/1945":
// - Bên trái: Ảnh tư liệu Hội nghị Đình Bảng & Chỉ thị lịch sử
// - Bên phải: Tiêu đề sự kiện, Bảng thông tin, Trích dẫn chỉ thị & Nút "Xem tư liệu" (tự động chuyển trạng thái khi có video)

import { memo } from 'react';

function M5ConferenceSection({ confData, onOpenPhoto }) {
  const { thongTinCoBan, anhTuLieu, moTa } = confData;

  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-moc-then-chot-m5">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">SỰ KIỆN LỊCH SỬ THEN CHỐT</span>
        <h2 id="heading-moc-then-chot-m5" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="conf-grid-split">
        {/* CỘT TRÁI: ẢNH TƯ LIỆU TRUYỀN ĐƠN VIỆT MINH / VĂN KIỆN LỊCH SỬ */}
        <div className="conf-left-gallery">
          <figure className="conf-frame-card" style={{ height: '100%', margin: 0 }}>
            <div
              className="conf-frame-inner"
              onClick={() => onOpenPhoto && onOpenPhoto({ src: anhTuLieu.src, nhan: anhTuLieu.tieuDe, chuThich: anhTuLieu.ghiChu })}
              style={{
                minHeight: '340px',
                background: '#f4ede2',
                cursor: onOpenPhoto ? 'zoom-in' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
                position: 'relative',
              }}
              title={onOpenPhoto ? 'Nhấn để phóng to toàn bộ ảnh' : undefined}
            >
              <img
                src={anhTuLieu.src}
                alt={anhTuLieu.tieuDe}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  maxHeight: '440px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '3px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(20, 15, 11, 0.75)',
                  color: '#ffffff',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  pointerEvents: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                🔍 Xem toàn bộ ảnh
              </span>
            </div>
            <figcaption className="conf-frame-info">
              <strong className="conf-frame-caption">{anhTuLieu.tieuDe}</strong>
              <span className="conf-frame-note">{anhTuLieu.ghiChu}</span>
            </figcaption>
          </figure>
        </div>

        {/* CỘT PHẢI: NỘI DUNG SỰ KIỆN & BẢNG THÔNG TIN */}
        <div className="conf-right-main">
          <div className="m4-conf-event-banner">
            <span className="m4-conf-event-tag">✦ VĂN KIỆN QUYẾT ĐỊNH VẬN MỆNH</span>
            <h3 className="m4-conf-event-title">{confData.tenSuKien}</h3>
          </div>

          {/* Bảng thông số chi tiết */}
          <div className="conf-info-panel">
            {thongTinCoBan.map((item, idx) => (
              <div key={idx} className="conf-info-item">
                <span className="conf-item-lbl">{item.nhan}</span>
                <span className="conf-item-val">{item.giaTri}</span>
              </div>
            ))}
          </div>

          {/* Mô tả lịch sử */}
          <blockquote className="conf-quote-callout" style={{ marginTop: '1.25rem' }}>
            <p className="conf-quote-p">
              “{moTa}”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default memo(M5ConferenceSection);
