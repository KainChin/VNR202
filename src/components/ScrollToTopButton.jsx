// src/components/ScrollToTopButton.jsx
// Nút bấm nổi hình mũi tên lướt mượt lên đầu trang khi người dùng cuộn xem nội dung cột mốc

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hiện nút khi người dùng cuộn xuống quá 220px
      if (window.scrollY > 220) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check ngay khi mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Lướt lên đầu trang"
          title="Lướt lên đầu trang (↑)"
          initial={{ opacity: 0, scale: 0.75, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Mũi tên hướng lên trên dạng SVG thanh mảnh, sắc nét */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>

          {/* Nhãn chú thích khi hover */}
          <span className="scroll-to-top-tooltip">Lên đầu trang ↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
