// src/components/milestone1/ConferenceSection.jsx
// Bố cục Hội nghị Trung ương 6:
// - Bên trái: 2 ảnh tư liệu (1 ảnh trên: TBT Nguyễn Văn Cừ, 1 ảnh dưới: Căn cứ Bà Điểm)
// - Bên phải: Phía trên là Video tư liệu trực tiếp, Phía dưới là nội dung (Bảng thông tin & Quote box)

import { memo } from 'react';

function ConferenceSection({ confData, onOpenVideo, onOpenPhoto }) {
  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-hoi-nghi">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">BƯỚC NGOẶT ĐƯỜNG LỐI</span>
        <h2 id="heading-hoi-nghi" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="conf-grid-split">
        {/* CỘT TRÁI: 2 ẢNH (1 ẢNH TRÊN, 1 ẢNH DƯỚI) CÓ THỂ CLICK PHÓNG TO */}
        <div className="conf-left-gallery">
          {confData.anhTuLieu.map((img, idx) => (
            <figure key={idx} className="conf-frame-card">
              <div
                className="conf-frame-inner"
                onClick={() => onOpenPhoto && onOpenPhoto({ src: img.src, nhan: img.tieuDe, chuThich: img.ghiChu })}
                style={{ cursor: onOpenPhoto ? 'zoom-in' : 'default' }}
                title={onOpenPhoto ? 'Nhấn để phóng to toàn bộ ảnh' : undefined}
              >
                <img src={img.src} alt={img.tieuDe} loading="lazy" />
              </div>
              <figcaption className="conf-frame-info">
                <strong className="conf-frame-caption">{img.tieuDe}</strong>
                <span className="conf-frame-note">{img.ghiChu}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CỘT PHẢI: PHÍA TRÊN LÀ VIDEO, PHÍA DƯỚI LÀ NỘI DUNG */}
        <div className="conf-right-main">
          {/* 1. PHÍA TRÊN: VIDEO TƯ LIỆU NHÚNG TRỰC TIẾP */}
          <div className="conf-video-embed-box">
            <div className="conf-video-embed-header">
              <div className="conf-video-badge-wrap">
                <span className="conf-video-badge">▶ PHIM TƯ LIỆU</span>
                <span className="conf-video-title">{confData.videoShorts.tieuDeModal}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--m1-text-muted, #7A6A58)' }}>
                  {confData.videoShorts.nguonTienTo || 'Nguồn: YouTube – '}
                  <a
                    href={confData.videoShorts.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--m1-red, #8F2418)',
                      fontWeight: 700,
                      textDecoration: 'underline',
                    }}
                    title="Mở video trên YouTube"
                  >
                    {confData.videoShorts.nguonTenLink || 'Nguyễn Văn Cừ'}
                  </a>
                </span>
                {onOpenVideo && (
                  <button
                    type="button"
                    onClick={onOpenVideo}
                    title="Mở rộng xem toàn bộ video"
                    style={{
                      background: 'rgba(185, 139, 74, 0.15)',
                      border: '1px solid rgba(185, 139, 74, 0.45)',
                      borderRadius: '4px',
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      color: 'var(--m1-text-main, #2B1810)',
                    }}
                  >
                    ⤢ Mở rộng
                  </button>
                )}
              </div>
            </div>
            <div className="conf-video-embed-frame">
              <iframe
                src={`https://www.youtube.com/embed/${confData.videoShorts.youtubeId}?rel=0`}
                title={confData.videoShorts.tieuDeModal}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                scrolling="no"
              />
            </div>
          </div>

          {/* 2. PHÍA DƯỚI: NỘI DUNG (BẢNG THÔNG TIN + QUOTE BOX) */}
          <div className="conf-right-content">
            <div className="conf-info-panel">
              {confData.thongTinCoBan.map((item, idx) => (
                <div key={idx} className="conf-info-item">
                  <span className="conf-item-lbl">{item.nhan}</span>
                  <span className="conf-item-val">{item.giaTri}</span>
                </div>
              ))}
            </div>

            <blockquote className="conf-quote-callout">
              <p className="conf-quote-p">
                “{confData.quoteBox}”
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ConferenceSection);
