// src/components/MilestoneLayout.jsx
// Khung dùng chung cho các trang cột mốc lịch sử VNR202
// Tối ưu hóa cho thuyết trình, phong cách giấy cổ điển, animation mượt mà

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import InfoCard from './InfoCard.jsx';
import Gallery from './Gallery.jsx';
import VideoEmbed from './VideoEmbed.jsx';
import MilestoneNav from './MilestoneNav.jsx';
import GemButton from './GemButton.jsx';

// Map màu sang hex
const MAU_HEX = {
  'var(--m1)': '#3A3F47',
  'var(--m2)': '#1F4E79',
  'var(--m3)': '#A8541A',
  'var(--m4)': '#D9501E',
  'var(--m5)': '#A31621',
  'var(--m6)': '#C98F10',
};

// Component thẻ hiệu ứng cuộn cho 1 quyết định
function QuyetDinhCard({ q, delay = 0, mauHex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="quyet-dinh-card"
      style={{ borderLeft: `4px solid ${mauHex}` }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      <div className="quyet-dinh-card__header">
        <span className="quyet-dinh-card__so" style={{ background: mauHex }}>
          {q.so}
        </span>
        <h3>{q.tieuDe}</h3>
      </div>
      <div className="quyet-dinh-card__body">
        {q.noiDung &&
          q.noiDung.map((nd, idx) => (
            <p key={idx}>{nd}</p>
          ))}
      </div>
    </motion.div>
  );
}

function MilestoneLayout({ data }) {
  const {
    id, mau, thoiGian, tieuDe, phuDe, moTaNgan,
    boiCanh,
    hoiNghiTW6,
    bonQuyetDinh,
    quyetDinh, // fallback
    ketQuaYNghia,
    ketQua, // fallback
    video,
    thongDiepKetThuc,
    diemCanNho, tricDan,
    moc, anh,
    cauHoiTuongTac,
  } = data;

  const mauHex = MAU_HEX[mau] || '#8B1A10';

  // Thanh tiến trình cuộn mép trên
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      if (scrollable <= 0) return;
      setScrollPct((window.scrollY / scrollable) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Câu hỏi tương tác: toggle hiện gợi ý (nếu có)
  const [hienGoiY, setHienGoiY] = useState(false);

  // Scroll lên đầu trang khi chuyển cột mốc
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <div className="milestone-page" style={{ '--mau-hien-tai': mauHex }}>
      {/* Thanh tiến trình cuộn mảnh mép trên */}
      <div
        className="scroll-progress"
        style={{
          width: `${scrollPct}%`,
          background: `linear-gradient(90deg, ${mauHex}, var(--do-co))`,
        }}
        aria-hidden="true"
      />

      {/* ===== 1. PHẦN ĐẦU: TIÊU ĐỀ & PHỤ ĐỀ ===== */}
      <header
        className="milestone-header vien-hoa-tiet"
        style={{
          borderBottom: `3px solid ${mauHex}25`,
          background: `linear-gradient(180deg, ${mauHex}12 0%, transparent 100%)`,
        }}
      >
        {/* Nút về poster */}
        <Link to="/" className="nut-giay nut-ve-poster" aria-label="Quay về trang chủ poster">
          ← Về poster
        </Link>

        {/* Số cột mốc lớn trong vòng tròn */}
        <motion.div
          className="milestone-header__so"
          style={{ background: mauHex }}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {id}
        </motion.div>

        {/* Thời gian */}
        <motion.p
          className="milestone-header__thoigian"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {thoiGian}
        </motion.p>

        {/* Tiêu đề */}
        <motion.h1
          className="milestone-header__tieude"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {tieuDe}
        </motion.h1>

        {/* Phụ đề trang trọng */}
        {phuDe && (
          <motion.p
            className="milestone-header__phude"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {phuDe}
          </motion.p>
        )}

        {/* Mô tả ngắn nếu có */}
        {moTaNgan && (
          <motion.p
            className="milestone-header__mota"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {moTaNgan}
          </motion.p>
        )}
      </header>

      {/* ===== THANH TIẾN TRÌNH 1–6 (ĐẦU TRANG) ===== */}
      <MilestoneNav currentId={id} />

      {/* ===== NỘI DUNG CHÍNH (THEO THỨ TỰ BỐ CỤC YÊU CẦU) ===== */}
      <main className="milestone-container">

        {/* 2. BỐI CẢNH LỊCH SỬ */}
        {boiCanh && boiCanh.noiDung && boiCanh.noiDung.length > 0 && (
          <section style={{ marginBottom: '2rem' }}>
            <InfoCard
              tieuDe={boiCanh.tieuDe || 'Bối cảnh lịch sử'}
              noiDung={boiCanh.noiDung}
              mau={mauHex}
              bieu="🌍"
              delay={0.1}
            />
          </section>
        )}

        {/* 3. THÔNG TIN HỘI NGHỊ TRUNG ƯƠNG 6 */}
        {hoiNghiTW6 && (
          <motion.section
            style={{ marginBottom: '2.25rem' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">🏛️ {hoiNghiTW6.tieuDe}</h2>

            {/* Thông tin nhanh: dạng lưới thẻ giấy */}
            {hoiNghiTW6.thongTinNhanh && hoiNghiTW6.thongTinNhanh.length > 0 && (
              <div className="thong-tin-nhanh-grid">
                {hoiNghiTW6.thongTinNhanh.map((item, idx) => (
                  <div key={idx} className="thong-tin-nhanh-item">
                    <span className="thong-tin-nhanh-item__nhan">{item.nhan}</span>
                    <span className="thong-tin-nhanh-item__giatri">{item.giaTri}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Khung: Vì sao Nguyễn Văn Cừ chủ trì hội nghị */}
            {hoiNghiTW6.viSaoNguyenVanCu && (
              <div className="nguyen-van-cu-box">
                <h3 className="nguyen-van-cu-box__tieude">
                  <span>★</span> {hoiNghiTW6.viSaoNguyenVanCu.tieuDe}
                </h3>
                {hoiNghiTW6.viSaoNguyenVanCu.noiDung &&
                  hoiNghiTW6.viSaoNguyenVanCu.noiDung.map((nd, idx) => (
                    <p key={idx}>{nd}</p>
                  ))}
              </div>
            )}
          </motion.section>
        )}

        {/* 4. GIỚI THIỆU VỀ NGUYỄN VĂN CỪ VÀ VIDEO YOUTUBE (SHORTS 9:16) */}
        {video && video.length > 0 && (
          <section style={{ marginBottom: '2.25rem' }}>
            <h2 className="section-title">🎬 Video tư liệu</h2>
            <VideoEmbed video={video} />
          </section>
        )}

        {/* 5. BỐN QUYẾT ĐỊNH CHIẾN LƯỢC (4 THẺ RIÊNG BIỆT) */}
        {bonQuyetDinh && bonQuyetDinh.length > 0 ? (
          <section style={{ marginBottom: '2.25rem' }}>
            <h2 className="section-title">⚡ Bốn quyết định chiến lược</h2>
            <div className="bon-quyet-dinh-grid">
              {bonQuyetDinh.map((q, idx) => (
                <QuyetDinhCard
                  key={q.so || idx}
                  q={q}
                  delay={idx * 0.12}
                  mauHex={mauHex}
                />
              ))}
            </div>
          </section>
        ) : (
          /* Fallback cho các cột mốc chưa có bonQuyetDinh */
          quyetDinh &&
          quyetDinh.noiDung &&
          quyetDinh.noiDung.length > 0 && (
            <section style={{ marginBottom: '2rem' }}>
              <InfoCard
                tieuDe={quyetDinh.tieuDe || 'Quyết định'}
                noiDung={quyetDinh.noiDung}
                mau={mauHex}
                bieu="⚡"
                delay={0.15}
              />
            </section>
          )
        )}

        {/* 6. KẾT QUẢ VÀ Ý NGHĨA LỊCH SỬ (+ LIÊN HỆ 1945) */}
        {ketQuaYNghia ? (
          <motion.section
            style={{ marginBottom: '2.25rem' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">🏆 {ketQuaYNghia.tieuDe}</h2>
            <div className="info-card" style={{ borderLeftColor: mauHex, color: mauHex }}>
              <div className="info-card__body">
                <ul>
                  {ketQuaYNghia.noiDung &&
                    ketQuaYNghia.noiDung.map((y, i) => <li key={i}>{y}</li>)}
                </ul>
              </div>
            </div>

            {/* Khối nổi bật: Liên hệ với thắng lợi năm 1945 */}
            {ketQuaYNghia.lienHe1945 && (
              <div className="lien-he-1945-box">
                <h3 className="lien-he-1945-box__tieude">
                  <span>🚩</span> {ketQuaYNghia.lienHe1945.tieuDe}
                </h3>
                <p>{ketQuaYNghia.lienHe1945.noiDung}</p>
              </div>
            )}
          </motion.section>
        ) : (
          /* Fallback cho các cột mốc thông thường */
          ketQua &&
          ketQua.noiDung &&
          ketQua.noiDung.length > 0 && (
            <section style={{ marginBottom: '2rem' }}>
              <InfoCard
                tieuDe={ketQua.tieuDe || 'Kết quả'}
                noiDung={ketQua.noiDung}
                mau={mauHex}
                bieu="🏆"
                delay={0.2}
              />
            </section>
          )
        )}

        {/* Dòng thời gian nhỏ (nếu có dữ liệu) */}
        {moc && moc.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2 className="section-title">📅 Dòng thời gian</h2>
            <div className="timeline-mini">
              {moc.map((m, i) => (
                <div key={i} className="timeline-mini__item">
                  <span className="timeline-mini__ngay">{m.ngay}</span>
                  <span>{m.suKien}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Thư viện ảnh (CHỈ HIỂN THỊ NẾU CÓ DỮ LIỆU) */}
        {anh && anh.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2 className="section-title">🖼 Tư liệu ảnh</h2>
            <Gallery anh={anh} milestoneId={id} />
          </section>
        )}

        {/* Điểm cần nhớ (nếu có) */}
        {diemCanNho && diemCanNho.length > 0 && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2 className="section-title">⭐ Điểm cần nhớ</h2>
            <div className="diem-can-nho">
              <ul>
                {diemCanNho.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Trích dẫn (nếu có) */}
        {tricDan && tricDan.noiDung && (
          <blockquote className="trich-dan">
            "{tricDan.noiDung}"
            {tricDan.nguon && <cite>— {tricDan.nguon}</cite>}
          </blockquote>
        )}

        {/* 7. THÔNG ĐIỆP KẾT THÚC & DẪN SANG CỘT MỐC TIẾP THEO */}
        {thongDiepKetThuc && (
          <motion.section
            className="thong-diep-box"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="thong-diep-box__tieude">{thongDiepKetThuc.tieuDe}</h3>
            <blockquote className="thong-diep-box__caunoi">
              "{thongDiepKetThuc.cauNoi}"
            </blockquote>

            {/* Khối dẫn sang cột mốc tiếp theo */}
            {thongDiepKetThuc.danSangCotMocTiep && (
              <div className="dan-sang-cot-moc-box">
                <div className="dan-sang-cot-moc-box__tieude">
                  Dẫn sang Cột mốc {thongDiepKetThuc.danSangCotMocTiep.cotMoc} – {thongDiepKetThuc.danSangCotMocTiep.thoiGian}:
                </div>
                <p>{thongDiepKetThuc.danSangCotMocTiep.noiDung}</p>
              </div>
            )}
          </motion.section>
        )}

        {/* Câu hỏi tương tác (CHỈ HIỆN KHI CÓ DỮ LIỆU) */}
        {cauHoiTuongTac && cauHoiTuongTac.cauHoi && (
          <section style={{ marginBottom: '1.75rem' }}>
            <h2 className="section-title">💬 Câu hỏi cho khán giả</h2>
            <div className="cau-hoi-box">
              <div className="cau-hoi-box__question">
                <span>❓</span>
                <span>{cauHoiTuongTac.cauHoi}</span>
              </div>
              {hienGoiY && cauHoiTuongTac.goiYDapAn && (
                <motion.div
                  className="cau-hoi-box__answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <strong>Gợi ý:</strong> {cauHoiTuongTac.goiYDapAn}
                </motion.div>
              )}
              <button
                className="nut-hien-goi-y"
                onClick={() => setHienGoiY((v) => !v)}
                aria-expanded={hienGoiY}
              >
                {hienGoiY ? '▲ Ẩn gợi ý' : '▼ Hiện gợi ý đáp án'}
              </button>
            </div>
          </section>
        )}

        {/* 8. ĐIỀU HƯỚNG CUỐI TRANG */}
        <MilestoneNav currentId={id} />
      </main>

      {/* Nút Gem nổi góc dưới phải */}
      <GemButton milestoneId={id} />
    </div>
  );
}

export default MilestoneLayout;
