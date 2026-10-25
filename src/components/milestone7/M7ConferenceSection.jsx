// src/components/milestone7/M7ConferenceSection.jsx
// Section "Mốc then chốt: Ba Đình, 2/9/1945"
// Trưng bày ấn bản gốc Tuyên ngôn Độc lập (02/09/1945) + Bảng dữ kiện lịch sử chuẩn Museum Editorial

import { memo } from 'react';

function M7ConferenceSection({ confData, onOpenPhoto, onOpenVideo }) {
  if (!confData) return null;
  const { thongTinCoBan, anhTuLieu, moTa, videoData, tenSuKien } = confData;
  const hasVideo = Boolean(videoData?.youtubeId);

  return (
    <section id="hoi-nghi" className="m1-section" aria-labelledby="heading-moc-then-chot-m7">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">SỰ KIỆN LỊCH SỬ THEN CHỐT</span>
        <h2 id="heading-moc-then-chot-m7" className="m1-sec-title">
          {confData.tieuDe}
        </h2>
      </div>

      <div className="m7-conf-split-layout">
        {/* CỘT TRÁI: KHUNG TRƯNG BÀY BẢN GỐC TUYÊN NGÔN ĐỘC LẬP (02/09/1945) */}
        <div className="m7-archival-exhibit">
          <figure style={{ margin: 0 }}>
            <div
              className="m7-archival-frame"
              onClick={() =>
                onOpenPhoto &&
                anhTuLieu &&
                onOpenPhoto({
                  src: anhTuLieu.src,
                  nhan: anhTuLieu.tieuDe,
                  chuThich: anhTuLieu.ghiChu,
                })
              }
              title={onOpenPhoto ? 'Nhấn để phóng to ấn bản gốc Tuyên ngôn Độc lập' : undefined}
            >
              <span className="m7-archival-tag">✦ BẢN GỐC LỊCH SỬ 1945 ✦</span>

              <div className="m7-archival-inner">
                <img
                  src={anhTuLieu?.src}
                  alt={anhTuLieu?.tieuDe}
                  loading="lazy"
                  className="m7-archival-doc-img"
                />
              </div>

              <span className="m7-archival-zoom-hint">
                ⤢ Phóng to bản gốc
              </span>
            </div>

            <figcaption className="m7-archival-caption">
              <h4 className="m7-archival-caption-title">
                {anhTuLieu?.tieuDe}
              </h4>
              <p className="m7-archival-caption-note">
                {anhTuLieu?.ghiChu}
              </p>
              <cite className="m7-archival-caption-source">
                Nguồn: {anhTuLieu?.nguon}
              </cite>
            </figcaption>
          </figure>
        </div>

        {/* CỘT PHẢI: BẢNG SỰ KIỆN LỊCH SỬ, THÔNG SỐ VÀ PHIM TƯ LIỆU */}
        <div className="m7-conf-panel">
          {/* Header biểu ngữ sự kiện */}
          <div className="m7-event-head-banner">
            <span className="m7-event-head-tag">✦ MỐC SON LỊCH SỬ · 02/09/1945 ✦</span>
            <h3 className="m7-event-head-title">
              {tenSuKien || 'LỄ ĐỘC LẬP TẠI QUẢNG TRƯỜNG BA ĐÌNH'}
            </h3>
            <p className="m7-event-head-sub">
              Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.
            </p>
          </div>

          {/* 3 thẻ thông số then chốt: THỜI GIAN, ĐỊA ĐIỂM, NGƯỜI ĐỌC */}
          <div className="m7-facts-grid-3">
            {thongTinCoBan?.map((item, idx) => (
              <div key={idx} className="m7-fact-card">
                <div className="m7-fact-header">
                  <span className="m7-fact-icon" aria-hidden="true">{item.icon || '✦'}</span>
                  <span className="m7-fact-lbl">{item.nhan}</span>
                </div>
                <div className="m7-fact-val">{item.giaTri}</div>
              </div>
            ))}
          </div>

          {/* Khối trích dẫn mô tả không khí lịch sử */}
          {moTa && (
            <div className="m7-narrative-quote-box">
              <p className="m7-narrative-p">
                {moTa}
              </p>
            </div>
          )}

          {/* Hàng nút xem video tư liệu lịch sử */}
          <div className="m7-video-action-row">
            {hasVideo ? (
              <button
                type="button"
                onClick={onOpenVideo}
                className="m7-video-action-btn"
                title="Mở xem phim tư liệu lịch sử Ba Đình (YouTube Shorts)"
              >
                <span className="m7-play-icon-badge" aria-hidden="true">▶</span>
                <span>Xem phim tư liệu lịch sử</span>
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="m7-video-action-btn"
                style={{ opacity: 0.65, cursor: 'not-allowed' }}
              >
                <span>▶ Sắp cập nhật tư liệu</span>
              </button>
            )}

            <span className="m7-video-source-note">
              ✦ {videoData?.nguon || 'Phim tư liệu lịch sử'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(M7ConferenceSection);
