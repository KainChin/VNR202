// src/data/milestone7.js
// Dữ liệu Cột mốc 07: 2/9/1945 – TUYÊN NGÔN ĐỘC LẬP
// Khai sinh nước Việt Nam Dân chủ Cộng hòa – Đích đến của toàn bộ hành trình 1930–1945

export default {
  id: 7,
  slug: '7',
  cotMoc: 'CỘT MỐC 07',
  thoiGian: '2/9/1945',
  tieuDe: 'TUYÊN NGÔN ĐỘC LẬP',
  phuDe: 'Từ thân phận thuộc địa đến một nước độc lập, tự do.',
  mau: '#C98F10',

  // 1. HERO SECTION
  hero: {
    duration: 20,
    notes: 'Điểm đến của toàn bộ hành trình cách mạng từ 1930 đến 1945.',
    cotMoc: 'CỘT MỐC 07',
    namThang: '2 / 9 / 1945',
    tieuDe: 'TUYÊN NGÔN ĐỘC LẬP',
    cauPhu: 'Từ thân phận thuộc địa đến một nước độc lập, tự do.',
    thongDiepCotLoi:
      'Điểm đến của hành trình: Chuyển hướng đúng → Chuẩn bị lực lượng → Nhận diện thời cơ → Chớp thời cơ → Thắng lợi.',
    anhHero: {
      src: '/images/m7-bac-ho-tuyen-ngon-doc-lap.png',
      nhan: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập',
      chuThich:
        'Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình (Hà Nội), ngày 2/9/1945.',
      nguon: 'Bảo tàng Lịch sử Quốc gia / TTXVN',
    },
  },

  // 2. SECTION "VÌ SAO CÓ TUYÊN NGÔN ĐỘC LẬP?"
  viSaoCoTuyenNgon: {
    duration: 45,
    notes:
      'Sau thắng lợi của Tổng khởi nghĩa cả nước, việc ban bố văn kiện lịch sử tuyên bố độc lập trước thế giới là yêu cầu cấp thiết của thời đại.',
    tieuDe: 'VÌ SAO CÓ TUYÊN NGÔN ĐỘC LẬP?',
    phuDe:
      'Từ thắng lợi của Tổng khởi nghĩa Tháng Tám đến sự ra đời tất yếu của bản Tuyên ngôn lịch sử.',
    cotTrai: {
      tieuDe: 'Từ thắng lợi của Tổng khởi nghĩa',
      diemChinh: [
        'Cuối tháng 8/1945, chính quyền cách mạng được thiết lập trên cả nước.',
        'Chế độ thực dân và phong kiến bị lật đổ.',
        'Cần một văn kiện khai sinh nhà nước mới và khẳng định chủ quyền trước thế giới.',
      ],
    },
    cotPhai: {
      tieuDe: 'Yêu cầu của lịch sử',
      diemChinh: [
        'Ngày 2/9/1945, nhân dân Hà Nội và các vùng lân cận tập trung tại Ba Đình để chứng kiến sự kiện.',
        'Công bố quyền độc lập, tự do của dân tộc trước quốc dân và nhân loại.',
        'Ra mắt Chính phủ lâm thời của nước mới.',
      ],
    },
    cauNhanGiua: 'Giành được chính quyền → phải tuyên bố với thế giới.',
  },

  // 3. SECTION "MỐC THEN CHỐT: BA ĐÌNH, 2/9/1945"
  mocThenChot: {
    duration: 50,
    notes:
      'Ngày 2/9/1945 tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    tieuDe: 'MỐC THEN CHỐT: BA ĐÌNH, 2/9/1945',
    tenSuKien: 'LỄ ĐỘC LẬP TẠI QUẢNG TRƯỜNG BA ĐÌNH',
    thongTinCoBan: [
      { nhan: 'Thời gian', giaTri: '14h00 · 02/09/1945', icon: '📅' },
      { nhan: 'Địa điểm', giaTri: 'Quảng trường Ba Đình, Hà Nội', icon: '📍' },
      { nhan: 'Người đọc', giaTri: 'Chủ tịch Hồ Chí Minh', icon: '🎙️' },
    ],
    moTa:
      'Trước hơn 50 vạn đồng bào rợp bóng cờ đỏ sao vàng, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời trang nghiêm đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa và tuyên bố trước toàn thế giới quyền tự do, độc lập thiêng liêng của dân tộc.',
    anhTuLieu: {
      src: '/images/m7-ban-tuyen-ngon-doc-lap.png',
      tieuDe: 'Bản Tuyên Ngôn Độc Lập (02/09/1945)',
      ghiChu:
        'Ấn bản gốc Tuyên ngôn Độc lập công bố ngày 2/9/1945, văn kiện lập quốc bất hủ của dân tộc Việt Nam.',
      nguon: 'Bảo tàng Lịch sử Quốc gia',
    },
    // VideoModal: Phim tư liệu YouTube Shorts về Tuyên ngôn Độc lập 2/9/1945
    videoData: {
      youtubeId: '5xfdvLfqSPA',
      url: 'https://www.youtube.com/shorts/5xfdvLfqSPA',
      videoTitle: 'Tuyên Ngôn Độc Lập – 02/09/1945',
      tieuDeModal: 'Tuyên Ngôn Độc Lập (2/9/1945)',
      nhanTag: 'TƯ LIỆU LỊCH SỬ',
      chuThich:
        'Thước phim tư liệu lịch sử ghi lại thời khắc thiêng liêng Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      tenNguon: 'YouTube Shorts',
      nguon: 'Phim tư liệu lịch sử',
      aspectRatio: '9/16',
      isShorts: true,
    },
  },

  // 4. SECTION "TUYÊN NGÔN ĐỘC LẬP TUYÊN BỐ ĐIỀU GÌ?" (2 khối lớn)
  noiDungTuyenNgon: {
    duration: 70,
    notes:
      'Hai nội dung lớn đanh thép: Tuyên bố chấm dứt chế độ thực dân và Khẳng định quyền độc lập tự do thiêng liêng.',
    tieuDe: 'TUYÊN NGÔN ĐỘC LẬP TUYÊN BỐ ĐIỀU GÌ?',
    phuDe: 'Hai nội dung đanh thép khẳng định quyền thiêng liêng của dân tộc Việt Nam.',
    khoi1: {
      tieuDeChinh: 'TUYÊN BỐ CHẤM DỨT CHẾ ĐỘ THUỘC ĐỊA',
      tieuDePhu: 'Xóa bỏ ách thống trị thực dân và phát xít',
      noiDung: [
        'Vạch trần tội ác của thực dân Pháp và phát xít Nhật đối với nhân dân ta suốt hơn 80 năm qua.',
        'Tuyên bố xóa bỏ hoàn toàn mọi quan hệ thực dân với Pháp, hủy bỏ tất cả hiệp ước Pháp đã ký.',
        'Khẳng định quyền tự quyết của một dân tộc đã quật cường tự đứng lên giành lấy độc lập.',
      ],
      callout: '“Một dân tộc bị nô lệ gần một thế kỷ đã tự giải phóng.”',
    },
    khoi2: {
      tieuDeChinh: 'KHẲNG ĐỊNH QUYỀN ĐỘC LẬP, TỰ DO',
      tieuDePhu: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa',
      noiDung: [
        'Dẫn chứng Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền của Pháp (1791) làm điểm tựa pháp lý quốc tế.',
        'Khẳng định quyền con người gắn liền với quyền dân tộc: bình đẳng, tự do và mưu cầu hạnh phúc.',
        'Tuyên bố đanh thép: Nước Việt Nam có quyền hưởng tự do, độc lập và thực sự đã là một nước tự do, độc lập.',
      ],
      callout: '“Từ ngày này, nhân dân Việt Nam làm chủ vận mệnh đất nước.”',
    },
  },

  // 5. SECTION "KHOẢNH KHẮC LỊCH SỬ TẠI QUẢNG TRƯỜNG BA ĐÌNH"
  // Thay thế hoàn toàn phần tóm tắt 6 bước cũ theo yêu cầu người dùng
  khoanhKhacBaDinh: {
    duration: 60,
    notes:
      'Khoảnh khắc lịch sử tại Quảng trường Ba Đình chiều 2/9/1945 và ba tầm vóc thời đại của bản Tuyên ngôn Độc lập.',
    tieuDe: 'TIẾNG VỌNG BA ĐÌNH & LỜI THỀ ĐỘC LẬP',
    phuDe:
      'Thời khắc thiêng liêng gắn kết triệu trái tim người Việt và ba giá trị lịch sử khai sinh thời đại mới.',
    cauHoiLichSu: {
      cauHoi: 'Tôi nói đồng bào nghe rõ không?',
      nguoiNoi: 'Chủ tịch Hồ Chí Minh',
      cauTraLoi: 'CÓ! CÓ! CÓ!',
      nguoiTraLoi: 'Hơn 50 vạn đồng bào tại Ba Đình',
      yNghia:
        'Giữa không khí trang nghiêm, câu hỏi giản dị, ấm áp của Người đã xóa nhòa mọi khoảng cách giữa lãnh tụ với nhân dân. Cả biển người vỡ òa đồng thanh, triệu trái tim hòa chung một nhịp đập tự do độc lập.',
    },
    tamVocLichSu: [
      {
        soLaMa: 'I',
        tieuDe: 'Khai sinh Nhà nước mới',
        noiDung:
          'Khai sinh nước Việt Nam Dân chủ Cộng hòa – Nhà nước công nông đầu tiên ở Đông Nam Á, xác lập quyền làm chủ tối cao của nhân dân.',
        icon: '🏛️',
      },
      {
        soLaMa: 'II',
        tieuDe: 'Đập tan ách thực dân & phát xít',
        noiDung:
          'Chấm dứt hơn 80 năm áp bức đô hộ của thực dân Pháp và phát xít Nhật, đưa dân tộc Việt Nam bước sang kỷ nguyên tự chủ.',
        icon: '⚔️',
      },
      {
        soLaMa: 'III',
        tieuDe: 'Lật đổ chế độ phong kiến ngàn năm',
        noiDung:
          'Xóa bỏ hoàn toàn chế độ quân chủ phong kiến hàng nghìn năm, mở ra kỷ nguyên Độc lập Dân tộc gắn liền với Chủ nghĩa Xã hội.',
        icon: '👑',
      },
    ],
    loiTheDocLap: {
      tieuDe: 'LỜI THỀ ĐỘC LẬP BẤT TỬ',
      trichDan:
        'Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy!',
      xacNhan: 'Lời tuyên thệ sắt đá của Chủ tịch Hồ Chí Minh và toàn thể dân tộc Việt Nam',
    },
  },

  // 6. Ý NGHĨA & 4 BÀI HỌC & DÒNG KẾT
  yNghiaTongKet: {
    duration: 55,
    notes:
      'Ý nghĩa lịch sử toàn diện và 4 bài học cốt lõi kết tinh từ toàn bộ tiến trình lịch sử 1930 - 1945.',
    tieuDe: 'Ý NGHĨA LỊCH SỬ & BÀI HỌC THỜI ĐẠI',
    thongDiepLon:
      'Tuyên ngôn Độc lập đánh dấu thắng lợi trọn vẹn của Cách mạng Tháng Tám, kết quả của một hành trình dài: chuyển hướng đúng, chuẩn bị lực lượng bền bỉ, nhận diện đúng thời cơ và chớp thời cơ kịp thời. Ngày 2/9/1945 mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam.',
    bonBaiHoc: [
      'Giương cao ngọn cờ độc lập dân tộc',
      'Xây dựng khối đại đoàn kết toàn dân',
      'Chuẩn bị lâu dài, chớp thời cơ kịp thời',
      'Xây dựng Đảng vững mạnh, đường lối đúng đắn',
    ],
    dongKetToanTrang: [
      'Chuyển hướng đúng',
      'Chuẩn bị lực lượng',
      'Nhận diện thời cơ',
      'Chớp thời cơ',
      'Thắng lợi',
    ],
    cta: {
      nhan: '← Xem lại hành trình',
      duongDan: '/',
      ghiChu: 'Quay về trang poster bản đồ chiến lược 1945',
    },
    nguonTuLieu: [
      {
        ten: 'Hồ Chí Minh Toàn tập, Tập 4 (1945–1946)',
        nxb: 'NXB Chính trị quốc gia Sự thật, Hà Nội',
      },
      {
        ten: 'Văn kiện Đảng Toàn tập, Tập 7 (1940–1945)',
        nxb: 'NXB Chính trị quốc gia',
      },
      {
        ten: 'Lịch sử Biên niên Đảng Cộng sản Việt Nam, Tập 2 (1930–1945)',
        nxb: 'NXB Chính trị quốc gia Sự thật',
      },
      {
        ten: 'Hồ sơ Di tích lịch sử Quảng trường Ba Đình',
        nxb: 'Bảo tàng Lịch sử Quốc gia',
      },
    ],
  },
};
