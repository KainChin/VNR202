// src/components/VideoEmbed.jsx
// Nhúng video YouTube dùng youtube-nocookie.com
// Hỗ trợ cả tỉ lệ chuẩn 16:9 và video Shorts dọc 9:16
// Tự động ẩn khi không có dữ liệu (không hiện khung trống)

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SingleVideo – Nhúng một video YouTube
 * @param {string} youtubeId - ID video YouTube
 * @param {string} tieuDe    - Tiêu đề video
 * @param {string} nguon     - Nguồn video
 * @param {boolean} isShort  - Có phải video Shorts dọc 9:16 không
 * @param {number|undefined} batDau  - Thời gian bắt đầu (giây) nếu có
 * @param {number|undefined} ketThuc - Thời gian kết thúc (giây) nếu có
 */
function SingleVideo({ youtubeId, tieuDe, nguon, isShort, tiLe, batDau, ketThuc }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  // Xây dựng URL tham số nếu có batDau hoặc ketThuc
  const params = new URLSearchParams();
  if (typeof batDau === 'number') params.append('start', batDau);
  if (typeof ketThuc === 'number') params.append('end', ketThuc);
  const paramString = params.toString() ? `?${params.toString()}` : '';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}${paramString}`;

  const isVertical = isShort || tiLe === '9:16';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isVertical ? 'center' : 'stretch',
      }}
    >
      {tieuDe && (
        <p
          style={{
            fontFamily: 'var(--font-tieude)',
            fontWeight: 600,
            color: 'var(--do-dam)',
            marginBottom: '0.5rem',
            fontSize: '1rem',
            textAlign: isVertical ? 'center' : 'left',
          }}
        >
          🎬 {tieuDe}
        </p>
      )}

      {/* Khung video: 9:16 cho Shorts hoặc 16:9 cho ngang */}
      <div
        className={isVertical ? 'video-wrap-shorts' : 'video-wrap'}
        style={
          isVertical
            ? {
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '9 / 16',
                borderRadius: 'var(--r)',
                overflow: 'hidden',
                boxShadow: '0 4px 20px var(--bong)',
                border: '2px solid var(--vien)',
                background: '#000',
              }
            : undefined
        }
      >
        <iframe
          src={embedUrl}
          title={tieuDe || 'Video lịch sử'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={
            isVertical
              ? {
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }
              : undefined
          }
        />
      </div>

      {nguon && (
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--chu-nhat)',
            fontStyle: 'italic',
            marginTop: '0.45rem',
            textAlign: isVertical ? 'center' : 'left',
          }}
        >
          Nguồn: {nguon}
        </p>
      )}
    </motion.div>
  );
}

/**
 * VideoEmbed – Render danh sách video (ẩn hoàn toàn nếu rỗng)
 * @param {Array} video - Mảng [{ youtubeId, tieuDe, nguon, isShort, tiLe, batDau, ketThuc }]
 */
function VideoEmbed({ video }) {
  // Nếu không có video, ẩn hoàn toàn theo yêu cầu
  if (!video || video.length === 0) {
    return null;
  }

  return (
    <div>
      {video.map((v, i) => (
        <SingleVideo
          key={i}
          youtubeId={v.youtubeId}
          tieuDe={v.tieuDe}
          nguon={v.nguon}
          isShort={v.isShort}
          tiLe={v.tiLe}
          batDau={v.batDau}
          ketThuc={v.ketThuc}
        />
      ))}
    </div>
  );
}

export default VideoEmbed;
