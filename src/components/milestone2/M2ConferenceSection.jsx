// src/components/milestone2/M2ConferenceSection.jsx
// Section Hội nghị Trung ương 8 (10–19/5/1941) tại Lán Khuổi Nặm, Pác Bó
// Bố cục mới: Không video, 2 ảnh tư liệu (Lán Khuổi Nặm & Tranh Hội nghị) đặt song song trang trọng
// Phía dưới là Bảng thông tin nhanh 3 mục và Khối trích dẫn đúc kết ý nghĩa lịch sử

import { memo } from 'react';

function M2ConferenceSection({ confData, onOpenVideo, onOpenPhoto }) {
  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-hoi-nghi">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">HỘI NGHỊ LỊCH SỬ TẠI PÁC BÓ</span>
        <h2 id="heading-hoi-nghi" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="m2-conf-wrapper">
        {/* 1. HAI BỨC ẢNH TƯ LIỆU ĐẶT SONG SONG (CÓ THỂ CLICK PHÓNG TO) */}
        <div className="m2-conf-gallery-grid">
          {confData.anhTuLieu?.map((img, idx) => (
            <figure key={idx} className="m2-conf-photo-card">
              <div
                className="m2-conf-photo-inner"
                onClick={() => onOpenPhoto && onOpenPhoto({ src: img.src, nhan: img.tieuDe, chuThich: img.ghiChu })}
                style={{ cursor: onOpenPhoto ? 'zoom-in' : 'default' }}
                title={onOpenPhoto ? 'Nhấn để phóng to toàn bộ ảnh' : undefined}
              >
                <img src={img.src} alt={img.tieuDe} loading="lazy" />
              </div>
              <figcaption className="m2-conf-photo-caption">
                <strong className="m2-conf-photo-title">{img.tieuDe}</strong>
                <span className="m2-conf-photo-note">{img.ghiChu}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 2. VIDEO TƯ LIỆU YOUTUBE (NẾU CÓ) */}
        {confData.videoShorts && (
          <div className="conf-video-embed-box" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
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
                    {confData.videoShorts.nguonTenLink || 'Hội nghị TW8'}
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
            <div
              className="conf-video-embed-frame conf-video-embed-frame--shorts"
              style={{
                maxWidth: '350px',
                aspectRatio: '9 / 16',
                maxHeight: '560px',
                margin: '0 auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${confData.videoShorts.youtubeId}?rel=0`}
                title={confData.videoShorts.tieuDeModal}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                scrolling="no"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        )}

        {/* 3. KHỐI THÔNG TIN HỘI NGHỊ & TRÍCH DẪN ĐÚC KẾT */}
        <div className="m2-conf-details-bar">
          {/* Bảng 3 thông số then chốt */}
          <div className="m2-conf-facts-grid">
            {confData.thongTinCoBan?.map((item, idx) => (
              <div key={idx} className="m2-conf-fact-item">
                <span className="m2-conf-fact-lbl">{item.nhan}</span>
                <span className="m2-conf-fact-val">{item.giaTri}</span>
              </div>
            ))}
          </div>

          {/* Trích dẫn khẳng định vai trò lịch sử */}
          {confData.quoteBox && (
            <blockquote className="m2-conf-quote-callout">
              <p className="m2-conf-quote-p">
                “{confData.quoteBox}”
              </p>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(M2ConferenceSection);
