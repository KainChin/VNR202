// src/data/milestone1.js
// Dữ liệu Cột mốc 01: Tháng 11/1939 – Chuyển hướng chiến lược
// Nội dung cô đọng, súc tích, chuẩn phong cách trưng bày bảo tàng

export default {
  id: 1,
  slug: '1',
  thoiGian: '11/1939',
  tieuDe: 'CHUYỂN HƯỚNG CHIẾN LƯỢC',
  phuDe: 'Chiến tranh bùng nổ – Cách mạng cần một hướng đi mới.',
  mau: '#8F2418',

  // Chuỗi chiến lược tổng thể (Strategy Rail)
  chuoiChienLuoc: [
    {
      id: 1,
      so: '01',
      ten: 'Chuyển hướng đúng',
      moc: '11/1939',
      isActive: true,
      moTa: 'Hội nghị TW6: Đặt giải phóng dân tộc lên hàng đầu',
    },
    {
      id: 2,
      so: '02',
      ten: 'Chuẩn bị lực lượng',
      moc: '1941–1944',
      isActive: false,
      moTa: 'Thành lập Việt Minh, xây dựng căn cứ và lực lượng vũ trang',
    },
    {
      id: 3,
      so: '03',
      ten: 'Nhận diện thời cơ',
      moc: '3–8/1945',
      isActive: false,
      moTa: 'Cao trào kháng Nhật cứu nước',
    },
    {
      id: 4,
      so: '04',
      ten: 'Chớp thời cơ',
      moc: '8/1945',
      isActive: false,
      moTa: 'Tổng khởi nghĩa giành chính quyền',
    },
    {
      id: 5,
      so: '05',
      ten: 'Thắng lợi',
      moc: '2/9/1945',
      isActive: false,
      moTa: 'Tuyên ngôn Độc lập',
    },
  ],

  // 1. HERO COMPOSITION
  hero: {
    cotMoc: 'CỘT MỐC 01',
    namThang: '11 / 1939',
    tieuDe: 'CHUYỂN HƯỚNG CHIẾN LƯỢC',
    cauPhu: 'Chiến tranh bùng nổ – Cách mạng cần một hướng đi mới.',
    thongDiepCotLoi:
      'Quyết định lịch sử đặt giải phóng dân tộc lên hàng đầu, mở đường cho thắng lợi Cách mạng Tháng Tám 1945.',
    composition: {
      tieuDeAnh: 'Tư liệu lịch sử mùa thu 1939',
      chuThich:
        'Tư liệu mùa thu 1939: Chiến tranh thế giới II bùng nổ, Pháp đàn áp và Hội nghị TW6 tại Bà Điểm (Hóc Môn).',
      nguon: 'Lưu trữ Bảo tàng Lịch sử Quốc gia & Viện Lịch sử Đảng',
      danhSachAnh: [
        {
          src: '/images/m1-ww2.png',
          nhan: 'Chiến tranh thế giới II',
          thoiGian: '01/09/1939',
          chuThich: 'Phát xít Đức tấn công Ba Lan, Thế chiến II bùng nổ',
        },
        {
          src: '/images/m1-phap-dan-ap.png',
          nhan: 'Đông Dương thời chiến',
          thoiGian: 'Mùa thu 1939',
          chuThich: 'Thực dân Pháp tăng cường đàn áp, khủng bố phong trào cách mạng',
        },
        {
          src: '/images/m1-hoi-nghi-tw6.png',
          nhan: 'Hội nghị Trung ương 6',
          thoiGian: '06–08/11/1939',
          chuThich: 'Hội nghị diễn ra bí mật tại Bà Điểm, Hóc Môn, Gia Định',
        },
      ],
    },
  },

  // 2. BỐI CẢNH LỊCH SỬ (3 mốc ngắn gọn)
  boiCanh: {
    tieuDe: 'BỐI CẢNH LỊCH SỬ',
    phuDe: 'Ba biến động dồn dập mùa thu 1939 làm thay đổi cục diện cách mạng.',
    cacMoc: [
      {
        so: '01',
        thoiDiem: '01/09/1939',
        tieuDe: 'Thế chiến II bùng nổ',
        moTa: 'Đức đánh Ba Lan, Pháp tham chiến; chính quyền thuộc địa chuyển sang thời chiến.',
        hinhAnh: '/images/m1-ww2.png',
        chuThich: 'Thế chiến II bùng nổ tại châu Âu',
      },
      {
        so: '02',
        thoiDiem: 'Đông Dương',
        tieuDe: 'Pháp tăng cường đàn áp',
        moTa: 'Thủ tiêu dân chủ, đóng cửa báo chí tiến bộ, lùng sục và bắt bớ cán bộ Đảng.',
        hinhAnh: '/images/m1-phap-dan-ap.png',
        chuThich: 'Khủng bố trắng tại Đông Dương',
      },
      {
        so: '03',
        thoiDiem: '06–08/11/1939',
        tieuDe: 'Hội nghị Trung ương 6',
        moTa: 'Họp khẩn cấp tại Bà Điểm (Hóc Môn), quyết định chuyển hướng chỉ đạo chiến lược.',
        hinhAnh: '/images/m1-hoi-nghi-tw6.png',
        chuThich: 'Hội nghị TW6 tại Bà Điểm, Hóc Môn',
      },
    ],
  },

  // 3. HỘI NGHỊ TRUNG ƯƠNG 6
  hoiNghiTW6: {
    tieuDe: 'HỘI NGHỊ TRUNG ƯƠNG 6',
    thongTinCoBan: [
      { nhan: 'Thời gian', giaTri: '6 – 8/11/1939' },
      { nhan: 'Địa điểm', giaTri: 'Bà Điểm, Hóc Môn, Gia Định' },
      { nhan: 'Chủ trì', giaTri: 'Tổng Bí thư Nguyễn Văn Cừ' },
    ],
    anhTuLieu: [
      {
        src: '/images/m1-nguyen-van-cu.png',
        tieuDe: 'Tổng Bí thư Nguyễn Văn Cừ',
        ghiChu: 'Chủ trì Hội nghị Trung ương 6 (1912 – 1941)',
      },
      {
        src: '/images/m1-badiem-hocmon.png',
        tieuDe: 'Căn cứ Bà Điểm, Hóc Môn',
        ghiChu: 'Địa bàn bí mật che chở cơ quan đầu não của Đảng',
      },
    ],
    quoteBox:
      'Trong bối cảnh chiến tranh và đàn áp gia tăng, Hội nghị Trung ương 6 mở đầu quá trình chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.',
    videoShorts: {
      youtubeId: 'NpzO4gIvrtQ',
      url: 'https://www.youtube.com/shorts/NpzO4gIvrtQ',
      tieuDeModal: 'Tư liệu: Tổng Bí thư Nguyễn Văn Cừ & Hội nghị TW6',
      nhanNut: 'Xem tư liệu',
      chuThich: 'Video tư liệu ngắn về Tổng Bí thư Nguyễn Văn Cừ',
    },
  },

  // 4. FLOW "LOGIC CHUYỂN HƯỚNG" (6 bước cô đọng nhân - quả)
  logicChuyenHuong: {
    tieuDe: 'LOGIC CHUYỂN HƯỚNG CHIẾN LƯỢC',
    phuDe: 'Dòng tư duy nhân – quả giải thích vì sao Đảng bắt buộc phải đổi hướng chỉ đạo',
    cacBuoc: [
      {
        buoc: 1,
        tenBuoc: 'Thế chiến II bùng nổ (01/09/1939)',
        nguyenNhan: 'Pháp tham chiến tại châu Âu.',
        ketQua: 'Chuyển thuộc địa sang cơ chế thời chiến.',
        tag: 'Quốc tế',
      },
      {
        buoc: 2,
        tenBuoc: 'Pháp khủng bố trắng khốc liệt',
        nguyenNhan: 'Thiết lập nền độc tài quân sự.',
        ketQua: 'Thủ tiêu dân chủ, đàn áp gắt gao phong trào cách mạng.',
        tag: 'Đàn áp',
      },
      {
        buoc: 3,
        tenBuoc: 'Mâu thuẫn dân tộc lên đỉnh điểm',
        nguyenNhan: 'Chính sách vơ vét phục vụ chiến tranh.',
        ketQua: 'Giải phóng dân tộc trở thành nhiệm vụ cấp bách số một.',
        tag: 'Mâu thuẫn',
      },
      {
        buoc: 4,
        tenBuoc: 'Đường lối cũ không còn phù hợp',
        nguyenNhan: 'Đấu tranh công khai, đòi dân chủ bị triệt phá.',
        ketQua: 'Tất yếu phải chuyển sang phương thức bí mật.',
        tag: 'Tất yếu',
      },
      {
        buoc: 5,
        tenBuoc: 'Hội nghị TW6 họp tại Bà Điểm',
        nguyenNhan: 'TBT Nguyễn Văn Cừ triệu tập họp khẩn cấp.',
        ketQua: 'Kịp thời đề ra quyết sách chuyển hướng chiến lược.',
        tag: 'Quyết sách',
      },
      {
        buoc: 6,
        tenBuoc: 'Đặt giải phóng dân tộc lên hàng đầu',
        nguyenNhan: 'Quy tụ toàn dân chống đế quốc giành độc lập.',
        ketQua: 'Tạo tiền đề trực tiếp cho thắng lợi Tháng Tám 1945.',
        tag: 'Mục tiêu',
      },
    ],
  },

  // 5. ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO? (2 khối lớn vắn tắt)
  dieuChinhChienLuoc: {
    tieuDe: 'ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO?',
    phuDe: 'Hai quyết sách bản lề thay đổi toàn diện phương hướng và phương pháp cách mạng',
    khoiNhiemVu: {
      tieuDe: 'ĐIỀU CHỈNH VỀ NHIỆM VỤ CHIẾN LƯỢC',
      vaiTro: 'Xác định mục tiêu tối thượng trong thời chiến',
      noiDungChinh: 'Đặt giải phóng dân tộc lên hàng đầu, trên hết và trước hết.',
      cacDiem: [
        {
          tieuDeNho: 'Tập trung chống đế quốc',
          moTa: 'Giành độc lập dân tộc là yêu cầu sống còn và cấp bách nhất.',
        },
        {
          tieuDeNho: 'Tạm gác khẩu hiệu ruộng đất',
          moTa: 'Tập trung đại đoàn kết toàn dân; chỉ tịch thu ruộng đất của đế quốc và phản động.',
        },
        {
          tieuDeNho: 'Lập Mặt trận phản đế',
          moTa: 'Thành lập Mặt trận Dân tộc Thống nhất Phản đế Đông Dương để quy tụ mọi tầng lớp.',
        },
      ],
    },
    khoiHinhThuc: {
      tieuDe: 'ĐIỀU CHỈNH VỀ HÌNH THỨC & PHƯƠNG PHÁP',
      vaiTro: 'Bảo toàn lực lượng và chuẩn bị điều kiện vũ trang',
      noiDungChinh: 'Chuyển trọng tâm sang hoạt động bí mật và bất hợp pháp.',
      cacDiem: [
        {
          tieuDeNho: 'Rút vào hoạt động bí mật',
          moTa: 'Bảo toàn cơ quan đầu não và mạch máu tổ chức Đảng giữa vòng vây khủng bố.',
        },
        {
          tieuDeNho: 'Củng cố căn cứ quần chúng',
          moTa: 'Chuyển trọng tâm về nông thôn và ngoại vi (Bà Điểm, Hóc Môn) làm bàn đạp.',
        },
        {
          tieuDeNho: 'Chuẩn bị khởi nghĩa vũ trang',
          moTa: 'Tích lũy thực lực bí mật để tiến tới bạo lực cách mạng khi thời cơ xuất hiện.',
        },
      ],
    },
  },

  // 6. Ý NGHĨA VÀ TIẾN TRÌNH 1939 – 1945 (3 điểm đúc kết ngắn gọn)
  yNghiaTienTrinh: {
    tieuDe: 'Ý NGHĨA LỊCH SỬ & TIẾN TRÌNH',
    thongDiepLon:
      'Quyết định tháng 11/1939 mở đầu quá trình chuẩn bị đường lối cho thắng lợi năm 1945.',
    cauHoiCotLoi: [
      {
        cauHoi: 'Vì sao chuyển hướng?',
        cauTraLoi:
          'Thế chiến bùng nổ, Pháp đàn áp gắt gao; mâu thuẫn dân tộc lên cao nhất; đấu tranh công khai không còn phù hợp.',
      },
      {
        cauHoi: 'Điều chỉnh thế nào?',
        cauTraLoi:
          'Đặt độc lập dân tộc lên hàng đầu; tạm gác khẩu hiệu ruộng đất; chuyển sang hoạt động bí mật và bất hợp pháp.',
      },
      {
        cauHoi: 'Ý nghĩa với năm 1945?',
        cauTraLoi:
          'Bước mở đầu then chốt, tạo tiền đề để Hội nghị TW8 (5/1941) hoàn chỉnh trọn vẹn đường lối khởi nghĩa thắng lợi.',
      },
    ],
    timeline: [
      { nam: '1939', giaiDoan: 'Khởi đầu', suKien: 'Mở đầu chuyển hướng chiến lược, đặt dân tộc lên hàng đầu.' },
      { nam: '1940', giaiDoan: 'Khẳng định', suKien: 'Hội nghị TW7 tiếp tục khẳng định đường lối chuyển hướng.' },
      { nam: '1941', giaiDoan: 'Hoàn chỉnh', suKien: 'Hội nghị TW8 hoàn chỉnh đường lối, thành lập Việt Minh.' },
      { nam: '1945', giaiDoan: 'Thắng lợi', suKien: 'Tổng khởi nghĩa Tháng Tám thắng lợi trọn vẹn.' },
    ],
    quoteLon: 'Thời cơ không tự đến, thời cơ được chuẩn bị bằng những quyết định đúng.',
    cta: {
      nhan: 'Tiếp theo → 05/1941: Việt Minh ra đời',
      duongDan: '/cot-moc/2',
      ghiChu: 'Cột mốc 02: Hoàn chỉnh chuyển hướng chiến lược tại Pác Bó',
    },
  },

  // 7. NGUỒN TƯ LIỆU THAM KHẢO
  nguonTuLieu: [
    { ten: 'Văn kiện Đảng Toàn tập, Tập 6 (1936–1939)', nhaXuatBan: 'NXB Chính trị quốc gia' },
    { ten: 'Lịch sử Đảng Cộng sản Việt Nam, Tập 1 (1930–1954)', nhaXuatBan: 'NXB CTQG Sự thật' },
    { ten: 'Đồng chí Nguyễn Văn Cừ – Nhà lãnh đạo xuất sắc của Đảng', nhaXuatBan: 'Viện Lịch sử Đảng' },
    { ten: 'Hồ sơ Di tích Địa điểm Họp Hội nghị TW Đảng (11/1939)', nhaXuatBan: 'Hóc Môn, TP.HCM' },
  ],
};
