// src/components/GemButton.jsx
// Nút Gem nổi cố định góc dưới phải, mở/đóng khung chat

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { onSend, gemConfig } from '../gem/gemConfig.js';

/**
 * GemButton – Nút Gem nổi và khung chat mini phong cách giấy cổ
 * @param {number|null} milestoneId - ID cột mốc hiện tại (để truyền context cho Gem)
 */
function GemButton({ milestoneId }) {
  const [moChat, setMoChat] = useState(false);
  const [tinNhan, setTinNhan] = useState([
    // Tin nhắn chào ban đầu từ bot
    { vai: 'bot', noi: gemConfig.chaoHoi },
  ]);
  const [inputText, setInputText] = useState('');
  const [dangGui, setDangGui] = useState(false);
  const cuoiRef = useRef(null); // Cuộn xuống cuối chat

  // Cuộn xuống khi có tin mới
  useEffect(() => {
    cuoiRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [tinNhan]);

  // Gửi tin nhắn
  const guiTinNhan = async () => {
    const text = inputText.trim();
    if (!text || dangGui) return;

    // Thêm tin người dùng
    setTinNhan((prev) => [...prev, { vai: 'user', noi: text }]);
    setInputText('');
    setDangGui(true);

    try {
      // Gọi handler trong gemConfig (placeholder)
      const phanHoi = await onSend(text, milestoneId);
      setTinNhan((prev) => [...prev, { vai: 'bot', noi: phanHoi }]);
    } catch {
      setTinNhan((prev) => [
        ...prev,
        { vai: 'bot', noi: 'Đã xảy ra lỗi, vui lòng thử lại.' },
      ]);
    } finally {
      setDangGui(false);
    }
  };

  // Gửi bằng Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      guiTinNhan();
    }
  };

  return (
    <>
      {/* Khung chat (AnimatePresence để có exit animation) */}
      <AnimatePresence>
        {moChat && (
          <motion.div
            className="gem-chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-label="Khung chat Gem"
            aria-modal="true"
          >
            {/* Header */}
            <div className="gem-chat__header">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {/* Icon ngôi sao 4 cánh SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"/>
                </svg>
                {gemConfig.tieuDe}
              </span>
              <button
                className="gem-chat__close"
                onClick={() => setMoChat(false)}
                aria-label="Đóng chat Gem"
              >
                ×
              </button>
            </div>

            {/* Vùng tin nhắn */}
            <div className="gem-chat__messages" role="log" aria-live="polite">
              {tinNhan.map((msg, i) => (
                <div
                  key={i}
                  className={`gem-chat__bubble gem-chat__bubble--${msg.vai}`}
                >
                  {msg.noi}
                </div>
              ))}
              {/* Chỉ báo đang gõ */}
              {dangGui && (
                <div className="gem-chat__bubble gem-chat__bubble--bot" style={{ opacity: 0.6 }}>
                  Gem đang soạn...
                </div>
              )}
              {/* Anchor cuộn */}
              <div ref={cuoiRef} />
            </div>

            {/* Footer: ô nhập + nút gửi */}
            <div className="gem-chat__footer">
              <input
                type="text"
                className="gem-chat__input"
                placeholder="Nhập câu hỏi..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Nhập tin nhắn gửi cho Gem"
                disabled={dangGui}
              />
              <button
                className="gem-chat__send"
                onClick={guiTinNhan}
                aria-label="Gửi tin nhắn"
                disabled={dangGui || !inputText.trim()}
              >
                Gửi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nút Gem nổi */}
      <motion.button
        className="gem-btn"
        onClick={() => setMoChat((v) => !v)}
        aria-label={moChat ? 'Đóng Gem' : 'Mở Gem'}
        aria-expanded={moChat}
        // Nhấp nhô animation
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
        }}
      >
        {/* Ngôi sao 4 cánh SVG */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"/>
        </svg>
        {/* Nhãn tooltip */}
        <span className="gem-btn__label">Gem</span>
      </motion.button>
    </>
  );
}

export default GemButton;
