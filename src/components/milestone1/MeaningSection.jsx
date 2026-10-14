// src/components/milestone1/MeaningSection.jsx
// Section Ý nghĩa và tiến trình 1939 – 1945 + 3 đúc kết cốt lõi + Nguồn tư liệu

import { memo } from 'react';
import { Link } from 'react-router-dom';

function MeaningSection({ meaningData, refData }) {
  return (
    <section id="y-nghia" className="m1-section" aria-labelledby="heading-meaning">
      <div>
        <span className="m1-sec-eyebrow">TỔNG KẾT & TẦM VÓC LỊCH SỬ</span>
        <h2 id="heading-meaning" className="m1-sec-title">
          {meaningData.tieuDe}
        </h2>
      </div>

      <div className="meaning-core-card">
        {/* Lời đúc kết lớn */}
        <p className="meaning-lead-statement">
          “{meaningData.thongDiepLon}”
        </p>

        {/* 3 Đúc kết cốt lõi giúp người xem nắm trọn bản chất sự kiện */}
        <div className="core-takeaways-grid" aria-label="3 điểm cốt lõi cần nhớ">
          {meaningData.cauHoiCotLoi.map((item, idx) => (
            <div key={idx} className="takeaway-col">
              <h3 className="takeaway-q">{item.cauHoi}</h3>
              <p className="takeaway-a">{item.cauTraLoi}</p>
            </div>
          ))}
        </div>

        {/* Dải tiến trình ngang 1939 → 1940 → 1941 → 1945 */}
        <div className="meaning-timeline-track" aria-label="Tiến trình đường lối từ 1939 đến 1945">
          {meaningData.timeline.map((step, idx) => (
            <div key={step.nam} className="m-timeline-node">
              <span className="m-node-year">{step.nam}</span>
              <span className="m-node-phase">{step.giaiDoan}</span>
              {idx < meaningData.timeline.length - 1 && (
                <span className="m-node-arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quote lớn ở cuối section */}
      <div className="meaning-grand-quote">
        <blockquote className="meaning-quote-text">
          “{meaningData.quoteLon}”
        </blockquote>
        <div className="meaning-quote-sep" aria-hidden="true">✦ ✦ ✦</div>
      </div>

      {/* Nút CTA tiếp theo & Lướt lên đầu trang */}
      <div className="meaning-cta-box">
        <div className="meaning-cta-actions">
          <Link
            to={meaningData.cta.duongDan}
            className="btn-cta-next-milestone"
            aria-label={meaningData.cta.nhan}
          >
            {meaningData.cta.nhan}
          </Link>

          <button
            type="button"
            className="btn-cta-scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Lướt lại lên đầu trang"
            title="Lướt lại lên đầu trang (↑)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
            <span>Lên đầu trang</span>
          </button>
        </div>
        <span className="cta-sub-note">{meaningData.cta.ghiChu}</span>
      </div>

      {/* 8. PHẦN NGUỒN TƯ LIỆU THAM KHẢO GỌN GÀNG Ở CUỐI TRANG */}
      <aside className="m1-references-section" aria-label="Nguồn tư liệu tham khảo">
        <div className="ref-inner-box">
          <h4 className="ref-title">Nguồn tư liệu lịch sử tham khảo</h4>
          <ul className="ref-list">
            {refData.map((ref, idx) => (
              <li key={idx} className="ref-item">
                <strong>{ref.ten}</strong> – <span>{ref.nhaXuatBan}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}

export default memo(MeaningSection);
