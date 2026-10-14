// src/pages/Milestone1.jsx
// Redesign Cột mốc 1: Tháng 11/1939 theo bố cục nằm ngang gọn gàng (Desktop 16:9)
// Tối ưu trình chiếu: 3 tầng ngang, xem ảnh phóng to, tính năng toàn màn hình, tiêu đề thanh lịch

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/milestone1.js';
import MilestoneNav from '../components/MilestoneNav.jsx';
import GemButton from '../components/GemButton.jsx';
import DecisionIcon from '../components/DecisionIcon.jsx';

function Milestone1() {
  const [moModalVideo, setMoModalVideo] = useState(false);
  const [anhDangXem, setAnhDangXem] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Lắng nghe thay đổi trạng thái toàn màn hình
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Phím tắt Esc đóng modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setAnhDangXem(null);
        setMoModalVideo(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const embedUrl = `https://www.youtube.com/embed/${data.tang1Hero.video.youtubeId}?rel=0`;
  const embedUrlModal = `https://www.youtube.com/embed/${data.tang1Hero.video.youtubeId}?rel=0&autoplay=1`;

  return (
    <div className="milestone-page m1-page-horizontal">
      {/* ============================================================
          THANH ĐIỀU HƯỚNG ĐỈNH TRANG:
          - Nút quay về poster
          - Tiêu đề cột mốc thiết kế trang trọng
          - Nút Toàn màn hình & Thanh 6 chấm tiến trình
          ============================================================ */}
      <header className="m1-top-bar">
        <Link to="/" className="nut-giay m1-back-btn" title="Quay về poster trang chủ">
          ← Về poster
        </Link>

        {/* Tiêu đề cột mốc thiết kế thanh lịch */}
        <div className="m1-top-title-banner" aria-label="Tiêu đề Cột mốc">
          <span className="m1-top-title-badge">CỘT MỐC 01</span>
          <span className="m1-top-title-sep">✦</span>
          <span className="m1-top-title-heading">
            THÁNG 11/1939 – CHUYỂN HƯỚNG CHIẾN LƯỢC
          </span>
        </div>

        {/* Cụm công cụ: Toàn màn hình & Chấm cột mốc */}
        <div className="m1-top-tools">
          <button
            type="button"
            className="nut-giay m1-fullscreen-btn"
            onClick={toggleFullScreen}
            title={isFullScreen ? 'Thu nhỏ cửa sổ' : 'Bật toàn màn hình trình chiếu'}
            aria-label="Chuyển chế độ toàn màn hình"
          >
            {isFullScreen ? '⤓ Thu nhỏ' : '⛶ Toàn màn hình'}
          </button>
          <MilestoneNav currentId={data.id} showButtons={false} />
        </div>
      </header>

      {/* ============================================================
          BỐ CỤC CHÍNH 3 TẦNG NGANG (16:9 COMPACT PRESENTATION)
          ============================================================ */}
      <main className="m1-horiz-container" aria-label={data.tang1Hero.tieuDe}>

        {/* ------------------------------------------------------------
            TẦNG 1 – HERO: 2 CỘT (TRÁI: BỐI CẢNH 3 ẢNH, PHẢI: VIDEO DÀI RA)
            ------------------------------------------------------------ */}
        <section className="m1-tier-1" aria-labelledby="m1-hero-title">
          {/* CỘT TRÁI: TIÊU ĐỀ & 3 Ý BỐI CẢNH CÓ ẢNH THEO THỨ TỰ */}
          <motion.div
            className="m1-tier-1__left"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="m1-tier-1__header">
              <span className="m1-tier-1__date-badge">{data.tang1Hero.namThang}</span>
              <h1 id="m1-hero-title" className="m1-tier-1__title">
                {data.tang1Hero.tieuDe}
              </h1>
            </div>
            <p className="m1-tier-1__subtitle">{data.tang1Hero.cauPhu}</p>

            {/* 3 ý bối cảnh kèm 3 ảnh tư liệu lịch sử theo thứ tự (click xem toàn bộ ảnh) */}
            <div className="m1-context-cards">
              {data.tang1Hero.boiCanhNgan.map((item, idx) => (
                <div
                  key={idx}
                  className="m1-context-card"
                  onClick={() =>
                    setAnhDangXem({
                      src: item.hinhAnh,
                      chuThich: item.chuThich || item.moTa,
                    })
                  }
                  title="Nhấn để xem toàn bộ ảnh"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setAnhDangXem({
                        src: item.hinhAnh,
                        chuThich: item.chuThich || item.moTa,
                      });
                    }
                  }}
                >
                  {item.hinhAnh && (
                    <div className="m1-context-card__thumb-wrap">
                      <img
                        src={item.hinhAnh}
                        alt={item.chuThich || item.moTa}
                        className="m1-context-card__img"
                        loading="lazy"
                      />
                      <div className="m1-img-zoom-hint" aria-hidden="true">
                        <span>🔍 Phóng to</span>
                      </div>
                    </div>
                  )}
                  <div className="m1-context-card__body">
                    <strong className="m1-context-card__label">{item.moc}:</strong>{' '}
                    <span className="m1-context-card__desc">{item.moTa}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CỘT PHẢI: VIDEO SHORTS DÀI RA BÊN PHẢI + NÚT MỞ RỘNG */}
          <motion.aside
            className="m1-tier-1__right"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            aria-label="Tư liệu video Shorts"
          >
            <div className="m1-compact-video">
              <div className="m1-compact-video__top-row">
                <span className="m1-compact-video__header">
                  {data.tang1Hero.video.tieuDe}
                </span>
                <button
                  type="button"
                  className="m1-video-expand-btn"
                  onClick={() => setMoModalVideo(true)}
                  title="Mở rộng xem video toàn màn hình"
                  aria-label="Mở rộng xem video YouTube"
                >
                  {data.tang1Hero.video.nutMoRong}
                </button>
              </div>

              <div className="m1-compact-video__frame">
                <iframe
                  src={embedUrl}
                  title={data.tang1Hero.video.tieuDe}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="m1-compact-video__footer">
                {data.tang1Hero.video.nguonTienTo}
                <a
                  href={data.tang1Hero.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m1-video-source-link"
                  title="Xem trên YouTube"
                >
                  {data.tang1Hero.video.nguonTenLink}
                </a>
              </div>
            </div>
          </motion.aside>
        </section>

        {/* ------------------------------------------------------------
            TẦNG 2 – NỘI DUNG CHÍNH (KHỐI A: HỘI NGHỊ | KHỐI B: 4 QUYẾT ĐỊNH)
            ------------------------------------------------------------ */}
        <section className="m1-tier-2" aria-labelledby="m1-decisions-heading">
          {/* KHỐI A – THÔNG TIN HỘI NGHỊ TRUNG ƯƠNG 6 */}
          <motion.div
            className="m1-tier-2__block-a"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className="m1-conf-card">
              <h2 className="m1-conf-card__title">
                {data.tang2NoiDung.khoiA_HoiNghi.tieuDe}
              </h2>

              {/* 2 ảnh tư liệu: Bản đồ Bà Điểm và Chân dung Nguyễn Văn Cừ (click xem toàn bộ ảnh) */}
              {data.tang2NoiDung.khoiA_HoiNghi.hinhAnh && (
                <div className="m1-conf-gallery">
                  {data.tang2NoiDung.khoiA_HoiNghi.hinhAnh.map((img, idx) => (
                    <div
                      key={idx}
                      className="m1-conf-gallery__item"
                      onClick={() =>
                        setAnhDangXem({
                          src: img.src,
                          chuThich: img.chuThich,
                        })
                      }
                      title="Nhấn để xem toàn bộ ảnh"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setAnhDangXem({
                            src: img.src,
                            chuThich: img.chuThich,
                          });
                        }
                      }}
                    >
                      <div className="m1-conf-gallery__wrap">
                        <img
                          src={img.src}
                          alt={img.chuThich}
                          className="m1-conf-gallery__img"
                          loading="lazy"
                        />
                        <div className="m1-img-zoom-hint" aria-hidden="true">
                          <span>🔍 Phóng to</span>
                        </div>
                      </div>
                      <span className="m1-conf-gallery__caption">{img.chuThich}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="m1-conf-card__list">
                {data.tang2NoiDung.khoiA_HoiNghi.thongTin.map((item, i) => (
                  <li key={i} className="m1-conf-card__item">
                    <span className="m1-conf-card__lbl">{item.nhan}:</span>{' '}
                    <span className="m1-conf-card__val">{item.giaTri}</span>
                  </li>
                ))}
              </ul>
              <div className="m1-conf-card__lead">
                {data.tang2NoiDung.khoiA_HoiNghi.doanNgan}
              </div>
            </div>
          </motion.div>

          {/* KHỐI B – 4 QUYẾT ĐỊNH CHIẾN LƯỢC (GRID 2x2 CÓ MINH HỌA) */}
          <motion.div
            className="m1-tier-2__block-b"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="m1-decisions-panel">
              <h2 id="m1-decisions-heading" className="m1-decisions-panel__title">
                {data.tang2NoiDung.khoiB_BonQuyetDinh.tieuDePhan}
              </h2>

              <div className="m1-dec-grid-2x2">
                {data.tang2NoiDung.khoiB_BonQuyetDinh.danhSach.map((item) => (
                  <article
                    key={item.so}
                    className="m1-dec-card-horiz"
                    style={{ borderLeftColor: item.mauNhan }}
                  >
                    <div className="m1-dec-card-horiz__visual">
                      <DecisionIcon type={item.loaiIcon} color={item.mauNhan} size={32} />
                      <span
                        className="m1-dec-card-horiz__num"
                        style={{ color: item.mauNhan }}
                      >
                        {item.so}
                      </span>
                    </div>
                    <div className="m1-dec-card-horiz__content">
                      <h3 className="m1-dec-card-horiz__heading">{item.tieuDe}</h3>
                      <p className="m1-dec-card-horiz__desc">{item.noiDung}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------
            TẦNG 3 – TIMELINE + KẾT LUẬN (DẢI NGANG GỌN Ở CUỐI)
            ------------------------------------------------------------ */}
        <motion.section
          className="m1-tier-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          aria-label="Tiến trình lịch sử và kết luận"
        >
          {/* DẢI TIMELINE 4 MỐC NGẮN */}
          <div className="m1-tier-3__timeline">
            {data.tang3Timeline.cacMoc.map((moc, idx) => (
              <div key={idx} className="m1-timeline-chip">
                <span className="m1-timeline-chip__year">{moc.nam}</span>
                <span className="m1-timeline-chip__desc">{moc.moTa}</span>
                {idx < data.tang3Timeline.cacMoc.length - 1 && (
                  <span className="m1-timeline-chip__arrow">→</span>
                )}
              </div>
            ))}
          </div>

          {/* DÒNG LIÊN HỆ & THÔNG ĐIỆP KẾT LUẬN */}
          <div className="m1-tier-3__conclude">
            <p className="m1-tier-3__bridge">{data.tang3Timeline.yNghia}</p>
            <p className="m1-tier-3__quote">“{data.tang3Timeline.ketLuan}”</p>
          </div>

          {/* NÚT CHUYỂN TIẾP SANG CỘT MỐC 2 */}
          <div className="m1-tier-3__action">
            <Link
              to={data.dieuHuongTiep.duongDan}
              className="m1-btn-next-step"
              aria-label={data.dieuHuongTiep.nhan}
            >
              {data.dieuHuongTiep.nhan}
            </Link>
          </div>
        </motion.section>

      </main>

      {/* Nút Gem AI góc dưới phải */}
      <GemButton milestoneId={data.id} />

      {/* ============================================================
          MODAL LIGHTBOX XEM TOÀN BỘ ẢNH (PHÓNG TO SẮC NÉT)
          ============================================================ */}
      <AnimatePresence>
        {anhDangXem && (
          <motion.div
            className="m1-img-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAnhDangXem(null)}
          >
            <motion.div
              className="m1-img-modal-dialog"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="m1-img-modal-header">
                <span className="m1-img-modal-title">ẢNH TƯ LIỆU LỊCH SỬ</span>
                <button
                  type="button"
                  className="m1-img-modal-close"
                  onClick={() => setAnhDangXem(null)}
                  aria-label="Đóng ảnh"
                  title="Đóng (Esc)"
                >
                  ✕ Đóng
                </button>
              </div>

              <div className="m1-img-modal-frame">
                <img
                  src={anhDangXem.src}
                  alt={anhDangXem.chuThich}
                  className="m1-img-modal-photo"
                />
              </div>

              {anhDangXem.chuThich && (
                <div className="m1-img-modal-caption">
                  {anhDangXem.chuThich}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================
          MODAL XEM VIDEO YOUTUBE MỞ RỘNG (PHÓNG TO TIỆN THEO DÕI)
          ============================================================ */}
      <AnimatePresence>
        {moModalVideo && (
          <motion.div
            className="m1-video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMoModalVideo(false)}
          >
            <motion.div
              className="m1-video-modal-dialog"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="m1-video-modal-header">
                <h3 className="m1-video-modal-title">
                  {data.tang1Hero.video.tieuDe}
                </h3>
                <button
                  type="button"
                  className="m1-video-modal-close"
                  onClick={() => setMoModalVideo(false)}
                  aria-label="Đóng video"
                >
                  ✕ Đóng
                </button>
              </div>

              <div className="m1-video-modal-frame">
                <iframe
                  src={embedUrlModal}
                  title={data.tang1Hero.video.tieuDe}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                />
              </div>

              <div className="m1-video-modal-footer">
                <a
                  href={data.tang1Hero.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m1-btn-next-step"
                >
                  Mở trực tiếp trên YouTube →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Milestone1;
