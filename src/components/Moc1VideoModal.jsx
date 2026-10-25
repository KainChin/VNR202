// src/components/Moc1VideoModal.jsx
// Modal hiển thị video tư liệu khi nhấn vào Mốc 1 (1930: Đảng Cộng sản Việt Nam ra đời) trên poster
// Video: https://www.youtube.com/watch?v=C3-HHefTxWc
// Có nút: Thoát (Out) và Sang mốc 2 (11/1939)

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Moc1VideoModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Khóa cuộn trang và xử lý phím Esc
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    const prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!dialogRef.current) return;
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
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
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGoToMoc2 = () => {
    onClose();
    // Chuyển sang Cột mốc 2 trên poster (11/1939: Mở đầu chuyển hướng chiến lược)
    navigate('/cot-moc/2');
  };

  return (
    <AnimatePresence>
      <div
        className="moc1-modal-backdrop"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          ref={dialogRef}
          className="moc1-modal-dialog"
          initial={{ scale: 0.92, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 15 }}
          transition={{ duration: 0.22 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="moc1-dialog-title"
        >
          {/* Header hộp thoại */}
          <div className="moc1-modal-header">
            <div className="moc1-modal-title-wrap">
              <span className="moc1-badge">MỐC 01 · 1930</span>
              <h2 id="moc1-dialog-title" className="moc1-title">
                ĐẢNG CỘNG SẢN VIỆT NAM RA ĐỜI
              </h2>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              className="moc1-close-btn"
              onClick={onClose}
              title="Thoát ra lại poster (Esc)"
              aria-label="Đóng video (Esc)"
            >
              ✕ Thoát
            </button>
          </div>

          {/* Khung nhúng video YouTube 16:9 */}
          <div className="moc1-video-frame">
            <iframe
              src="https://www.youtube.com/embed/C3-HHefTxWc?autoplay=1&rel=0"
              title="Phim tư liệu: Đảng Cộng sản Việt Nam ra đời năm 1930"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              scrolling="no"
              style={{ border: 'none', overflow: 'hidden' }}
            />
          </div>

          {/* Mô tả tư liệu ngắn */}
          <div className="moc1-desc-box">
            <p className="moc1-desc-p">
              “Mùa xuân năm 1930, lãnh tụ Nguyễn Ái Quốc chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam tại Cửu Long (Hương Cảng, Trung Quốc), mở ra bước ngoặt quyết định của lịch sử cách mạng giải phóng dân tộc.”
            </p>
          </div>

          {/* Thanh điều hướng: Thoát & Sang mốc 2 */}
          <div className="moc1-actions-bar">
            <button
              type="button"
              className="moc1-btn-out"
              onClick={onClose}
              title="Thoát và quay về bản đồ poster"
            >
              ← Thoát về poster
            </button>

            <button
              type="button"
              className="moc1-btn-next"
              onClick={handleGoToMoc2}
              title="Chuyển sang mốc 2: 11/1939 Mở đầu chuyển hướng chiến lược"
            >
              <span>Sang mốc 2 (11/1939)</span>
              <span>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Moc1VideoModal;
