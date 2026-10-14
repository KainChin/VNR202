// src/components/milestone1/ImageLightbox.jsx
// Lightbox xem ảnh tư liệu lịch sử phóng to sắc nét

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function ImageLightbox({ photo, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!photo) return;
    const scrollY = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
    const triggerEl = document.activeElement;
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      // Đưa về đúng vị trí đã nhấn xem ảnh ban đầu
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: 'instant',
      });
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollY,
          left: 0,
          behavior: 'instant',
        });
        if (triggerEl && typeof triggerEl.focus === 'function') {
          triggerEl.focus({ preventScroll: true });
        }
      });
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="museum-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        className="museum-lightbox-dialog"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={photo.nhan || 'Ảnh tư liệu lịch sử'}
      >
        <div className="museum-modal-header">
          <h3 className="museum-modal-title">
            {photo.nhan || 'Ảnh tư liệu lịch sử'}
          </h3>
          <button
            ref={closeBtnRef}
            type="button"
            className="museum-modal-close"
            onClick={onClose}
            aria-label="Đóng ảnh phóng to (Esc)"
            title="Đóng (Esc)"
          >
            ✕ Đóng
          </button>
        </div>

        <div className="museum-lightbox-stage">
          <img src={photo.src} alt={photo.nhan || 'Ảnh tư liệu'} />
        </div>

        {photo.chuThich && (
          <p className="museum-lightbox-caption">{photo.chuThich}</p>
        )}
      </motion.div>
    </div>
  );
}

export default ImageLightbox;
