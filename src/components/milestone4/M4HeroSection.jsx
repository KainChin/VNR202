// src/components/milestone4/M4HeroSection.jsx
// Hero Section Cột mốc 04: 1941–1944 XÂY DỰNG LỰC LƯỢNG
// Bố cục: Tựa đề lớn bên trái, Composition ảnh lớn tông sepia bên phải

import { memo } from 'react';
import { motion } from 'framer-motion';

function M4HeroSection({ heroData }) {
  const { anhHero } = heroData;

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

        {/* CỘT PHẢI: COMPOSITION ẢNH LỚN TÔNG SEPIA (BỘ ĐỘI/DU KÍCH VIỆT BẮC) */}
        <motion.div
          className="hero-artwork-frame"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="m2-hero-single-frame" aria-label={anhHero.nhan}>
            <img
              src={anhHero.src}
              alt={anhHero.nhan}
              className="m2-hero-single-img"
              loading="eager"
            />
            <span className="m2-hero-single-tag">{anhHero.nhan}</span>
          </div>

          {/* Chú thích & nguồn ảnh rõ ràng */}
          <figcaption className="hero-artwork-caption">
            <p className="artwork-caption-text">
              {anhHero.chuThich}
            </p>
            <cite className="artwork-credit-source">
              Nguồn: {anhHero.nguon}
            </cite>
          </figcaption>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(M4HeroSection);
