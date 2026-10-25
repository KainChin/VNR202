// src/components/presenter/PresenterOverlay.jsx
// Giao diện điều khiển Chế độ thuyết trình (Presenter Mode)
// Gồm: Thanh công cụ cố định ở đầu trang, Thẻ ghi chú diễn giả (Speaker Notes) nổi ở góc dưới, và Bảng tra cứu phím tắt (?)

import { memo } from 'react';

function formatSeconds(totalSec) {
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function PresenterOverlay({
  isPresenterMode,
  activeSectionIndex = 0,
  totalSections = 6,
  currentSection = {},
  elapsedSeconds = 0,
  totalExpectedDuration = 260,
  showNotes = true,
  onToggleNotes,
  showTimer = true,
  onToggleTimer,
  showHelp = false,
  onToggleHelp,
  onExit,
  hasVideo = false,
  onToggleVideo,
  isVideoOpen = false,
}) {
  if (!isPresenterMode) return null;

  const isOvertime = elapsedSeconds > totalExpectedDuration;
  const progressPercent = Math.min(
    100,
    Math.round(((activeSectionIndex + 1) / totalSections) * 100)
  );

  return (
    <>
      {/* 1. THANH ĐIỀU KHIỂN CỐ ĐỊNH Ở ĐỈNH MÀN HÌNH */}
      <header className="presenter-top-bar" role="toolbar" aria-label="Thanh công cụ chế độ thuyết trình">
        {/* Đường line tiến độ mỏng chạy ngang đỉnh */}
        <div
          className="presenter-progress-line"
          style={{ width: `${progressPercent}%` }}
          aria-hidden="true"
        />

        {/* Cụm trái: Nút thoát + Badge chế độ + Chỉ báo Section */}
        <div className="presenter-top-left">
          <button
            type="button"
            className="presenter-tool-btn"
            onClick={onExit}
            title="Thoát chế độ thuyết trình (Phím Esc)"
            aria-label="Thoát chế độ thuyết trình"
          >
            ✕ Thoát (Esc)
          </button>

          <span className="presenter-badge">
            <span style={{ color: '#FCD34D' }}>✦</span> THUYẾT TRÌNH
          </span>

          <div
            className="presenter-section-counter"
            aria-live="polite"
            aria-atomic="true"
          >
            <span>Section {activeSectionIndex + 1}</span>
            <span className="presenter-section-total">/ {totalSections}</span>
          </div>
        </div>

        {/* Cụm phải: Đồng hồ + Nút Ghi chú + Video + Bảng phím tắt */}
        <div className="presenter-top-right">
          {/* Đồng hồ đếm giờ */}
          {showTimer && (
            <div
              className={`presenter-timer-badge ${isOvertime ? 'is-overtime' : ''}`}
              title={
                isOvertime
                  ? `Đã vượt quá thời lượng dự kiến (${formatSeconds(elapsedSeconds)} / ${formatSeconds(totalExpectedDuration)})`
                  : `Thời gian thuyết trình: ${formatSeconds(elapsedSeconds)} / ${formatSeconds(totalExpectedDuration)}`
              }
              aria-label={`Thời gian thuyết trình ${formatSeconds(elapsedSeconds)} trên tổng ${formatSeconds(totalExpectedDuration)}`}
            >
              <span aria-hidden="true">{isOvertime ? '⚠️' : '⏱'}</span>
              <span>{formatSeconds(elapsedSeconds)}</span>
              <span style={{ opacity: 0.65, fontSize: '0.78rem' }}>
                / {formatSeconds(totalExpectedDuration)}
              </span>
            </div>
          )}

          {/* Nút bật/tắt Đồng hồ (T) */}
          <button
            type="button"
            className={`presenter-tool-btn ${showTimer ? 'is-active' : ''}`}
            onClick={onToggleTimer}
            title="Bật/tắt hiển thị đồng hồ (Phím T)"
            aria-label="Bật hoặc tắt đồng hồ đếm giờ"
          >
            ⏱ Đồng hồ (T)
          </button>

          {/* Nút bật/tắt Ghi chú diễn giả (N) */}
          <button
            type="button"
            className={`presenter-tool-btn ${showNotes ? 'is-active' : ''}`}
            onClick={onToggleNotes}
            title="Bật/tắt bảng ghi chú diễn giả (Phím N)"
            aria-label="Bật hoặc tắt bảng ghi chú người thuyết trình"
          >
            📝 Ghi chú (N)
          </button>

          {/* Nút mở/đóng Video tư liệu nếu có (V) */}
          {hasVideo && (
            <button
              type="button"
              className={`presenter-tool-btn ${isVideoOpen ? 'is-active' : ''}`}
              onClick={onToggleVideo}
              title="Mở hoặc đóng video tư liệu lịch sử (Phím V)"
              aria-label="Xem video tư liệu lịch sử"
            >
              🎬 Video (V)
            </button>
          )}

          {/* Nút hướng dẫn phím tắt (?) */}
          <button
            type="button"
            className="presenter-tool-btn"
            onClick={onToggleHelp}
            title="Xem bảng hướng dẫn phím tắt (Phím ?)"
            aria-label="Hướng dẫn phím tắt thuyết trình"
          >
            ⌨ Phím tắt (?)
          </button>
        </div>
      </header>

      {/* 2. BẢNG SPEAKER NOTES NỔI Ở GÓC DƯỚI BÊN PHẢI */}
      {showNotes && currentSection?.notes && (
        <aside
          className="presenter-speaker-notes-card"
          aria-label="Ghi chú người thuyết trình cho phần này"
          role="complementary"
        >
          <div className="presenter-notes-header">
            <div className="presenter-notes-title-group">
              <span style={{ color: 'var(--m1-gold, #B98B4A)' }}>✦</span>
              <h3 className="presenter-notes-heading">SPEAKER NOTES</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {currentSection.duration && (
                <span className="presenter-notes-duration" title="Thời lượng đề xuất cho phần này">
                  ⏱ ~{currentSection.duration}s
                </span>
              )}
              <button
                type="button"
                onClick={onToggleNotes}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  color: 'var(--m1-text-muted, #7A6A58)',
                  padding: '0.1rem 0.3rem',
                }}
                title="Đóng ghi chú (Phím N)"
                aria-label="Đóng bảng ghi chú"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="presenter-notes-body">
            <p className="presenter-notes-text">
              {currentSection.notes}
            </p>
          </div>
        </aside>
      )}

      {/* 3. MODAL BẢNG PHÍM TẮT TRỢ GIÚP (?) */}
      {showHelp && (
        <div
          className="presenter-help-overlay"
          onClick={onToggleHelp}
          role="dialog"
          aria-modal="true"
          aria-label="Bảng hướng dẫn phím tắt thuyết trình"
        >
          <div
            className="presenter-help-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="presenter-help-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--m1-gold)' }}>✦</span>
                <h3 className="presenter-help-title">BẢNG PHÍM TẮT THUYẾT TRÌNH</h3>
              </div>
              <button
                type="button"
                className="presenter-help-close-btn"
                onClick={onToggleHelp}
                aria-label="Đóng bảng phím tắt"
              >
                ✕
              </button>
            </div>

            <div className="presenter-shortcut-list">
              <div className="presenter-shortcut-row">
                <span className="presenter-shortcut-label">Section hoặc bước kế tiếp:</span>
                <div className="presenter-kbd-group">
                  <kbd className="presenter-kbd">→</kbd>
                  <span>hoặc</span>
                  <kbd className="presenter-kbd">PageDown</kbd>
                </div>
              </div>

              <div className="presenter-shortcut-row">
                <span className="presenter-shortcut-label">Section hoặc bước trước:</span>
                <div className="presenter-kbd-group">
                  <kbd className="presenter-kbd">←</kbd>
                  <span>hoặc</span>
                  <kbd className="presenter-kbd">PageUp</kbd>
                </div>
              </div>

              <div className="presenter-shortcut-row">
                <span className="presenter-shortcut-label">Bật / tắt ghi chú diễn giả:</span>
                <div className="presenter-kbd-group">
                  <kbd className="presenter-kbd">N</kbd>
                </div>
              </div>

              <div className="presenter-shortcut-row">
                <span className="presenter-shortcut-label">Bật / tắt đồng hồ đếm giờ:</span>
                <div className="presenter-kbd-group">
                  <kbd className="presenter-kbd">T</kbd>
                </div>
              </div>

              {hasVideo && (
                <div className="presenter-shortcut-row">
                  <span className="presenter-shortcut-label">Mở / đóng video tư liệu:</span>
                  <div className="presenter-kbd-group">
                    <kbd className="presenter-kbd">V</kbd>
                  </div>
                </div>
              )}

              <div className="presenter-shortcut-row">
                <span className="presenter-shortcut-label">Bật / tắt bảng phím tắt này:</span>
                <div className="presenter-kbd-group">
                  <kbd className="presenter-kbd">?</kbd>
                </div>
              </div>

              <div className="presenter-shortcut-row">
                <span className="presenter-shortcut-label">Thoát thuyết trình / Đóng cửa sổ:</span>
                <div className="presenter-kbd-group">
                  <kbd className="presenter-kbd">Esc</kbd>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              <button
                type="button"
                className="presenter-tool-btn is-active"
                onClick={onToggleHelp}
                style={{ padding: '0.45rem 1.5rem', fontSize: '0.9rem' }}
              >
                Đã hiểu, tiếp tục thuyết trình
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(PresenterOverlay);
