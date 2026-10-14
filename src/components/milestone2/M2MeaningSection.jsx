// src/components/milestone2/M2MeaningSection.jsx
// Section Ý nghĩa lịch sử & Tiến trình, Câu kết lớn, Nút CTA và Nguồn tư liệu

import { memo } from 'react';
import { Link } from 'react-router-dom';

function M2MeaningSection({ meaningData, refData }) {
  return (
    <section id="y-nghia" className="m1-section" aria-labelledby="heading-meaning-m2">
      <div>
        <span className="m1-sec-eyebrow">TẦM VÓC LỊCH SỬ</span>
        <h2 id="heading-meaning-m2" className="m1-sec-title">
          {meaningData.tieuDe}
        </h2>
      </div>

      <div className="meaning-core-card">
        {/* Tuyên ngôn trọng tâm */}
        <p className="meaning-lead-statement">
          {meaningData.thongDiepLon}
        </p>

        {/* 3 KẾT QUẢ QUAN TRỌNG */}
        <div className="core-takeaways-grid">
          {meaningData.baKetQua.map((item) => (
            <div key={item.so} className="takeaway-col">
              <span className="takeaway-q">
                {item.so}. {item.tieuDe}
              </span>
              <p className="takeaway-a">{item.moTa}</p>
            </div>
          ))}
        </div>

        {/* QUOTE LỚN CUỐI TRANG */}
        <div className="meaning-grand-quote">
          <p className="meaning-quote-text">
            {meaningData.cauKetLon}
          </p>
          <div className="meaning-quote-sep" aria-hidden="true">
            ✦ ✦ ✦
          </div>
        </div>

        {/* NÚT ĐIỀU HƯỚNG CỘT MỐC TIẾP THEO & LƯỚT LÊN ĐẦU TRANG */}
        <div className="meaning-cta-box">
          <div className="meaning-cta-actions">
            <Link
              to={meaningData.cta.duongDan}
              className="btn-cta-next-milestone"
              aria-label={`Chuyển tới ${meaningData.cta.nhan}`}
            >
              <span>{meaningData.cta.nhan}</span>
              <span aria-hidden="true">→</span>
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
      </div>

      {/* 8. PHẦN NGUỒN TƯ LIỆU THAM KHẢO GỌN GÀNG */}
      <div className="m1-references-section">
        <div className="ref-inner-box">
          <h4 className="ref-title">Nguồn tư liệu tham khảo</h4>
          <ul className="ref-list">
            {refData.map((ref, idx) => (
              <li key={idx} className="ref-item">
                <strong>{ref.ten}</strong> – <em>{ref.nhaXuatBan}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default memo(M2MeaningSection);
