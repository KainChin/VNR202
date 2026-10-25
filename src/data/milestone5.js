// src/data/milestone5.js
// Dữ liệu Cột mốc 05: 3–8/1945 – CAO TRÀO KHÁNG NHẬT – CHUẨN BỊ THỜI CƠ
// Dự án: Quyết định chiến lược – Chớp thời cơ 1945
// Chuẩn thiết kế: Museum Editorial, dữ liệu lịch sử chuẩn xác theo giáo trình

export default {
  id: 5,
  slug: '5',
  cotMoc: 'CỘT MỐC 05',
  namThang: '3 – 8 / 1945',
  tieuDe: 'CAO TRÀO KHÁNG NHẬT – CHUẨN BỊ THỜI CƠ',
  mau: '#A31621', // Đỏ nâu nồng nhiệt cao trào

  // 1. HERO SECTION
  hero: {
    cotMoc: 'CỘT MỐC 05',
    namThang: '3 – 8 / 1945',
    tieuDe: 'CAO TRÀO KHÁNG NHẬT – CHUẨN BỊ THỜI CƠ',
    cauPhu: 'Nhật đảo chính Pháp – Cách mạng chuyển sang giai đoạn nước rút.',
    thongDiepCotLoi:
      'Kẻ thù thay đổi, khẩu hiệu thay đổi, cả dân tộc được phát động để sẵn sàng cho Tổng khởi nghĩa.',
    anhHero: {
      src: '/images/m5-hy-sinh-vi-to-quoc.png',
      nhan: 'CAO TRÀO KHÁNG NHẬT',
      chuThich:
        'Quần chúng nhân dân và các đội tự vệ cứu quốc sôi sục trong cao trào kháng Nhật chuẩn bị Tổng khởi nghĩa.',
      nguon: 'Viện Lịch sử Quân sự Việt Nam / Bảo tàng Lịch sử Quốc gia',
    },
  },

  // 2. VÌ SAO TÌNH HÌNH THAY ĐỔI? (2 cột + câu nhấn ở giữa)
  viSaoThayDoi: {
    tieuDe: 'VÌ SAO TÌNH HÌNH THAY ĐỔI?',
    phuDe:
      'Đêm 9/3/1945, phát xít Nhật nổ súng đảo chính Pháp trên toàn cõi Đông Dương, làm thay đổi hoàn toàn cục diện chính trị.',
    cotTrai: {
      tieuDe: 'Bối cảnh thế giới – khu vực',
      diemChinh: [
        'Phát xít Nhật đứng trước nguy cơ thất bại trong Chiến tranh thế giới thứ hai.',
        'Mâu thuẫn Nhật – Pháp ở Đông Dương ngày càng gay gắt.',
        'Tối 9/3/1945, Nhật đảo chính, lật đổ chính quyền thực dân Pháp để độc chiếm Đông Dương.',
      ],
    },
    cotPhai: {
      tieuDe: 'Yêu cầu từ thực tiễn trong nước',
      diemChinh: [
        'Cuộc đảo chính gây khủng hoảng chính trị sâu sắc.',
        'Pháp tan rã, kẻ thù trực tiếp của nhân dân ta là phát xít Nhật.',
        'Đảng phải đổi khẩu hiệu và phương thức hành động cho kịp tình hình.',
      ],
    },
    cauNhanGiua: 'Kẻ thù thay đổi → mục tiêu và khẩu hiệu phải thay đổi.',
  },

  // 3. MỐC THEN CHỐT: 9–12/3/1945
  mocThenChot: {
    tieuDe: 'MỐC THEN CHỐT: 9–12/3/1945',
    tenSuKien: 'CHỈ THỊ "NHẬT – PHÁP BẮN NHAU VÀ HÀNH ĐỘNG CỦA CHÚNG TA"',
    thongTinCoBan: [
      {
        nhan: 'Thời gian',
        giaTri: '9–12/3/1945 (Hội nghị mở rộng); chỉ thị ban hành 12/3/1945',
      },
      {
        nhan: 'Địa điểm',
        giaTri: 'Đình Bảng, Từ Sơn, Bắc Ninh',
      },
      {
        nhan: 'Chủ trì',
        giaTri: 'Ban Thường vụ Trung ương Đảng',
      },
    ],
    anhTuLieu: {
      src: '/images/m5-thu-keu-goi-nguyen-ai-quoc.png',
      tieuDe: 'Thư kêu gọi Tổng khởi nghĩa của đồng chí Nguyễn Ái Quốc (8/1945)',
      ghiChu: '“Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta.”',
    },
    moTa:
      'Ngay trong đêm Nhật đảo chính, Ban Thường vụ họp và ra chỉ thị xác định phát xít Nhật là kẻ thù chính, kẻ thù cụ thể trước mắt của nhân dân Đông Dương.',
  },

  // 4. ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO? (2 khối lớn)
  dangDieuChinh: {
    tieuDe: 'ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO?',
    phuDe:
      'Nắm bắt thế trận đảo chính, Trung ương kịp thời chuyển hướng mũi nhọn tiến công và phương thức vận động quần chúng.',
    khoiKeThuKhauHieu: {
      badge: 'Khối 01',
      tieuDe: 'ĐIỀU CHỈNH KẺ THÙ VÀ KHẨU HIỆU',
      headline: 'Xác định phát xít Nhật là kẻ thù chính trước mắt',
      cacDiem: [
        {
          tieuDeNho: 'Xác định rõ kẻ thù duy nhất',
          moTa: 'Thay khẩu hiệu "Đánh đuổi phát xít Nhật – Pháp" bằng "Đánh đuổi phát xít Nhật".',
        },
        {
          tieuDeNho: 'Đề ra mục tiêu chính quyền',
          moTa: 'Đề ra khẩu hiệu thành lập chính quyền cách mạng của nhân dân.',
        },
      ],
      callout: 'Tập trung mũi nhọn vào kẻ thù nguy hiểm nhất lúc này.',
    },
    khoiHinhThucDauTranh: {
      badge: 'Khối 02',
      tieuDe: 'ĐIỀU CHỈNH HÌNH THỨC ĐẤU TRANH',
      headline: 'Phát động cao trào kháng Nhật cứu nước',
      cacDiem: [
        {
          tieuDeNho: 'Đa dạng hóa phương thức hành động',
          moTa: 'Từ bất hợp tác, bãi công, bãi thị đến biểu tình thị uy, vũ trang du kích.',
        },
        {
          tieuDeNho: '15/4/1945 – Thống nhất lực lượng vũ trang',
          moTa: 'Hội nghị quân sự cách mạng Bắc Kỳ thống nhất lực lượng vũ trang thành Việt Nam Giải phóng quân.',
        },
        {
          tieuDeNho: '4/6/1945 – Khu giải phóng Việt Bắc',
          moTa: 'Khu giải phóng Việt Bắc ra đời gồm 6 tỉnh: Cao Bằng, Bắc Kạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên.',
        },
        {
          tieuDeNho: 'Tư thế sẵn sàng khởi nghĩa',
          moTa: 'Chuẩn bị mọi mặt, sẵn sàng chuyển sang Tổng khởi nghĩa khi điều kiện chín muồi.',
        },
      ],
      callout: 'Chưa phải lúc khởi nghĩa, nhưng mọi thứ phải sẵn sàng.',
    },
  },

  // 5. FLOW "LOGIC CHUẨN BỊ THỜI CƠ" (6 bước)
  logicChuanBiThoiCo: {
    tieuDe: 'LOGIC CHUẨN BỊ THỜI CƠ',
    phuDe:
      'Hành trình biện chứng 6 bước từ sự kiện Nhật nổ súng đảo chính đến thế trận sẵn sàng Tổng khởi nghĩa toàn quốc.',
    cacBuoc: [
      {
        buoc: 1,
        tag: 'BƯỚC NGOẶT THẾ CHIẾN',
        tenBuoc: 'Phát xít Nhật đứng trước nguy cơ thất bại',
        nguyenNhan:
          'Phe Đồng minh phản công quyết liệt trên khắp các mặt trận Thái Bình Dương, phát xít Nhật lâm vào thế đường cùng.',
        ketQua:
          'Tạo ra thế bế tắc chiến lược cho quân phiệt Nhật tại Đông Dương, báo hiệu thời cơ lớn của cách mạng sắp xuất hiện.',
      },
      {
        buoc: 2,
        tag: 'ĐẢO CHÍNH ĐÔNG DƯƠNG',
        tenBuoc: 'Nhật đảo chính Pháp (9/3/1945)',
        nguyenNhan:
          'Để trừ mối họa bị quân Pháp đánh úp sau lưng khi Đồng minh đổ bộ, quân Nhật nổ súng lật đổ hoàn toàn chính quyền Pháp.',
        ketQua:
          'Ách thống trị của thực dân Pháp sụp đổ; Đông Dương rơi vào tình trạng khủng hoảng chính trị sâu sắc.',
      },
      {
        buoc: 3,
        tag: 'CHỈ THỊ LỊCH SỬ',
        tenBuoc: 'Chỉ thị 12/3/1945: kẻ thù chính là phát xít Nhật',
        nguyenNhan:
          'Ban Thường vụ Trung ương họp khẩn cấp tại Đình Bảng trong đêm Nhật nổ súng để định vị lại toàn bộ cục diện.',
        ketQua:
          'Xác định rõ kẻ thù trước mắt duy nhất là phát xít Nhật; thay đổi khẩu hiệu và vạch đường đi cho toàn dân.',
      },
      {
        buoc: 4,
        tag: 'PHÁT ĐỘNG TOÀN DÂN',
        tenBuoc: 'Phát động cao trào kháng Nhật cứu nước',
        nguyenNhan:
          'Phong trào phá kho thóc Nhật cứu đói và các cuộc bãi công, bãi thị, vũ trang thị uy bùng lên như sóng cồn.',
        ketQua:
          'Tập hợp và tôi luyện hàng triệu quần chúng nhân dân bước vào tư thế sẵn sàng chiến đấu.',
      },
      {
        buoc: 5,
        tag: 'HỢP LỰC QUÂN SỰ',
        tenBuoc: 'Thống nhất lực lượng vũ trang, mở rộng khu giải phóng',
        nguyenNhan:
          'Hội nghị Quân sự Bắc Kỳ (15/4) hợp nhất các lực lượng thành Việt Nam Giải phóng quân; Khu giải phóng Việt Bắc (4/6) thành lập.',
        ketQua:
          'Xây dựng được căn cứ địa vững chắc và quân đội chủ lực sẵn sàng làm nòng cốt cho cuộc nổi dậy toàn dân.',
      },
      {
        buoc: 6,
        tag: 'THỜI CƠ CHÍN MUỒI',
        tenBuoc: 'Sẵn sàng cho Tổng khởi nghĩa',
        nguyenNhan:
          'Toàn bộ lực lượng chính trị và vũ trang đã được bố trí ở tư thế xung kích tối đa trên khắp cả nước.',
        ketQua:
          'Tạo tiền đề quyết định để Đảng và Chủ tịch Hồ Chí Minh chớp ngay thời cơ ngàn năm có một vào tháng 8/1945.',
      },
    ],
  },

  // 6. Ý NGHĨA LỊCH SỬ & TIẾN TRÌNH
  yNghia: {
    tieuDe: 'Ý NGHĨA LỊCH SỬ',
    thongDiepLon:
      'Cao trào kháng Nhật cứu nước là bước chuẩn bị trực tiếp cho Tổng khởi nghĩa. Sự điều chỉnh kịp thời về kẻ thù, khẩu hiệu và hình thức đấu tranh giúp Đảng nắm chắc thời cơ khi Nhật đầu hàng Đồng minh tháng 8/1945.',
    baDiemCotLoi: [
      {
        cauHoi: '1. Về nhận định kẻ thù',
        cauTraLoi:
          'Kịp thời nhận diện phát xít Nhật là kẻ thù chính trước mắt sau đêm 9/3/1945, tránh rơi vào thế bị động hoặc phân tán lực lượng.',
      },
      {
        cauHoi: '2. Về cao trào quần chúng',
        cauTraLoi:
          'Phong trào "Phá kho thóc Nhật giải quyết nạn đói" đã thổi bùng ngọn lửa cách mạng, gắn giải phóng dân tộc với quyền sống của quần chúng.',
      },
      {
        cauHoi: '3. Về căn cứ & lực lượng',
        cauTraLoi:
          'Thống nhất Việt Nam Giải phóng quân và xây dựng Khu giải phóng Việt Bắc tạo bàn đạp thép để phát lệnh Tổng khởi nghĩa toàn quốc.',
      },
    ],
    timeline: [
      { nam: '9/3/1945', giaiDoan: 'Nhật đảo chính Pháp' },
      { nam: '12/3/1945', giaiDoan: 'Chỉ thị Nhật–Pháp bắn nhau' },
      { nam: '15/4/1945', giaiDoan: 'Thống nhất VN Giải phóng quân' },
      { nam: '8/1945', giaiDoan: 'Chớp thời cơ' },
    ],
    quoteLon:
      'Dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!',
    cta: {
      duongDan: '/cot-moc/6',
      nhan: 'Tiếp theo → 8/1945: Chớp thời cơ, Tổng khởi nghĩa',
      ghiChu: 'Chuyển sang Cột mốc 06: Tổng khởi nghĩa Tháng Tám năm 1945',
    },
  },

  // 7. NGUỒN TƯ LIỆU THAM KHẢO
  nguonTuLieu: [
    {
      ten: 'Văn kiện Đảng Toàn tập, Tập 7 (1940 – 1945)',
      nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội, 2000',
    },
    {
      ten: 'Lịch sử Biên niên Đảng Cộng sản Việt Nam, Tập 2 (1930 – 1945)',
      nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội, 2008',
    },
    {
      ten: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (Dành cho bậc đại học)',
      nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội, 2021',
    },
  ],
};
