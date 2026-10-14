// src/components/InfoCard.jsx
// Thẻ hiển thị Bối cảnh / Quyết định / Kết quả
// Xuất hiện khi cuộn vào viewport (Intersection Observer + framer-motion)

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * InfoCard – Thẻ nội dung với animation scroll
 * @param {string} tieuDe    - Tiêu đề thẻ
 * @param {string[]} noiDung - Danh sách đoạn văn/ý
 * @param {string} mau       - CSS color cho viền bên trái
 * @param {string} bieu      - Biểu tượng emoji cho header
 * @param {number} delay     - Delay animation (giây)
 */
function InfoCard({ tieuDe, noiDung, mau, bieu = '📜', delay = 0 }) {
  const ref = useRef(null);
  // useInView: true khi element vào viewport, once: chỉ animate một lần
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Nếu không có nội dung, ẩn component hoàn toàn
  if (!noiDung || noiDung.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      className="info-card"
      style={{ borderLeftColor: mau, color: mau }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {/* Header thẻ */}
      <div className="info-card__header">
        <span style={{ fontSize: '1.1rem' }}>{bieu}</span>
        <h3 style={{ color: mau }}>{tieuDe}</h3>
      </div>

      {/* Nội dung: danh sách các ý */}
      <div className="info-card__body">
        <ul>
          {noiDung.map((y, i) => (
            <li key={i}>{y}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default InfoCard;
