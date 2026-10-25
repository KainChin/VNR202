// src/components/milestone7/M7HeroSection.jsx
// Hero Section Cột mốc 07: 2/9/1945 TUYÊN NGÔN ĐỘC LẬP
// Khung ảnh chân dung Bác Hồ chuẩn tỷ lệ 4:5 mạ viền đồng và ánh sáng bảo tàng

import { memo } from 'react';
import { motion } from 'framer-motion';

function M7HeroSection({ heroData, onOpenPhoto }) {
  if (!heroData) return null;
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
          <span className="hero-badge-pill" style={{ background: 'var(--m1-red, #8F2418)', color: '#FFF9EE', border: '1px solid var(--m1-gold, #B98B4A)' }}>
            ✦ {heroData.cotMoc} ✦
          </span>
          <div className="hero-date-large" style={{ color: 'var(--m1-red, #8F2418)', letterSpacing: '0.12em' }}>
            {heroData.namThang}
          </div>
          <h1 id="hero-title-main" className="hero-title-main" style={{ textShadow: '0 1px 2px rgba(53,39,29,0.1)' }}>
            {heroData.tieuDe}
          </h1>

          <blockquote className="hero-quote-lead" style={{ borderLeft: '4px solid var(--m1-gold, #B98B4A)', fontStyle: 'italic' }}>
            “{heroData.cauPhu}”
          </blockquote>

          <p className="hero-lead-text" style={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
            {heroData.thongDiepCotLoi}
          </p>
        </motion.div>

        {/* CỘT PHẢI: KHUNG CHÂN DUNG BÁC HỒ TẠI LỄ ĐÀI BA ĐÌNH (MUSEUM GRADE) */}
        <motion.div
          className="hero-artwork-frame"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="m7-hero-portrait-frame"
            aria-label={anhHero?.nhan}
            onClick={() =>
              onOpenPhoto &&
              anhHero &&
              onOpenPhoto({
                src: anhHero.src,
                nhan: anhHero.nhan,
                chuThich: anhHero.chuThich,
              })
            }
            style={{ cursor: onOpenPhoto ? 'zoom-in' : 'default' }}
            title={onOpenPhoto ? 'Nhấn để phóng to toàn bộ ảnh tư liệu' : undefined}
          >
            <span className="m7-hero-badge-tag">{anhHero?.nhan || 'ẢNH TƯ LIỆU 1945'}</span>

            <div className="m7-hero-portrait-inner">
              <img
                src={anhHero?.src}
                alt={anhHero?.nhan}
                className="m7-hero-portrait-img"
                loading="eager"
              />
            </div>

            <span className="m7-hero-zoom-hint">
              ⤢ Phóng to tư liệu
            </span>
          </div>

          {/* Chú thích & nguồn ảnh rõ ràng */}
          <figcaption className="hero-artwork-caption" style={{ marginTop: '0.85rem', textAlign: 'center' }}>
            <p className="artwork-caption-text" style={{ fontWeight: 600, color: 'var(--m1-text, #35271D)' }}>
              {anhHero?.chuThich}
            </p>
            <cite className="artwork-credit-source" style={{ color: 'var(--m1-gold, #B98B4A)' }}>
              Nguồn: {anhHero?.nguon}
            </cite>
          </figcaption>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(M7HeroSection);
