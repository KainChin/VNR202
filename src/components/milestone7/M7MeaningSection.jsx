// src/components/milestone7/M7MeaningSection.jsx
// Section "Ý nghĩa lịch sử", 4 bài học lớn thời đại, Dòng kết toàn trình và Nút xem lại hành trình
// Cột mốc cuối cùng (Cột mốc 07) – Không có nút Tiếp theo, thay bằng "← Xem lại hành trình"

import { memo } from 'react';
import { Link } from 'react-router-dom';

function M7MeaningSection({ meaningData, refData }) {
  if (!meaningData) return null;
  const { thongDiepLon, bonBaiHoc, dongKetToanTrang, cta } = meaningData;

  const romanNumerals = ['I', 'II', 'III', 'IV'];

  return (
    <section id="y-nghia" className="m1-section" aria-labelledby="heading-meaning-m7">
      <div className="m1-sec-header">
        <span className="m1-sec-eyebrow">TỔNG KẾT & TẦM VÓC LỊCH SỬ</span>
        <h2 id="heading-meaning-m7" className="m1-sec-title">
          {meaningData.tieuDe}
        </h2>
      </div>

      <div className="meaning-core-card">
        {/* Lời đúc kết lớn */}
        <p className="meaning-lead-statement">
          “{thongDiepLon}”
        </p>

        {/* 4 BÀI HỌC THỜI ĐẠI: DẠNG DANH SÁCH CHỮ LỚN, KHÔNG DÙNG CARD */}
        <div
          className="lessons-large-list"
          style={{
            maxWidth: '880px',
            margin: '2.5rem auto 3rem',
            textAlign: 'left',
          }}
          aria-label="4 bài học lịch sử lớn rút ra từ toàn bộ hành trình"
        >
          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--m1-gold, #B98B4A)',
              marginBottom: '1.25rem',
              borderBottom: '1.5px solid rgba(185, 139, 74, 0.35)',
              paddingBottom: '0.5rem',
            }}
          >
            ✦ BỐN BÀI HỌC KẾT TINH TỪ HÀNH TRÌNH 1930 – 1945:
          </div>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {bonBaiHoc?.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.25rem',
                  padding: '1.1rem 0',
                  borderBottom: idx < bonBaiHoc.length - 1 ? '1px dashed rgba(185, 139, 74, 0.3)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--m1-font-serif, 'Playfair Display', Georgia, serif)",
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--m1-red, #8F2418)',
                    minWidth: '2.2rem',
                    flexShrink: 0,
                  }}
                >
                  {romanNumerals[idx] || `0${idx + 1}`}.
                </span>
                <span
                  style={{
                    fontFamily: "var(--m1-font-serif, 'Playfair Display', Georgia, serif)",
                    fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                    fontWeight: 700,
                    color: 'var(--m1-text, #35271D)',
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* DÒNG KẾT TOÀN TRANG: PHONG CÁCH GRAND GOLD RIBBON LƯU TRỮ LỊCH SỬ */}
        <div
          className="m7-grand-ribbon-bar"
          aria-label="Dòng kết toàn bộ hành trình cách mạng 1930 - 1945"
        >
          <div className="m7-grand-ribbon-tag">
            ✦ KẾT TINH QUYẾT ĐỊNH CHIẾN LƯỢC – CHỚP THỜI CƠ 1945 ✦
          </div>

          <div className="m7-grand-ribbon-nodes">
            {dongKetToanTrang?.map((stage, idx) => {
              const isFinal = idx === dongKetToanTrang.length - 1;
              return (
                <span key={idx} className="m7-ribbon-node-wrap" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span className={`m7-ribbon-node ${isFinal ? 'is-final' : ''}`}>
                    {stage}
                  </span>
                  {!isFinal && (
                    <span className="m7-ribbon-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* NÚT CTA: VÌ LÀ MỐC CUỐI, KHÔNG CÓ TIẾP THEO, THAY BẰNG "← Xem lại hành trình" & "Lên đầu trang" */}
      <div className="meaning-cta-box">
        <div className="meaning-cta-actions">
          <Link
            to={cta?.duongDan || '/'}
            className="btn-cta-next-milestone"
            aria-label={cta?.nhan || 'Xem lại hành trình'}
          >
            {cta?.nhan || '← Xem lại hành trình'}
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
        <span className="cta-sub-note">{cta?.ghiChu || 'Quay về trang poster bản đồ chiến lược 1945'}</span>
      </div>

      {/* NGUỒN TƯ LIỆU THAM KHẢO GỌN GÀNG Ở CUỐI TRANG */}
      {refData && refData.length > 0 && (
        <aside className="m1-references-section" aria-label="Nguồn tư liệu tham khảo Cột mốc 07">
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

export default memo(M7MeaningSection);
