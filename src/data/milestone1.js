// src/data/milestone1.js
// Dữ liệu Cột mốc 01: 1930 – ĐẢNG CỘNG SẢN VIỆT NAM RA ĐỜI
// Bước ngoặt vĩ đại mở đầu tiến trình cách mạng Việt Nam

export default {
  id: 1,
  slug: '1',
  thoiGian: '1930',
  tieuDe: 'ĐẢNG CỘNG SẢN VIỆT NAM RA ĐỜI',
  phuDe: 'Mùa xuân 1930 – Mở ra con đường cứu nước đúng đắn cho dân tộc Việt Nam.',
  mau: '#8B1A10',

  // Chuỗi chiến lược tổng thể 7 mốc
  chuoiChienLuoc: [
    {
      id: 1,
      so: '01',
      ten: 'Đảng ra đời',
      moc: '1930',
      isActive: true,
      moTa: 'Hội nghị thành lập Đảng tại Hương Cảng',
    },
    {
      id: 2,
      so: '02',
      ten: 'Mở đầu chuyển hướng',
      moc: '11/1939',
      isActive: false,
      moTa: 'Hội nghị TW6: Đặt giải phóng dân tộc lên hàng đầu',
    },
    {
      id: 3,
      so: '03',
      ten: 'Hoàn chỉnh đường lối',
      moc: '05/1941',
      isActive: false,
      moTa: 'Hội nghị TW8: Thành lập Việt Minh',
    },
    {
      id: 4,
      so: '04',
      ten: 'Chuẩn bị lực lượng',
      moc: '1941–1944',
      isActive: false,
      moTa: 'Xây dựng căn cứ và Đội VNTTGPQ',
    },
    {
      id: 5,
      so: '05',
      ten: 'Cao trào kháng Nhật',
      moc: '3–8/1945',
      isActive: false,
      moTa: 'Chỉ thị Nhật – Pháp bắn nhau',
    },
    {
      id: 6,
      so: '06',
      ten: 'Chớp thời cơ',
      moc: '8/1945',
      isActive: false,
      moTa: 'Tổng khởi nghĩa giành chính quyền',
    },
    {
      id: 7,
      so: '07',
      ten: 'Tuyên ngôn Độc lập',
      moc: '2/9/1945',
      isActive: false,
      moTa: 'Nước Việt Nam Dân chủ Cộng hòa ra đời',
    },
  ],

  // 1. HERO COMPOSITION
  hero: {
    cotMoc: 'CỘT MỐC 01',
    namThang: '1930',
    tieuDe: 'ĐẢNG CỘNG SẢN VIỆT NAM RA ĐỜI',
    cauPhu: 'Mùa xuân 1930 – Mở ra con đường cứu nước đúng đắn cho dân tộc Việt Nam.',
    thongDiepCotLoi:
      'Chấm dứt cuộc khủng hoảng sâu sắc về đường lối và giai cấp lãnh đạo, mở đường cho mọi thắng lợi của cách mạng Việt Nam.',
    anhHero: {
      src: '/images/m1-dang-ra-doi.svg',
      nhan: 'HỘI NGHỊ THÀNH LẬP ĐẢNG 1930',
      chuThich:
        'Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long (Hương Cảng, Trung Quốc) do đồng chí Nguyễn Ái Quốc chủ trì (3/2/1930).',
      nguon: 'Viện Lịch sử Đảng & Bảo tàng Lịch sử Quốc gia',
    },
  },

  // 2. VÌ SAO ĐẢNG RA ĐỜI? (2 cột + câu nhấn giữa)
  viSaoThanhLap: {
    tieuDe: 'VÌ SAO ĐẢNG RA ĐỜI?',
    phuDe:
      'Đòi hỏi bức thiết của lịch sử dân tộc trước ách thống trị tàn bạo của thực dân Pháp.',
    cotTrai: {
      tieuDe: 'Khủng hoảng đường lối cứu nước',
      diemChinh: [
        'Các phong trào Cần Vương, Đông Du, Duy Tân, khởi nghĩa Yên Thế... đều lần lượt thất bại.',
        'Giai cấp phong kiến và tư sản dân tộc không đủ khả năng gánh vác sứ mệnh giải phóng non sông.',
        'Dân tộc Việt Nam chìm trong đêm tối, bức thiết đòi hỏi một con đường cứu nước mới.',
      ],
    },
    cotPhai: {
      tieuDe: 'Chủ nghĩa Mác – Lênin truyền bá',
      diemChinh: [
        'Nguyễn Ái Quốc tìm thấy con đường giải phóng dân tộc từ Luận cương của Lênin năm 1920.',
        'Năm 1929, ba tổ chức cộng sản ra đời ở ba miền nhưng hoạt động biệt lập, tranh giành ảnh hưởng.',
        'Yêu cầu sống còn: Phải thống nhất các tổ chức thành một chính đảng duy nhất để quy tụ sức mạnh.',
      ],
    },
    cauNhanGiua: 'Thống nhất tư tưởng và tổ chức → quy tụ sức mạnh toàn dân tộc.',
  },

  // 3. MỐC THEN CHỐT: HỘI NGHỊ THÀNH LẬP ĐẢNG
  mocThenChot: {
    tieuDe: 'MỐC THEN CHỐT: MÙA XUÂN 1930',
    tenSuKien: 'HỘI NGHỊ HỢP NHẤT THÀNH LẬP ĐẢNG CỘNG SẢN VIỆT NAM',
    thongTinCoBan: [
      {
        nhan: 'Thời gian',
        giaTri: '06/01 – 07/02/1930 (lấy ngày 3/2 làm ngày kỷ niệm)',
      },
      {
        nhan: 'Địa điểm',
        giaTri: 'Cửu Long (Hương Cảng, Trung Quốc)',
      },
      {
        nhan: 'Chủ trì',
        giaTri: 'Đồng chí Nguyễn Ái Quốc (đại diện Quốc tế Cộng sản)',
      },
      {
        nhan: 'Thành phần',
        giaTri: 'Đại biểu Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng',
      },
    ],
    anhTuLieu: {
      src: '/images/m1-dang-ra-doi.svg',
      tieuDe: 'Văn kiện thành lập Đảng Cộng sản Việt Nam',
      ghiChu: 'Hợp nhất các tổ chức cộng sản thành một Đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam',
    },
    moTa:
      'Hội nghị đã nhất trí hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam; thông qua Chánh cương vắn tắt, Sách lược vắn tắt do Nguyễn Ái Quốc soạn thảo – Cương lĩnh chính trị đầu tiên của Đảng.',
    videoShorts: {
      coVideo: false,
      youtubeId: '',
      videoTitle: 'Tư liệu Lịch sử: Mùa xuân 1930 – Đảng Cộng sản Việt Nam ra đời',
      nhanNut: 'Xem tư liệu',
      nhanNutPlaceholder: 'Xem tư liệu: Sắp cập nhật',
    },
  },

  // 4. CƯƠNG LĨNH CHÍNH TRỊ ĐẦU TIÊN (2 khối lớn)
  cuongLinhChinhTri: {
    tieuDe: 'NỘI DUNG CƯƠNG LĨNH ĐẦU TIÊN',
    phuDe:
      'Cương lĩnh chính trị sáng tạo kết hợp nhuần nhuyễn chủ nghĩa Mác – Lênin với thực tiễn cách mạng Việt Nam.',
    khoiMucTieu: {
      badge: 'Khối 01',
      tieuDe: 'MỤC TIÊU & NHIỆM VỤ CHIẾN LƯỢC',
      headline: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội',
      cacDiem: [
        {
          tieuDeNho: 'Phương hướng chiến lược',
          moTa: 'Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.',
        },
        {
          tieuDeNho: 'Nhiệm vụ chính trị hàng đầu',
          moTa: 'Đánh đổ đế quốc Pháp và bọn phong kiến, làm cho nước Việt Nam hoàn toàn độc lập.',
        },
        {
          tieuDeNho: 'Xây dựng chế độ mới',
          moTa: 'Thành lập chính phủ công nông binh, tổ chức quân đội công nông để bảo vệ thành quả.',
        },
      ],
      callout: 'Độc lập cho dân tộc, tự do và ruộng đất cho nhân dân.',
    },
    khoiLucLuong: {
      badge: 'Khối 02',
      tieuDe: 'LỰC LƯỢNG & VAI TRÒ LÃNH ĐẠO',
      headline: 'Liên minh công nông là gốc, Đảng là đội tiên phong',
      cacDiem: [
        {
          tieuDeNho: 'Nòng cốt cách mạng',
          moTa: 'Công nhân và nông dân là lực lượng chính, là gốc rễ của cách mạng giải phóng.',
        },
        {
          tieuDeNho: 'Đại đoàn kết toàn dân',
          moTa: 'Hết sức lôi kéo tiểu tư sản, trí thức, trung nông; trung lập phú nông, trung tiểu địa chủ.',
        },
        {
          tieuDeNho: 'Hạt nhân lãnh đạo',
          moTa: 'Đảng là đội tiên phong của vô sản giai cấp, lấy chủ nghĩa Mác – Lênin làm nền tảng kim chỉ nam.',
        },
      ],
      callout: 'Đảng lãnh đạo là nhân tố quyết định mọi thắng lợi của cách mạng.',
    },
  },

  // 5. FLOW "LOGIC RA ĐỜI CỦA ĐẢNG" (6 bước)
  logicRaDoi: {
    tieuDe: 'LOGIC LỊCH SỬ THÀNH LẬP ĐẢNG',
    phuDe:
      'Sự kết hợp biện chứng giữa Chủ nghĩa Mác – Lênin, Phong trào công nhân và Phong trào yêu nước.',
    cacBuoc: [
      {
        buoc: 1,
        tag: 'BẾ TẮC CỨU NƯỚC',
        tenBuoc: 'Phong trào yêu nước cũ lâm vào bế tắc',
        nguyenNhan: 'Các phong trào Cần Vương, Đông Kinh Nghĩa Thục, Yên Bái lần lượt tan vỡ.',
        ketQua: 'Chứng minh hệ tư tưởng phong kiến và tư sản không thể giải phóng dân tộc.',
      },
      {
        buoc: 2,
        tag: 'TÌM THẤY CON ĐƯỜNG',
        tenBuoc: 'Nguyễn Ái Quốc đến với Chủ nghĩa Mác – Lênin',
        nguyenNhan: 'Bôn ba qua nhiều nước, Người đọc Luận cương của Lênin mùa hè 1920.',
        ketQua: 'Khẳng định con đường giải phóng duy nhất: Cách mạng vô sản.',
      },
      {
        buoc: 3,
        tag: 'CHUẨN BỊ TỔ CHỨC',
        tenBuoc: 'Thành lập Hội Việt Nam Cách mạng Thanh niên (1925)',
        nguyenNhan: 'Cần một tổ chức huấn luyện cán bộ và truyền bá lý luận về trong nước.',
        ketQua: 'Đào tạo lớp cán bộ nòng cốt đầu tiên cho phong trào cách mạng cả nước.',
      },
      {
        buoc: 4,
        tag: 'PHÂN HÓA VÀ TRƯỞNG THÀNH',
        tenBuoc: 'Ba tổ chức cộng sản xuất hiện (1929)',
        nguyenNhan: 'Phong trào công nông phát triển mạnh mẽ vượt khỏi khuôn khổ tổ chức cũ.',
        ketQua: 'Đông Dương CS Đảng, An Nam CS Đảng, Đông Dương CS Liên đoàn lần lượt ra đời.',
      },
      {
        buoc: 5,
        tag: 'HỢP NHẤT LỊCH SỬ',
        tenBuoc: 'Hội nghị hợp nhất tại Hương Cảng (3/2/1930)',
        nguyenNhan: 'Nguy cơ chia rẽ nội bộ, Nguyễn Ái Quốc chủ động triệu tập hợp nhất.',
        ketQua: 'Thống nhất thành một chính đảng duy nhất: Đảng Cộng sản Việt Nam.',
      },
      {
        buoc: 6,
        tag: 'KỶ NGUYÊN MỚI',
        tenBuoc: 'Bước ngoặt mở đầu cho Cách mạng Tháng Tám',
        nguyenNhan: 'Cách mạng có ngọn cờ lãnh đạo duy nhất và Cương lĩnh chính trị đúng đắn.',
        ketQua: 'Đặt nền móng xuyên suốt dẫn tới cao trào 1939–1945 và Tổng khởi nghĩa thành công.',
      },
    ],
  },

  // 6. Ý NGHĨA LỊCH SỬ
  yNghia: {
    tieuDe: 'Ý NGHĨA LỊCH SỬ',
    thongDiepLon:
      'Sự ra đời của Đảng Cộng sản Việt Nam mùa xuân 1930 là bước ngoặt vĩ đại của lịch sử dân tộc, chấm dứt cuộc khủng hoảng sâu sắc về đường lối cứu nước, mở đường trực tiếp cho thắng lợi của Cách mạng Tháng Tám 1945.',
    baDiemCotLoi: [
      {
        cauHoi: '1. Chấm dứt khủng hoảng đường lối',
        cauTraLoi:
          'Khẳng định dứt khoát con đường cứu nước duy nhất đúng đắn: Cách mạng giải phóng dân tộc gắn liền với chủ nghĩa xã hội.',
      },
      {
        cauHoi: '2. Thống nhất sức mạnh dân tộc',
        cauTraLoi:
          'Quy tụ giai cấp công nhân, nông dân và các tầng lớp yêu nước dưới sự lãnh đạo của một tổ chức tiên phong duy nhất.',
      },
      {
        cauHoi: '3. Nền tảng cho thắng lợi 1945',
        cauTraLoi:
          'Là bước chuẩn bị quyết định đầu tiên, từ đó Đảng tôi luyện qua các cao trào 1930–1931, 1936–1939 để chuyển hướng chiến lược 1939–1945 giành chính quyền.',
      },
    ],
    timeline: [
      { nam: '1930', giaiDoan: 'Đảng ra đời' },
      { nam: '11/1939', giaiDoan: 'Mở đầu chuyển hướng' },
      { nam: '5/1941', giaiDoan: 'Hoàn chỉnh chuyển hướng' },
      { nam: '8/1945', giaiDoan: 'Tổng khởi nghĩa' },
    ],
    quoteLon:
      'Đảng ra đời là kết quả của sự kết hợp giữa chủ nghĩa Mác – Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.',
    cta: {
      duongDan: '/cot-moc/2',
      nhan: 'Tiếp theo → 11/1939: Mở đầu chuyển hướng chiến lược',
      ghiChu: 'Chuyển sang Cột mốc 02: Hội nghị Trung ương 6 tại Bà Điểm, Hóc Môn',
    },
  },

  // 7. NGUỒN TƯ LIỆU THAM KHẢO
  nguonTuLieu: [
    {
      ten: 'Văn kiện Đảng Toàn tập, Tập 2 (1930 – 1931)',
      nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội',
    },
    {
      ten: 'Hồ Chí Minh Toàn tập, Tập 3',
      nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội',
    },
    {
      ten: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Dành cho bậc đại học)',
      nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội, 2021',
    },
  ],
};
