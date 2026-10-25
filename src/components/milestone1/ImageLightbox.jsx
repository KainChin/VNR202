// src/components/milestone1/ImageLightbox.jsx
// Lightbox xem ảnh tư liệu lịch sử phóng to sắc nét chính giữa màn hình
// Dùng createPortal vào document.body để thoát khỏi context 3D transform/perspective của cha, đảm bảo luôn hiển thị ngay giữa viewport

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

function ImageLightbox({ photo, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!photo) return;

    // Khóa thanh cuộn trang web
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Tự động focus vào nút đóng
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const imgSrc = photo.src || photo.hinhAnh || photo.url;
  const imgTitle = photo.nhan || photo.tieuDe || 'Ảnh tư liệu lịch sử';
  const imgCaption = photo.chuThich || photo.ghiChu || '';

  return createPortal(
    <AnimatePresence>
      <div
        className="museum-modal-backdrop"
        onClick={onClose}
        role="presentation"
        style={{ zIndex: 99999 }}
      >
        <motion.div
          className="museum-lightbox-dialog"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={imgTitle}
        >
          {/* Header Lightbox */}
          <div className="museum-modal-header" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid var(--m1-border, rgba(185,139,74,0.3))', paddingBottom: '0.65rem' }}>
            <h3 className="museum-modal-title" style={{ margin: 0, fontSize: '1rem', color: 'var(--m1-red, #8F2418)', fontWeight: 700 }}>
              {imgTitle}
            </h3>
            <button
              ref={closeBtnRef}
              type="button"
              className="museum-modal-close"
              onClick={onClose}
              aria-label="Đóng ảnh phóng to (Esc)"
              title="Đóng (Esc)"
              style={{
                background: 'rgba(143, 36, 24, 0.1)',
                border: '1px solid rgba(143, 36, 24, 0.4)',
                borderRadius: '4px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--m1-red, #8F2418)',
                cursor: 'pointer',
              }}
            >
              ✕ Đóng (Esc)
            </button>
          </div>

          {/* Sân khấu hiển thị ảnh */}
          <div className="museum-lightbox-stage" style={{ background: '#18120d', padding: '0.5rem', borderRadius: '4px' }}>
            <img
              src={imgSrc}
              alt={imgTitle}
              style={{
                maxHeight: '75vh',
                maxWidth: '85vw',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* Chú thích & trích dẫn ảnh */}
          {imgCaption && (
            <p className="museum-lightbox-caption" style={{ margin: '0.25rem 0 0', maxWidth: '780px' }}>
              {imgCaption}
            </p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

export default ImageLightbox;
