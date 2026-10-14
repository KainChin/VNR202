// src/gem/gemConfig.js
// Cấu hình và handler cho nút Gem
// TODO: Tích hợp Gem API khi sẵn sàng

/**
 * Hàm xử lý khi người dùng gửi tin nhắn đến Gem.
 * @param {string} message - Nội dung tin nhắn của người dùng
 * @param {number|null} milestoneId - ID cột mốc hiện tại (nếu có)
 * @returns {Promise<string>} - Phản hồi từ Gem
 */
export async function onSend(message, milestoneId) {
  // TODO: Thay thế bằng lời gọi API Gem thật sự khi có key
  // Hiện tại trả về thông báo placeholder
  console.log('[Gem] Nhận tin nhắn:', message, '| Cột mốc:', milestoneId);

  // Giả lập delay nhỏ
  await new Promise((resolve) => setTimeout(resolve, 600));

  return 'Gem đang được chuẩn bị, sẽ sớm hỗ trợ bạn tìm hiểu về các cột mốc.';
}

// Cấu hình giao diện Gem
export const gemConfig = {
  tieuDe: 'Gem',
  chaoHoi: 'Xin chào! Tôi là Gem. Bạn muốn tìm hiểu gì về giai đoạn 1930–1945?',
};
