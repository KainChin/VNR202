// src/components/AiAppendixModal.jsx
// Modal Phụ lục kê khai và cam kết sử dụng Trí tuệ Nhân tạo (AI Disclosure)
// Phong cách: Giấy vintage bảo tàng lịch sử cao cấp, chuẩn liêm chính học thuật đại học

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ai-appendix-modal.css';

function AiAppendixModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Focus trap, xử lý Esc và khóa cuộn trang
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus nút đóng khi mở
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

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="ai-modal-backdrop"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={dialogRef}
            className="ai-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-modal-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Viền trang trí họa tiết kép phong cách văn kiện cổ */}
            <div className="ai-modal-border-accent" aria-hidden="true" />

            {/* HEADER MODAL */}
            <div className="ai-modal-header">
              <div className="ai-modal-header__meta">
                <span className="ai-modal-tag">
                  ✦ HỌC PHẦN VNR202 – LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM
                </span>
                <h2 id="ai-modal-title" className="ai-modal-title">
                  PHỤ LỤC SỬ DỤNG TRÍ TUỆ NHÂN TẠO (AI)
                </h2>
                <p className="ai-modal-subtitle">
                  Bản kê khai minh bạch về công cụ AI, phạm vi ứng dụng và cam kết liêm chính học thuật trong xây dựng bài giảng số
                </p>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                className="ai-modal-close"
                onClick={onClose}
                aria-label="Đóng phụ lục AI"
                title="Đóng (Esc)"
              >
                ✕
              </button>
            </div>

            {/* NỘI DUNG CUỘN */}
            <div className="ai-modal-body">
              {/* 1. KHUNG CAM KẾT LIÊM CHÍNH HỌC THUẬT */}
              <div className="ai-modal-banner">
                <div className="ai-modal-banner__icon">🛡️</div>
                <div className="ai-modal-banner__content">
                  <h3 className="ai-modal-banner__title">
                    NGUYÊN TẮC: HUMAN-IN-THE-LOOP (CON NGƯỜI ĐỐI CHỨNG 100%)
                  </h3>
                  <p className="ai-modal-banner__desc">
                    Mô hình AI chỉ được sử dụng với vai trò <strong>trợ lý kỹ thuật và hỗ trợ dàn trang</strong>. Toàn bộ nội dung sự kiện, số liệu, mốc thời gian, quyết định chiến lược và trích dẫn văn kiện đều được nhóm sinh viên <strong>đối chiếu và kiểm chứng độc lập</strong> với Giáo trình chính thức của Bộ Giáo dục & Đào tạo cùng Văn kiện Đảng toàn tập.
                  </p>
                </div>
              </div>

              {/* 2. BẢNG DANH MỤC CÔNG CỤ AI VÀ TÁC VỤ */}
              <div className="ai-section">
                <h3 className="ai-section__heading">
                  <span className="ai-section__badge">01</span>
                  KÊ KHAI DANH MỤC CÔNG CỤ AI & PHẠM VI ỨNG DỤNG
                </h3>

                <div className="ai-tools-grid">
                  {/* Tool 1: Gemini / ChatGPT */}
                  <div className="ai-tool-card">
                    <div className="ai-tool-card__head">
                      <span className="ai-tool-icon">🧠</span>
                      <div>
                        <h4 className="ai-tool-name">Google Gemini & LLMs</h4>
                        <span className="ai-tool-role">Mô hình ngôn ngữ lớn (Large Language Model)</span>
                      </div>
                    </div>
                    <div className="ai-tool-card__body">
                      <div className="ai-tool-field">
                        <span className="ai-tool-field__label">Phạm vi ứng dụng:</span>
                        <p>Hỗ trợ tổng hợp, đối sánh thông tin ban đầu; gợi ý cấu trúc phân tích 3 bước chiến lược (Bối cảnh thế giới/trong nước → Nội dung chỉ thị → Ý nghĩa lịch sử); gợi ý câu hỏi tương tác mở rộng tư duy.</p>
                      </div>
                      <div className="ai-tool-field ai-tool-field--verify">
                        <span className="ai-tool-field__label">Kiểm chứng con người:</span>
                        <p>Sinh viên biên soạn lại theo văn phong học thuật chính xác; loại bỏ hoàn toàn các nhận định suy đoán hoặc dữ liệu thiếu căn cứ từ mô hình.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tool 2: Antigravity Agent / Coding AI */}
                  <div className="ai-tool-card">
                    <div className="ai-tool-card__head">
                      <span className="ai-tool-icon">💻</span>
                      <div>
                        <h4 className="ai-tool-name">Antigravity Coding Agent</h4>
                        <span className="ai-tool-role">Trợ lý lập trình giao diện & tương tác Web</span>
                      </div>
                    </div>
                    <div className="ai-tool-card__body">
                      <div className="ai-tool-field">
                        <span className="ai-tool-field__label">Phạm vi ứng dụng:</span>
                        <p>Hỗ trợ viết mã React 18, Vite, tối ưu bố cục tạp chí lịch sử (Vintage Editorial CSS), thiết lập chuyển cảnh mượt mà với Framer Motion và đảm bảo hiển thị chuẩn trên màn hình máy chiếu, laptop và điện thoại.</p>
                      </div>
                      <div className="ai-tool-field ai-tool-field--verify">
                        <span className="ai-tool-field__label">Kiểm chứng con người:</span>
                        <p>Sinh viên trực tiếp định hình trải nghiệm người dùng (UX), cấu trúc luồng 6 cột mốc và kiểm thử hiệu năng hiển thị thực tế.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tool 3: Image / Vector Enhancer */}
                  <div className="ai-tool-card">
                    <div className="ai-tool-card__head">
                      <span className="ai-tool-icon">🎨</span>
                      <div>
                        <h4 className="ai-tool-name">AI Image & Vector Enhancer</h4>
                        <span className="ai-tool-role">Công cụ hỗ trợ xử lý đồ họa & hình ảnh</span>
                      </div>
                    </div>
                    <div className="ai-tool-card__body">
                      <div className="ai-tool-field">
                        <span className="ai-tool-field__label">Phạm vi ứng dụng:</span>
                        <p>Khôi phục chi tiết ảnh tư liệu lịch sử đã cũ (Pác Bó, Lán Khuổi Nặm, Bác Hồ về nước 1941); hỗ trợ vector hóa sơ đồ chiến lược và biểu tượng Mặt trận Việt Minh.</p>
                      </div>
                      <div className="ai-tool-field ai-tool-field--verify">
                        <span className="ai-tool-field__label">Kiểm chứng con người:</span>
                        <p>Đảm bảo tuyệt đối không làm biến dạng hay sai lệch bối cảnh hiện vật gốc; giữ trọn giá trị tư liệu chân thực của lịch sử.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LƯỚI BỐ CỤC NẰM NGANG CHO CÁC PHẦN TIẾP THEO */}
              <div className="ai-bottom-grid">
                {/* Cột trái: Tỷ lệ đóng góp (02) & Cam kết liêm chính */}
                <div className="ai-bottom-col">
                  {/* 3. TỶ LỆ ĐÓNG GÓP (METRICS) */}
                  <div className="ai-section">
                    <h3 className="ai-section__heading">
                      <span className="ai-section__badge">02</span>
                      TỶ LỆ PHÂN BỔ ĐÓNG GÓP TRONG DỰ ÁN
                    </h3>

                    <div className="ai-metrics-card">
                      <div className="ai-metric-item">
                        <div className="ai-metric-header">
                          <span className="ai-metric-title">👤 Nhóm Sinh viên thực hiện (Nội dung & Phân tích)</span>
                          <span className="ai-metric-percent">80%</span>
                        </div>
                        <div className="ai-progress-track">
                          <div className="ai-progress-bar ai-progress-bar--human" style={{ width: '80%' }} />
                        </div>
                        <p className="ai-metric-desc">
                          Nghiên cứu giáo trình, chọn lọc tư liệu nguồn, lập dàn ý chiến lược, kiểm tra tính đúng đắn của sự kiện, thiết kế kịch bản trình bày và thuyết minh.
                        </p>
                      </div>

                      <div className="ai-metric-item">
                        <div className="ai-metric-header">
                          <span className="ai-metric-title">🤖 Trí tuệ Nhân tạo AI (Kỹ thuật hỗ trợ)</span>
                          <span className="ai-metric-percent">20%</span>
                        </div>
                        <div className="ai-progress-track">
                          <div className="ai-progress-bar ai-progress-bar--ai" style={{ width: '20%' }} />
                        </div>
                        <p className="ai-metric-desc">
                          Hỗ trợ sinh mã CSS/React, tối ưu hóa giao diện đa phương tiện, sửa lỗi tương thích và xử lý độ nét hình ảnh tư liệu.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5. LỜI CAM KẾT LIÊM CHÍNH HỌC THUẬT */}
                  <div className="ai-pledge-card">
                    <div className="ai-pledge-title">✦ LỜI CAM KẾT CỦA NHÓM THỰC HIỆN ✦</div>
                    <p className="ai-pledge-text">
                      “Chúng tôi cam kết việc sử dụng các công cụ Trí tuệ Nhân tạo hoàn toàn tuân thủ quy chế về Liêm chính Học thuật. AI đóng vai trò như một phương tiện công nghệ nâng tầm trực quan hóa kiến thức; nội dung tư tưởng, quan điểm đường lối lịch sử và bản lĩnh nhận định hoàn toàn là kết quả học tập nghiêm túc của sinh viên.”
                    </p>
                    <div className="ai-pledge-sign">
                      <span>Học phần: VNR202 – Lịch sử Đảng Cộng sản Việt Nam</span>
                      <span>Đề tài: Quyết định chiến lược & Hoàn chỉnh chuyển hướng chiến lược (1939–1945)</span>
                    </div>
                  </div>
                </div>

                {/* Cột phải: Danh mục tài liệu đối chiếu (03) */}
                <div className="ai-bottom-col ai-bottom-col--right">
                  {/* 4. NGUỒN TƯ LIỆU ĐỐI CHIẾU CHÍNH THỐNG */}
                  <div className="ai-section ai-section--refs">
                    <h3 className="ai-section__heading">
                      <span className="ai-section__badge">03</span>
                      DANH MỤC TÀI LIỆU SỬ LIỆU ĐỐI CHIẾU GỐC
                    </h3>

                    <ul className="ai-ref-list">
                      <li className="ai-ref-item">
                        <span className="ai-ref-bullet">📖</span>
                        <div>
                          <strong>Giáo trình Lịch sử Đảng Cộng sản Việt Nam</strong> – Dành cho bậc đại học hệ không chuyên lý luận chính trị, Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật.
                        </div>
                      </li>
                      <li className="ai-ref-item">
                        <span className="ai-ref-bullet">📜</span>
                        <div>
                          <strong>Văn kiện Đảng Toàn tập</strong>, Tập 6 (1936–1939) & Tập 7 (1940–1945) – NXB Chính trị quốc gia Sự thật, Hà Nội.
                        </div>
                      </li>
                      <li className="ai-ref-item">
                        <span className="ai-ref-bullet">🏛️</span>
                        <div>
                          <strong>Hồ Chí Minh Toàn tập</strong>, Tập 3 (1930–1945) – Viện Lịch sử Đảng, NXB Chính trị quốc gia Sự thật.
                        </div>
                      </li>
                      <li className="ai-ref-item">
                        <span className="ai-ref-bullet">🖼️</span>
                        <div>
                          <strong>Tư liệu ảnh & hiện vật</strong>: Bảo tàng Lịch sử Quốc gia Việt Nam, Khu di tích Quốc gia đặc biệt Pác Bó (Cao Bằng) và Bảo tàng Cách mạng Việt Nam.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER MODAL */}
            <div className="ai-modal-footer">
              <span className="ai-modal-footer__status">
                <span className="ai-status-dot" /> Đã kiểm chứng chuẩn mực học thuật
              </span>
              <button
                type="button"
                className="ai-modal-btn-confirm"
                onClick={onClose}
              >
                Đã hiểu & Quay lại bài học
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default AiAppendixModal;
