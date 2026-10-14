// src/components/milestone1/VideoModal.jsx
// Modal video YouTube Shorts với Focus Trap, dừng video khi đóng, trả focus về nút kích hoạt

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function VideoModal({ isOpen, onClose, videoData, triggerRef }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Focus trap, xử lý phím Esc và khóa thanh cuộn toàn cục khi mở modal
  useEffect(() => {
    if (!isOpen) return;

    // Khóa cuộn trang nhưng bảo toàn tọa độ cuộn
    const scrollY = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Tự động focus vào nút đóng khi modal mở
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!dialogRef.current) return;
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);
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
        triggerRef?.current?.focus({ preventScroll: true });
      });
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&rel=0`;

  return (
    <div
      className="museum-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        className="museum-video-dialog"
        initial={{ scale: 0.92, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 15 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={videoData.tieuDeModal}
      >
        <div className="museum-modal-header">
          <h3 className="museum-modal-title">{videoData.tieuDeModal}</h3>
          <button
            ref={closeBtnRef}
            type="button"
            className="museum-modal-close"
            onClick={onClose}
            aria-label="Đóng video tư liệu (Esc)"
            title="Đóng (Esc)"
          >
            ✕ Đóng
          </button>
        </div>

        {/* Khung tỷ lệ 9:16 Shorts chuẩn bảo tàng, không có thanh cuộn */}
        <div className="museum-video-frame">
          <iframe
            src={embedUrl}
            title={videoData.tieuDeModal}
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
            allowFullScreen
          />
        </div>

        <div className="museum-video-footer">
          <a
            href={videoData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="museum-video-fallback-link"
          >
            Mở trực tiếp trên YouTube Shorts ↗
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default VideoModal;
