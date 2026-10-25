// src/components/milestone7/M7BaDinhMomentSection.jsx
// Section "Khoảnh khắc lịch sử tại Quảng trường Ba Đình & Lời thề Độc lập"
// Thay thế hoàn toàn phần tóm tắt 6 bước cũ theo yêu cầu người dùng
// Tái hiện: Lời đối đáp lịch sử đi vào lòng người, Ba tầm vóc vĩ đại và Lời thề Độc lập bất tử

import { memo } from 'react';

function M7BaDinhMomentSection({ data }) {
  if (!data) return null;
  const { cauHoiLichSu, tamVocLichSu, loiTheDocLap } = data;

  return (
    <section
      id="khoanh-khac-ba-dinh"
      className="m1-section m7-badinh-section"
      aria-labelledby="heading-badinh-moment"
    >
      {/* TIÊU ĐỀ SECTION */}
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">KHOẢNH KHẮC LỊCH SỬ · 02/09/1945</span>
        <h2 id="heading-badinh-moment" className="m1-sec-title">
          {data.tieuDe}
        </h2>
        <p className="m1-sec-p">{data.phuDe}</p>
      </div>

      {/* 1. KHỐI ĐỐI ĐÁP LỊCH SỬ THIÊNG LIÊNG: "TÔI NÓI ĐỒNG BÀO NGHE RÕ KHÔNG?" */}
      {cauHoiLichSu && (
        <div className="m7-historic-dialogue-card" role="region" aria-label="Khoảnh khắc đối đáp lịch sử giữa Bác Hồ và đồng bào">
          <div className="m7-dialogue-eyebrow">
            <span>✦</span>
            <span>TIẾNG VỌNG LỊCH SỬ TẠI QUẢNG TRƯỜNG BA ĐÌNH (14H00)</span>
          </div>

          <div className="m7-dialogue-grid">
            {/* Lời Bác Hồ */}
            <div className="m7-dialogue-side is-uncle-ho">
              <div className="m7-dialogue-speaker">
                {cauHoiLichSu.nguoiNoi || 'Chủ tịch Hồ Chí Minh'}
              </div>
              <blockquote className="m7-dialogue-quote">
                “{cauHoiLichSu.cauHoi}”
              </blockquote>
            </div>

            {/* Biểu tượng sóng vang */}
            <div className="m7-dialogue-center-wave" aria-hidden="true">
              <span>⟷</span>
            </div>

            {/* Lời đáp của đồng bào */}
            <div className="m7-dialogue-side is-people">
              <div className="m7-dialogue-speaker">
                {cauHoiLichSu.nguoiTraLoi || 'Hơn 50 vạn đồng bào tại Ba Đình'}
              </div>
              <blockquote className="m7-dialogue-quote">
                “{cauHoiLichSu.cauTraLoi}”
              </blockquote>
            </div>
          </div>

          {/* Đúc kết ý nghĩa lịch sử sâu sắc */}
          {cauHoiLichSu.yNghia && (
            <div className="m7-dialogue-meaning-box">
              <p className="m7-dialogue-meaning-p">
                {cauHoiLichSu.yNghia}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 2. BA TẦM VÓC LỊCH SỬ VĨ ĐẠI CỦA BẢN TUYÊN NGÔN */}
      {tamVocLichSu && tamVocLichSu.length > 0 && (
        <div className="m7-pillars-wrap" style={{ marginTop: '2rem' }}>
          <div className="m7-pillars-title-bar">
            <h3>BA TẦM VÓC THỜI ĐẠI KHAI SINH NƯỚC VIỆT NAM MỚI</h3>
            <p>✦ Giá trị lịch sử trường tồn của bản Tuyên ngôn Độc lập ✦</p>
          </div>

          <div className="m7-pillars-grid">
            {tamVocLichSu.map((pillar, idx) => (
              <article key={idx} className="m7-pillar-card" tabIndex={0}>
                <div className="m7-pillar-top">
                  <span className="m7-pillar-roman">{pillar.soLaMa}</span>
                  <span className="m7-pillar-icon" aria-hidden="true">{pillar.icon}</span>
                </div>
                <h4 className="m7-pillar-title">{pillar.tieuDe}</h4>
                <p className="m7-pillar-desc">{pillar.noiDung}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* 3. LỜI THỀ ĐỘC LẬP BẤT TỬ (THE IMMORTAL OATH OF INDEPENDENCE) */}
      {loiTheDocLap && (
        <div className="m7-oath-scroll-box" role="region" aria-label="Lời thề Độc lập bất tử">
          <div className="m7-oath-header">
            <span style={{ color: 'var(--m1-gold, #B98B4A)', fontSize: '0.82rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
              ✦ VĂN KIỆN LỊCH SỬ THIÊNG LIÊNG ✦
            </span>
            <h3 className="m7-oath-title">{loiTheDocLap.tieuDe}</h3>
          </div>

          <blockquote className="m7-oath-quote">
            “{loiTheDocLap.trichDan}”
          </blockquote>

          <div className="m7-oath-sign">
            — {loiTheDocLap.xacNhan} —
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(M7BaDinhMomentSection);
