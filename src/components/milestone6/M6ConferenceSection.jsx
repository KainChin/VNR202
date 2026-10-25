// src/components/milestone6/M6ConferenceSection.jsx
// Section "Mốc then chốt: Hội nghị Tân Trào (14–17/8/1945)"
// - Bên trái: Ảnh tư liệu Thư kêu gọi Tổng khởi nghĩa của Hồ Chí Minh (click phóng to toàn màn hình)
// - Bên phải: Banner sự kiện, Bảng thông tin lịch sử, Lời hiệu triệu đanh thép, và Nút mở Video tư liệu (Phím V)

import { memo } from 'react';

function M6ConferenceSection({ confData, onOpenPhoto, onOpenVideo }) {
  const { thongTinCoBan, anhTuLieu, moTa, videoShorts } = confData;

  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-moc-then-chot-m6">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">SỰ KIỆN LỊCH SỬ THEN CHỐT</span>
        <h2 id="heading-moc-then-chot-m6" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="conf-grid-split">
        {/* CỘT TRÁI: ẢNH TƯ LIỆU THƯ KÊU GỌI TỔNG KHỞI NGHĨA CỦA HỒ CHÍ MINH */}
        <div className="conf-left-gallery">
          <figure className="conf-frame-card" style={{ height: '100%', margin: 0 }}>
            <div
              className="conf-frame-inner"
              onClick={() =>
                onOpenPhoto &&
                onOpenPhoto({
                  src: anhTuLieu.src,
                  nhan: anhTuLieu.tieuDe,
                  chuThich: anhTuLieu.ghiChu,
                })
              }
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
              title={onOpenPhoto ? 'Nhấn để phóng to ảnh' : undefined}
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

        {/* CỘT PHẢI: NỘI DUNG SỰ KIỆN & BẢNG THÔNG TIN + NÚT VIDEO TƯ LIỆU */}
        <div className="conf-right-main">
          <div className="m4-conf-event-banner">
            <span className="m4-conf-event-tag">✦ QUYẾT SÁCH TOÀN QUỐC</span>
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

          {/* Quyết sách sống còn */}
          <blockquote className="conf-quote-callout" style={{ marginTop: '1.25rem' }}>
            <p className="conf-quote-p">
              “{moTa}”
            </p>
          </blockquote>

          {/* Khối video tư liệu lịch sử */}
          {videoShorts && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem 1.25rem',
                background: 'rgba(143, 36, 24, 0.06)',
                border: '1.5px solid rgba(143, 36, 24, 0.3)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                  <span
                    style={{
                      background: 'var(--m1-red, #8F2418)',
                      color: '#FFF9EE',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '3px',
                    }}
                  >
                    ▶ {videoShorts.nhanTag || 'PHIM TƯ LIỆU'}
                  </span>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--m1-text, #35271D)' }}>
                    {videoShorts.videoTitle}
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--m1-text-muted, #7A6A58)' }}>
                  Nguồn: {videoShorts.tenNguon}
                </p>
              </div>

              {onOpenVideo && (
                <button
                  type="button"
                  onClick={onOpenVideo}
                  style={{
                    background: 'var(--m1-red, #8F2418)',
                    color: '#FFF9EE',
                    border: '1px solid var(--m1-red, #8F2418)',
                    borderRadius: '4px',
                    padding: '0.45rem 1.1rem',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease',
                  }}
                  title="Mở xem video tư liệu lịch sử"
                  aria-label="Xem video tư liệu lịch sử"
                >
                  ▶ {videoShorts.nhanNut || 'Xem tư liệu'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(M6ConferenceSection);
