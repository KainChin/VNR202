// src/components/milestone1/HeroSection.jsx
// Hero Section: Tựa đề lớn và composition ảnh duy nhất xử lý đồng nhất grayscale/sepia

import { memo } from 'react';
import { motion } from 'framer-motion';

function HeroSection({ heroData }) {
  const { composition } = heroData;

  return (
    <section id="hero" className="m1-section" aria-labelledby="hero-title-main">
      <div className="m1-hero-grid">
        {/* CỘT TRÁI: TIÊU ĐỀ LỚN & THÔNG ĐIỆP BẢN LỀ */}
        <motion.div
          className="hero-content-col"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="hero-badge-pill">{heroData.cotMoc}</span>
          <div className="hero-date-large">{heroData.namThang}</div>
          <h1 id="hero-title-main" className="hero-title-main">
            {heroData.tieuDe}
          </h1>

          <blockquote className="hero-quote-lead">
            “{heroData.cauPhu}”
          </blockquote>

          <p className="hero-lead-text">
            {heroData.thongDiepCotLoi}
          </p>
        </motion.div>

        {/* CỘT PHẢI: COMPOSITION ẢNH LỚN DUY NHẤT (MUSEUM GRADE) */}
        <motion.div
          className="hero-artwork-frame"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="hero-composition-unified"
            aria-label={composition.tieuDeAnh}
          >
            {/* Lớp 1: Thế chiến II bùng nổ */}
            <div className="comp-layer layer-ww2">
              <img
                src={composition.danhSachAnh[0].src}
                alt={composition.danhSachAnh[0].nhan}
                loading="eager"
              />
              <span className="comp-tag">01/09/1939: Thế chiến II</span>
            </div>

            {/* Lớp 2: Đông Dương thời Pháp khủng bố */}
            <div className="comp-layer layer-phap">
              <img
                src={composition.danhSachAnh[1].src}
                alt={composition.danhSachAnh[1].nhan}
                loading="eager"
              />
              <span className="comp-tag">Đông Dương: Pháp đàn áp</span>
            </div>

            {/* Lớp 3: Hội nghị Trung ương 6 tại Bà Điểm */}
            <div className="comp-layer layer-tw6">
              <img
                src={composition.danhSachAnh[2].src}
                alt={composition.danhSachAnh[2].nhan}
                loading="eager"
              />
              <span className="comp-tag">11/1939: Hội nghị TW6</span>
            </div>
          </div>

          {/* Chú thích & nguồn ảnh rõ ràng */}
          <figcaption className="hero-artwork-caption">
            <p className="artwork-caption-text">
              {composition.chuThich}
            </p>
            <cite className="artwork-credit-source">
              Nguồn: {composition.nguon}
            </cite>
          </figcaption>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
