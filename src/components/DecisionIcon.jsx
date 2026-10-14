// src/components/DecisionIcon.jsx
// Biểu tượng minh họa lịch sử cách điệu phong cách giấy cổ (Vintage Woodcut/Line-art)
// Đồng bộ gam màu nâu đỏ/cổ điển, hỗ trợ trực quan tinh tế cho 4 quyết định chiến lược

export default function DecisionIcon({ type, color = '#8B1A10', size = 36 }) {
  switch (type) {
    case 'docLap':
      // Quyết định 1: Biểu tượng Ngôi sao độc lập & vầng sáng cách mạng
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="20" cy="20" r="14.5" stroke={color} strokeWidth="1" opacity="0.6" />
          {/* Ngôi sao 5 cánh cổ điển */}
          <path
            d="M20 7.5L23.5 15.5L32 16.5L25.8 22.2L27.5 30.5L20 26.2L12.5 30.5L14.2 22.2L8 16.5L16.5 15.5L20 7.5Z"
            fill={color}
            fillOpacity="0.18"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="2" fill={color} />
        </svg>
      );

    case 'dieuChinh':
      // Quyết định 2: Biểu tượng Chuyển hướng chiến lược & Văn kiện/Con dấu
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <rect x="5" y="5" width="30" height="30" rx="4" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Biểu tượng văn kiện & mũi tên chuyển hướng linh hoạt */}
          <path
            d="M12 13H24M12 18H20"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Vòng cung mũi tên chuyển hướng */}
          <path
            d="M15 27C15 22 20 21 27 21M27 21L23 17M27 21L23 25"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="27" r="4.5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
        </svg>
      );

    case 'matTran':
      // Quyết định 3: Biểu tượng Đại đoàn kết – Ba vòng tròn liên kết bền chặt
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.2" opacity="0.4" />
          {/* 3 vòng tròn đan kết (Borromean/Unity rings) */}
          <circle cx="20" cy="14" r="7.5" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.12" />
          <circle cx="14" cy="24.5" r="7.5" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.12" />
          <circle cx="26" cy="24.5" r="7.5" stroke={color} strokeWidth="1.6" fill={color} fillOpacity="0.12" />
          {/* Tâm điểm đoàn kết */}
          <circle cx="20" cy="21" r="2.2" fill={color} />
        </svg>
      );

    case 'biMat':
      // Quyết định 4: Biểu tượng Bảo toàn lực lượng (Khiên che chở) & Ngọn lửa khởi nghĩa bí mật
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          {/* Khung khiên bảo toàn bí mật */}
          <path
            d="M20 6L9 10.5V19.5C9 26.5 13.8 32.5 20 34.5C26.2 32.5 31 26.5 31 19.5V10.5L20 6Z"
            stroke={color}
            strokeWidth="1.6"
            fill={color}
            fillOpacity="0.1"
            strokeLinejoin="round"
          />
          {/* Ngọn lửa âm ỉ rèn đúc thời cơ */}
          <path
            d="M20 13C21 16 23.5 18 23.5 21C23.5 23.5 21.8 25.5 20 25.5C18.2 25.5 16.5 23.5 16.5 21C16.5 19 18.5 17 20 13Z"
            fill={color}
            stroke={color}
            strokeWidth="1.2"
          />
          <path
            d="M20 20C20.5 21 21.5 21.8 21.5 23C21.5 24 20.8 24.8 20 24.8C19.2 24.8 18.5 24 18.5 23C18.5 22 19.2 21.2 20 20Z"
            fill="#FFF8E7"
          />
        </svg>
      );

    default:
      return null;
  }
}
