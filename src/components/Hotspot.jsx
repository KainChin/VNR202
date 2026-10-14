// src/components/Hotspot.jsx
// Nút hotspot tròn trong suốt đặt lên poster, bấm chuyển trang cột mốc

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Hotspot – Nút bấm vô hình đặt đè lên số trên poster
 * @param {number} so       - Số thứ tự (1–6)
 * @param {number} left     - Tọa độ % theo chiều ngang khung
 * @param {number} top      - Tọa độ % theo chiều dọc khung
 * @param {string} nhan     - Nhãn hiện khi hover (thời gian · tiêu đề)
 * @param {string} duongDan - URL đích (/cot-moc/X)
 * @param {number} index    - Thứ tự hiện lần lượt (delay animation)
 */
function Hotspot({ so, left, top, nhan, duongDan, index }) {
  return (
    <motion.div
      // Hiện lần lượt: mỗi nút delay thêm 0.15s
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.6 + index * 0.15,
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
      }}
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        zIndex: 10,
      }}
    >
      <Link
        to={duongDan}
        className="hotspot"
        aria-label={`Cột mốc ${so}: ${nhan}`}
        title={nhan}
        style={{
          // Đặt tâm nút đúng tọa độ
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Kích thước: ~5% chiều rộng khung, tối thiểu 44px (a11y)
          width: 'clamp(44px, 5%, 60px)',
          height: 'clamp(44px, 5%, 60px)',
          borderRadius: '50%',
          background: 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Nhãn tooltip khi hover */}
        <span className="hotspot__label">{nhan}</span>
      </Link>
    </motion.div>
  );
}

export default Hotspot;
