// src/data/milestone6.js
// Dữ liệu Cột mốc 06: Tháng 8/1945 – CHỚP THỜI CƠ TỔNG KHỞI NGHĨA
// Chuẩn phong cách Museum Editorial cao cấp, tích hợp Speaker Notes & Duration cho Chế độ thuyết trình

export default {
  id: 6,
  slug: '6',
  cotMoc: 'CỘT MỐC 06',
  mau: '#A8541A',
  thoiGian: '8/1945',
  tieuDe: 'CHỚP THỜI CƠ TỔNG KHỞI NGHĨA',
  phuDe: 'Nhật đầu hàng Đồng minh – Lệnh Tổng khởi nghĩa phát động toàn quốc.',

  // 1. HERO COMPOSITION (Slide 1)
  hero: {
    duration: 20,
    notes:
      'Chúng ta đã đi qua năm cột mốc chuẩn bị đường lối, lực lượng và thời cơ từ 11/1939 đến mùa hè 1945. Bây giờ, giờ quyết định của lịch sử đã điểm. Câu hỏi sống còn lúc này là: Đảng có chớp được thời cơ ngàn năm có một hay không?',
    cotMoc: 'CỘT MỐC 06',
    namThang: '08 / 1945',
    tieuDe: 'CHỚP THỜI CƠ TỔNG KHỞI NGHĨA',
    cauPhu: 'Thời cơ ngàn năm có một đã đến – Giờ quyết định cho vận mệnh dân tộc.',
    thongDiepCotLoi:
      'Đảng kịp thời phát lệnh Tổng khởi nghĩa, toàn thể dân tộc đứng lên giành chính quyền trên khắp cả nước chỉ trong 15 ngày vẻ vang.',
    anhHero: {
      src: '/images/m2-luc-luong-khoi-nghia.png',
      nhan: 'Tổng khởi nghĩa Tháng Tám 1945',
      chuThich:
        'Quần chúng nhân dân quật khởi đánh chiếm Bắc Bộ Phủ và các cơ quan đầu não của chính quyền tay sai tại Hà Nội ngày 19/8/1945.',
      nguon: 'Bảo tàng Lịch sử Quốc gia',
    },
  },

  // 2. BỐI CẢNH LỊCH SỬ THÁNG 8/1945 (Slide 2)
  boiCanh: {
    duration: 50,
    notes:
      'Bối cảnh tháng 8/1945: Ngày 15/8/1945, phát xít Nhật tuyên bố đầu hàng Đồng minh không điều kiện. Quân đội Nhật ở Đông Dương hoàn toàn tê liệt ý chí chiến đấu, chính phủ bù nhìn Trần Trọng Kim hoang mang tột độ. Một "khoảng trống quyền lực" lịch sử xuất hiện. Thời cơ này xuất hiện rất nhanh và cũng sẽ qua đi rất nhanh khi quân đội Đồng minh kéo vào giải giáp quân Nhật.',
    tieuDe: 'BỐI CẢNH LỊCH SỬ THÁNG 8/1945',
    phuDe: 'Cục diện thế giới và Đông Dương biến đổi từng giờ – Thời cơ ngàn năm có một xuất hiện.',
    cacMoc: [
      {
        so: '01',
        thoiDiem: '15/08/1945',
        tieuDe: 'Phát xít Nhật đầu hàng Đồng minh',
        moTa:
          'Nhật hoàng tuyên bố đầu hàng không điều kiện. Quân đội viễn chinh Nhật tại Đông Dương rệu rã, tê liệt hoàn toàn ý chí phản kháng.',
        hinhAnh: '/images/m6-nhat-dau-hang.png',
        chuThich: 'Đại diện phát xít Nhật ký văn kiện đầu hàng Đồng minh không điều kiện trên chiến hạm USS Missouri.',
      },
      {
        so: '02',
        thoiDiem: 'Giữa 08/1945',
        tieuDe: 'Khoảng trống quyền lực xuất hiện',
        moTa:
          'Chính quyền tay sai thân Nhật hoang mang cực độ, tan rã từng mảng. Quân Đồng minh chưa kịp vào giải giáp quân đội Nhật.',
        hinhAnh: '/images/m6-quan-chung-khoi-nghia.png',
        chuThich: 'Quần chúng nhân dân cả nước sục sôi tinh thần cách mạng, biểu tình thị uy giành chính quyền.',
      },
      {
        so: '03',
        thoiDiem: 'Cấp bách',
        tieuDe: 'Thời cơ vô cùng ngắn ngủi',
        moTa:
          'Thời cơ chỉ tồn tại từ lúc Nhật đầu hàng cho đến trước khi quân Tưởng và quân Anh-Pháp đổ bộ vào Đông Dương. Chậm trễ là mất thời cơ.',
        hinhAnh: '/images/m6-chien-si-tu-ve.png',
        chuThich: 'Chiến sĩ tự vệ cứu quốc kiên cường chiến đấu, chớp thời cơ giải phóng từng giờ từng phút.',
      },
    ],
  },

  // 3. MỐC THEN CHỐT: HỘI NGHỊ TÂN TRÀO (Slide 3)
  mocThenChot: {
    duration: 45,
    notes:
      'Trước tình thế nước sôi lửa bỏng, Trung ương Đảng họp Hội nghị toàn quốc ngày 14–15/8/1945 tại Tân Trào, quyết định phát động Tổng khởi nghĩa giành chính quyền trước khi quân Đồng minh vào. Liền sau đó, ngày 16–17/8, Đại hội Quốc dân Tân Trào thông qua 10 chính sách lớn của Việt Minh và cử ra Ủy ban Dân tộc Giải phóng do lãnh tụ Hồ Chí Minh làm Chủ tịch.',
    tieuDe: 'MỐC THEN CHỐT: HỘI NGHỊ TÂN TRÀO',
    tenSuKien: 'HỘI NGHỊ TOÀN QUỐC & ĐẠI HỘI QUỐC DÂN TÂN TRÀO (14–17/8/1945)',
    thongTinCoBan: [
      { nhan: 'Thời gian', giaTri: '14 – 17/08/1945' },
      { nhan: 'Địa điểm', giaTri: 'Lán Nà Nưa, Đình Tân Trào (Tuyên Quang)' },
      { nhan: 'Chủ trì', giaTri: 'Lãnh tụ Hồ Chí Minh & Tổng Bí thư Trường Chinh' },
      { nhan: 'Quyết định lớn', giaTri: 'Phát lệnh Tổng khởi nghĩa toàn quốc – Lập Ủy ban Dân tộc Giải phóng' },
    ],
    anhTuLieu: {
      src: '/images/m5-thu-keu-goi-nguyen-ai-quoc.png',
      tieuDe: 'Thư kêu gọi Tổng khởi nghĩa của Hồ Chí Minh (8/1945)',
      ghiChu:
        '“Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta!”',
    },
    moTa:
      'Quyết sách sống còn: Kịp thời phát động khởi nghĩa giành chính quyền trước khi quân Đồng minh tiến vào Đông Dương tước khí giới phát xít Nhật.',
    videoShorts: {
      coVideo: true,
      youtubeId: 'BdDvaprN--4',
      url: 'https://www.youtube.com/shorts/BdDvaprN--4',
      videoTitle: 'Tổng khởi nghĩa Tháng Tám năm 1945',
      tieuDeModal: 'Tổng khởi nghĩa Tháng Tám năm 1945',
      nhanTag: 'TƯ LIỆU LỊCH SỬ',
      chuThich:
        'Phim tư liệu về khí thế ngút trời của ngày Tổng khởi nghĩa mùa thu lịch sử 1945 giành độc lập cho Tổ quốc.',
      tenNguon: 'Truyền hình Nhân Dân',
      nhanNut: 'Xem tư liệu',
      nhanNutPlaceholder: 'Xem tư liệu: Sắp cập nhật',
    },
  },

  // 4. HÀNH ĐỘNG ĐỒNG LOẠT: 15 NGÀY THẦN TỐC (Slide 4)
  dieuChinh: {
    duration: 70,
    notes:
      'Quyết định chuyển hướng sang tổng tiến công thần tốc và hành động quật khởi đồng loạt của toàn dân: Dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh, từ ngày 14/8 các địa phương đã chủ động nổi dậy. Ngày 19/8, khởi nghĩa thắng lợi rực rỡ tại Hà Nội. Tiếp đó ngày 23/8 tại Huế và ngày 25/8 tại Sài Gòn. Chỉ trong 15 ngày, toàn thể dân tộc đã đập tan ách thống trị thực dân phát xít.',
    tieuDe: 'HÀNH ĐỘNG ĐỒNG LOẠT: 15 NGÀY THẦN TỐC',
    phuDe: 'Khởi nghĩa thắng lợi giòn giã tại 3 đô thị đầu não làm sụp đổ hoàn toàn chế độ phong kiến thực dân',
    khoiNhiemVu: {
      tieuDe: 'BA THẮNG LỢI ĐẦU NÃO QUYẾT ĐỊNH',
      vaiTro: 'Hiệu ứng domino làm tan rã toàn bộ chính quyền tay sai trên cả nước',
      noiDungChinh: 'Hà Nội (19/8) – Huế (23/8) – Sài Gòn (25/8)',
      cacDiem: [
        {
          tieuDeNho: '19/8: Thắng lợi rực rỡ tại Hà Nội',
          moTa:
            'Hàng chục vạn quần chúng chiếm Phủ Khâm sai, Tòa Thị chính, Trại Bảo an binh; cổ vũ cả nước tiến lên.',
        },
        {
          tieuDeNho: '23/8: Thắng lợi tại Cố đô Huế',
          moTa:
            'Đập tan trung tâm đầu não chế độ phong kiến nhà Nguyễn; buộc triều đình tay sai phải hạ vũ khí.',
        },
        {
          tieuDeNho: '25/8: Khởi nghĩa thắng lợi tại Sài Gòn',
          moTa:
            'Hơn một triệu đồng bào Nam Bộ quật khởi biểu tình vũ trang giành toàn bộ quyền làm chủ Nam Bộ.',
        },
      ],
    },
    khoiHinhThuc: {
      tieuDe: 'NGHỆ THUẬT CHỈ ĐẠO KHỞI NGHĨA',
      vaiTro: 'Sự kết hợp hoàn hảo giữa lực lượng chính trị và lực lượng vũ trang',
      noiDungChinh: 'Chủ động, linh hoạt, chớp đúng thời cơ từng địa phương',
      cacDiem: [
        {
          tieuDeNho: 'Chủ động đón thời cơ',
          moTa: 'Nhiều địa phương (Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam) khởi nghĩa giành thắng lợi ngay từ 18/8.',
        },
        {
          tieuDeNho: 'Lực lượng chính trị làm nòng cốt',
          moTa: 'Sử dụng sức mạnh áp đảo của quần chúng nhân dân kết hợp lực lượng vũ trang tự vệ làm hậu thuẫn.',
        },
        {
          tieuDeNho: 'Thần tốc và trọn vẹn',
          moTa: 'Chính quyền về tay nhân dân chỉ trong vòng 15 ngày (14/8 đến 28/8/1945), hầu như không đổ máu.',
        },
      ],
    },
  },

  // 5. LOGIC CHỚP THỜI CƠ 6 BƯỚC (Slide 5)
  logicChienLuoc: {
    duration: 30,
    notes:
      'Sáu bước logic thời cơ: Từ lúc Nhật đầu hàng Đồng minh (15/8) -> Hội nghị Tân Trào ra lệnh khởi nghĩa -> Quần chúng cả nước đồng loạt vùng lên -> Giành chính quyền ở 3 thành phố lớn -> Vua Bảo Đại thoái vị ngày 30/8 -> Đưa đến sự kiện vĩ đại Tuyên ngôn Độc lập ngày 2/9/1945.',
    tieuDe: 'LOGIC CHỚP THỜI CƠ 6 BƯỚC',
    phuDe: 'Tiến trình liên hoàn từ thời cơ xuất hiện đến thắng lợi trọn vẹn của Tổng khởi nghĩa Tháng Tám 1945',
    cacBuoc: [
      {
        buoc: 1,
        tenBuoc: 'Phát xít Nhật đầu hàng (15/8)',
        nguyenNhan: 'Quân Đồng minh đánh bại phát xít.',
        ketQua: 'Xuất hiện khoảng trống quyền lực lịch sử.',
        tag: 'Thời cơ',
      },
      {
        buoc: 2,
        tenBuoc: 'Hạ lệnh Tổng khởi nghĩa (16/8)',
        nguyenNhan: 'Đại hội Quốc dân Tân Trào nhóm họp.',
        ketQua: 'Ủy ban Dân tộc Giải phóng ban Quân lệnh số 1.',
        tag: 'Quyết định',
      },
      {
        buoc: 3,
        tenBuoc: 'Quần chúng cả nước quật khởi',
        nguyenNhan: 'Khối đại đoàn kết Việt Minh vùng lên.',
        ketQua: 'Đánh chiếm cơ quan đầu não tay sai khắp các tỉnh.',
        tag: 'Hành động',
      },
      {
        buoc: 4,
        tenBuoc: 'Thắng lợi 3 đô thị (19–25/8)',
        nguyenNhan: 'Hà Nội, Huế, Sài Gòn giành chính quyền.',
        ketQua: 'Cục diện cách mạng hoàn toàn thắng lợi.',
        tag: 'Đột phá',
      },
      {
        buoc: 5,
        tenBuoc: 'Chế độ phong kiến chấm dứt (30/8)',
        nguyenNhan: 'Vua Bảo Đại nộp ấn kiếm thoái vị.',
        ketQua: 'Chấm dứt hàng ngàn năm phong kiến quân chủ.',
        tag: 'Cột mốc',
      },
      {
        buoc: 6,
        tenBuoc: 'Nước Việt Nam Dân chủ ra đời (2/9)',
        nguyenNhan: 'Chính quyền toàn quốc thuộc về nhân dân.',
        ketQua: 'Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình.',
        tag: 'Thắng lợi',
      },
    ],
  },

  // 6. Ý NGHĨA VÀ TIẾN TRÌNH LỊCH SỬ (Slide 6)
  yNghia: {
    duration: 45,
    notes:
      'Đúc kết toàn bộ hành trình cách mạng từ 11/1939 đến 8/1945: Quyết định chuyển hướng đúng đắn tại TW6 (1939) -> Hoàn chỉnh đường lối và lập Việt Minh tại TW8 (1941) -> Tích lũy thực lực và chớp thời cơ (1945) đã đưa Cách mạng Tháng Tám đến thắng lợi vĩ đại.',
    tieuDe: 'Ý NGHĨA LỊCH SỬ & ĐÚC KẾT TIẾN TRÌNH',
    thongDiepLon:
      'Chuyển hướng đúng (1939) → Chuẩn bị lực lượng (1941–1944) → Chớp thời cơ (1945) → Thắng lợi hoàn toàn.',
    baDiemCotLoi: [
      {
        cauHoi: '1. Nghệ thuật chớp thời cơ?',
        cauTraLoi:
          'Đảng dự báo chính xác tình hình, chuẩn bị sẵn sàng thực lực và ra quyết định Tổng khởi nghĩa kịp thời trong khoảng thời gian vàng.',
      },
      {
        cauHoi: '2. Tầm vóc lịch sử?',
        cauTraLoi:
          'Đập tan xiềng xích thực dân gần một thế kỷ và chế độ phong kiến hàng ngàn năm, đưa dân tộc Việt Nam bước vào kỷ nguyên độc lập, tự do.',
      },
      {
        cauHoi: '3. Bài học về chuyển hướng?',
        cauTraLoi:
          'Khẳng định sự đúng đắn tuyệt đối của quyết định đặt giải phóng dân tộc lên hàng đầu từ Hội nghị TW6 (1939) và TW8 (1941).',
      },
    ],
    timeline: [
      { nam: '11/1939', giaiDoan: 'Mở đầu chuyển hướng', suKien: 'Hội nghị TW6 đặt giải phóng dân tộc lên hàng đầu.' },
      { nam: '05/1941', giaiDoan: 'Hoàn chỉnh đường lối', suKien: 'Hội nghị TW8 thành lập Mặt trận Việt Minh.' },
      { nam: '1941–1944', giaiDoan: 'Xây dựng lực lượng', suKien: 'Thành lập Đội VN Tuyên truyền Giải phóng quân.' },
      { nam: '08/1945', giaiDoan: 'Tổng khởi nghĩa', suKien: 'Chớp thời cơ giành chính quyền trọn vẹn cả nước.' },
    ],
    quoteLon:
      'Cách mạng Tháng Tám năm 1945 là một trong những trang sử vẻ vang nhất, chói lọi nhất của lịch sử dựng nước và giữ nước của dân tộc Việt Nam.',
    cta: {
      duongDan: '/cot-moc/7',
      nhan: 'Tiếp theo → 2/9/1945: Tuyên ngôn Độc lập',
      ghiChu: 'Cột mốc 07: Ngày hội non sông tại Quảng trường Ba Đình lịch sử',
    },
    nguonTuLieu: [
      {
        ten: 'Văn kiện Đảng Toàn tập, Tập 7 (1940 – 1945)',
        nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội',
      },
      {
        ten: 'Lịch sử Biên niên Đảng Cộng sản Việt Nam, Tập 2 (1930 – 1945)',
        nxb: 'NXB Chính trị quốc gia Sự thật',
      },
      {
        ten: 'Cách mạng Tháng Tám 1945 – Thắng lợi của nghệ thuật chớp thời cơ',
        nxb: 'Viện Lịch sử Quân sự Việt Nam',
      },
    ],
  },
};
