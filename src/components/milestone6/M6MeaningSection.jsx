// src/components/milestone6/M6MeaningSection.jsx
// Section Ý nghĩa lịch sử & Tiến trình, Mini timeline, Nút CTA và Nguồn tư liệu Cột mốc 06
// Kế thừa layout từ MeaningSection của Cột mốc 01, 04, 05

import { memo } from 'react';
import { Link } from 'react-router-dom';

function M6MeaningSection({ meaningData, refData }) {
  return (
    <section id="y-nghia" className="m1-section" aria-labelledby="heading-meaning-m6">
      <div>
        <span className="m1-sec-eyebrow">TỔNG KẾT & TẦM VÓC LỊCH SỬ</span>
        <h2 id="heading-meaning-m6" className="m1-sec-title">
          {meaningData.tieuDe}
        </h2>
      </div>

      <div className="meaning-core-card">
        {/* Lời đúc kết lớn */}
        <p className="meaning-lead-statement">
          “{meaningData.thongDiepLon}”
        </p>

        {/* 3 Đúc kết cốt lõi */}
        <div className="core-takeaways-grid" aria-label="3 điểm cốt lõi cần nhớ về Cột mốc 06">
          {meaningData.baDiemCotLoi.map((item, idx) => (
            <div key={idx} className="takeaway-col">
              <h3 className="takeaway-q">{item.cauHoi}</h3>
              <p className="takeaway-a">{item.cauTraLoi}</p>
            </div>
          ))}
        </div>

        {/* Dải tiến trình ngang (Mini timeline) - 4 bước thẳng hàng chuẩn Museum Editorial */}
        <div className="m4-timeline-track" aria-label="Tiến trình đường lối từ chuyển hướng đến Tổng khởi nghĩa">
          {meaningData.timeline.map((step, idx) => (
            <div key={idx} className="m4-timeline-item">
              <div className="m4-timeline-node">
                <span className="m4-timeline-badge">{step.nam}</span>
                <span className="m4-timeline-phase">{step.giaiDoan}</span>
              </div>
              {idx < meaningData.timeline.length - 1 && (
                <span className="m4-timeline-arrow" aria-hidden="true">
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="2" y1="6" x2="22" y2="6" />
                    <polyline points="16 1 22 6 16 11" />
                  </svg>
                </span>
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
            <span>Lên đầu trang</span>
          </button>
        </div>
        <span className="cta-sub-note">{meaningData.cta.ghiChu}</span>
      </div>

      {/* NGUỒN TƯ LIỆU THAM KHẢO GỌN GÀNG Ở CUỐI TRANG */}
      {refData && refData.length > 0 && (
        <aside className="m1-references-section" aria-label="Nguồn tư liệu tham khảo Cột mốc 06">
          <div className="ref-inner-box">
            <h4 className="ref-title">Nguồn tư liệu lịch sử tham khảo</h4>
            <ul className="ref-list">
              {refData.map((ref, idx) => (
                <li key={idx} className="ref-item">
                  <strong>{ref.ten}</strong> – <span>{ref.nxb || ref.nhaXuatBan}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </section>
  );
}

export default memo(M6MeaningSection);
