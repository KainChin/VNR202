// src/components/Gallery.jsx
// Thư viện ảnh: ảnh dán như ảnh giấy, bấm phóng to (lightbox)

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Gallery – Hiển thị lưới ảnh và lightbox
 * @param {Array} anh - Mảng [{ src, chuThich, nguon }]
 * @param {number} milestoneId - ID cột mốc (dùng cho placeholder label)
 */
function Gallery({ anh, milestoneId }) {
  const [anhPhongTo, setAnhPhongTo] = useState(null); // ảnh đang phóng to

  // Nếu không có ảnh nào, ẩn hoàn toàn theo quy tắc
  if (!anh || anh.length === 0) {
    return null;
  }

  return (
    <>
      {/* Lưới ảnh */}
      <div className="gallery-grid">
        {anh.map((item, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            onClick={() => setAnhPhongTo(item)}
            // Hiện lần lượt khi cuộn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            role="button"
            aria-label={`Phóng to ảnh: ${item.chuThich || `Ảnh ${i + 1}`}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setAnhPhongTo(item)}
          >
            <div className="gallery-item__img-wrap">
              <img
                src={item.src}
                alt={item.chuThich || `Ảnh cột mốc ${milestoneId}`}
                loading="lazy"
              />
            </div>
            {item.chuThich && (
              <p className="gallery-item__caption">{item.chuThich}</p>
            )}
            {/* BẮT BUỘC hiện nguồn */}
            <p className="gallery-item__nguon">
              Nguồn: {item.nguon || '(chưa có nguồn)'}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox phóng to */}
      <AnimatePresence>
        {anhPhongTo && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAnhPhongTo(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh phóng to"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <img
                src={anhPhongTo.src}
                alt={anhPhongTo.chuThich}
                className="lightbox-img"
              />
              {anhPhongTo.chuThich && (
                <p style={{ color: '#eee', fontSize: '0.85rem' }}>
                  {anhPhongTo.chuThich}
                </p>
              )}
              <p style={{ color: '#aaa', fontSize: '0.75rem', fontStyle: 'italic' }}>
                Nguồn: {anhPhongTo.nguon || '(chưa có nguồn)'}
              </p>
            </motion.div>

            {/* Nút đóng */}
            <button
              className="lightbox-close"
              onClick={() => setAnhPhongTo(null)}
              aria-label="Đóng ảnh phóng to"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Gallery;
