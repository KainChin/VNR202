// src/components/milestone1/VideoModal.jsx
// Modal video YouTube Shorts chuẩn Museum Editorial
// Tính năng: Tỉ lệ dọc 9:16, 2 cột trên desktop / 1 cột mobile, Focus Trap, dừng hẳn video khi đóng, trả focus về nút kích hoạt

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

  if (!isOpen || !videoData || !videoData.youtubeId) return null;
  if (typeof document === 'undefined') return null;

  const embedUrl = `https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&rel=0`;
  const videoTitle =
    videoData.videoTitle ||
    videoData.tieuDeModal ||
    'Kỉ Niệm Ngày Đội Việt Nam Tuyên Truyền Giải Phóng Quân Được Thành Lập (22/12/1944)';
  const tagLabel = videoData.nhanTag || 'TƯ LIỆU LỊCH SỬ';
  const caption = videoData.chuThich || '';
  const sourceName = videoData.tenNguon || '';
  const youtubeUrl =
    videoData.url || `https://www.youtube.com/shorts/${videoData.youtubeId}`;

  return createPortal(
    <div
      className="museum-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        className="museum-video-dialog museum-video-dialog--shorts-split"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={videoTitle}
      >
        {/* Header modal: Tag tư liệu & Nút Đóng */}
        <div className="museum-modal-header">
          <div className="museum-modal-tag-badge">
            <span style={{ color: 'var(--m1-gold)', marginRight: '0.4rem' }}>▶</span>
            <span>PHIM TƯ LIỆU LỊCH SỬ</span>
          </div>
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

        {/* Bố cục 2 cột trên Desktop (Video dọc trái, Chú thích phải); 1 cột trên Mobile */}
        <div className="museum-shorts-split-body">
          {/* CỘT TRÁI: Khung video dọc tỷ lệ 9:16 Shorts (tối đa 380px, cao 78vh) */}
          <div className="museum-shorts-video-col">
            <div className="museum-video-frame museum-video-frame--shorts">
              <iframe
                src={embedUrl}
                title={videoTitle}
                scrolling="no"
                style={{ border: 'none', overflow: 'hidden' }}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                allowFullScreen
              />
            </div>
          </div>

          {/* CỘT PHẢI: Tiêu đề, Chú thích ngắn, Nguồn & Nút mở trực tiếp YouTube */}
          <div className="museum-shorts-info-col">
            <div className="museum-shorts-info-top">
              <span className="museum-shorts-eyebrow">{tagLabel}</span>
              <h3 className="museum-shorts-title">{videoTitle}</h3>
              {caption && (
                <p className="museum-shorts-caption">{caption}</p>
              )}
            </div>

            <div className="museum-shorts-footer-meta">
              {sourceName ? (
                <span className="museum-shorts-source">
                  Nguồn: <strong>{sourceName}</strong>
                </span>
              ) : <span />}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="museum-shorts-yt-link"
                title="Mở video trực tiếp trên YouTube (tab mới)"
              >
                <span>Mở trên YouTube</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

export default VideoModal;
