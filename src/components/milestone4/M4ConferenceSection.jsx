// src/components/milestone4/M4ConferenceSection.jsx
// Section "Mốc then chốt: 22/12/1944":
// - Cột trái: Khung Video tư liệu nhúng trực tiếp kèm nút Thu phóng và chú thích lịch sử
// - Cột phải: Tiêu đề sự kiện, Bảng thông tin then chốt và Quote đúc kết

import { memo } from 'react';

function M4ConferenceSection({ confData, onOpenVideoModal, videoTriggerRef }) {
  const { thongTinCoBan, anhTuLieu, moTa, videoShorts } = confData;

  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-moc-then-chot">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">SỰ KIỆN LỊCH SỬ THEN CHỐT</span>
        <h2 id="heading-moc-then-chot" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="conf-grid-split">
        {/* CỘT TRÁI: VIDEO TƯ LIỆU THÀNH LẬP ĐỘI VNTTGPQ (CHÈN TRỰC TIẾP TẠI ĐÂY) */}
        <div className="conf-left-gallery">
          <figure className="conf-frame-card conf-video-embed-box conf-video-embed-box--left" style={{ height: '100%', margin: 0 }}>
            {/* Header thanh video: Huy hiệu, tiêu đề, nút Thu phóng & link YouTube */}
            <div className="conf-video-embed-header">
              <div className="conf-video-badge-wrap">
                <span className="conf-video-badge">▶ PHIM TƯ LIỆU</span>
                <span className="conf-video-title" title={videoShorts.videoTitle}>
                  {videoShorts.videoTitle}
                </span>
              </div>

              <div className="conf-video-actions">
                {/* Nút Thu phóng mở rộng video */}
                <button
                  ref={videoTriggerRef}
                  type="button"
                  className="conf-video-zoom-btn"
                  onClick={onOpenVideoModal}
                  aria-label="Thu phóng xem video lớn"
                  title="Thu phóng xem video phóng to (Chế độ xem lớn)"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  <span>Thu phóng</span>
                </button>

                {/* Link mở YouTube */}
                <a
                  href={videoShorts.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="conf-video-ext-link"
                  title="Mở trực tiếp trên YouTube (tab mới)"
                >
                  YouTube ↗
                </a>
              </div>
            </div>

            {/* Khung iframe video nhúng trực tiếp */}
            <div className="conf-video-embed-frame" style={{ minHeight: '320px', flex: '1 1 auto' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoShorts.youtubeId}?rel=0`}
                title={videoShorts.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                scrolling="no"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>

            {/* Chú thích thông tin lịch sử bên dưới video */}
            <figcaption className="conf-frame-info" style={{ marginTop: '0.85rem' }}>
              <strong className="conf-frame-caption">{anhTuLieu.tieuDe}</strong>
              <span className="conf-frame-note">{anhTuLieu.ghiChu}</span>
            </figcaption>
          </figure>
        </div>

        {/* CỘT PHẢI: NỘI DUNG SỰ KIỆN: BANNER, BẢNG THÔNG TIN & QUOTE ĐÚC KẾT */}
        <div className="conf-right-main">
          <div className="m4-conf-event-banner">
            <span className="m4-conf-event-tag">✦ KHAI SINH QUÂN ĐỘI CHỦ LỰC</span>
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

export default memo(M4ConferenceSection);
