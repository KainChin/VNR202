// src/data/milestone4.js
// Dữ liệu Cột mốc 04: 1941–1944 – XÂY DỰNG LỰC LƯỢNG
// Phong cách: Historical Editorial + Museum Website cao cấp

export default {
  id: 4,
  slug: '4',
  thoiGian: '1941–1944',
  tieuDe: 'XÂY DỰNG LỰC LƯỢNG',
  phuDe: 'Đường lối đã rõ – Cách mạng cần lực lượng đủ mạnh để chớp thời cơ.',
  mau: '#8F2418',

  // 1. HERO COMPOSITION
  hero: {
    cotMoc: 'CỘT MỐC 04',
    namThang: '1941 – 1944',
    tieuDe: 'XÂY DỰNG LỰC LƯỢNG',
    cauPhu: 'Đường lối đã rõ – Cách mạng cần lực lượng đủ mạnh để chớp thời cơ.',
    thongDiepCotLoi:
      'Ba năm bền bỉ chuẩn bị, từ cơ sở chính trị trong quần chúng đến lực lượng vũ trang đầu tiên.',
    anhHero: {
      src: '/images/m2-luc-luong-khoi-nghia.png',
      nhan: '1941–1944: Lực lượng vũ trang & Căn cứ Việt Bắc',
      chuThich:
        'Hình ảnh các chiến sĩ tự vệ, du kích và lực lượng vũ trang nhân dân thời kỳ 1941–1944 tại căn cứ địa Việt Bắc.',
      nguon: 'Bảo tàng Lịch sử Quân sự Việt Nam & Viện Lịch sử Đảng',
    },
  },

  // 2. VÌ SAO PHẢI XÂY DỰNG LỰC LƯỢNG? (2 cột + câu nhấn ở giữa)
  viSaoXayDung: {
    tieuDe: 'VÌ SAO PHẢI XÂY DỰNG LỰC LƯỢNG?',
    phuDe:
      'Đường lối dù đúng đắn đến đâu cũng không thể tự biến thành hiện thực nếu thiếu đi thực lực cách mạng đủ sức đánh đổ ách thống trị của phát xít Pháp – Nhật.',
    cauNhanGiua: 'Đường lối đã đúng → phải có lực lượng để thực hiện.',
    cotTrai: {
      tieuDe: 'Tiền đề từ đường lối',
      diemChinh: [
        'Hội nghị Trung ương 8 (5/1941) hoàn chỉnh chủ trương chuyển hướng, đặt giải phóng dân tộc lên hàng đầu.',
        'Mặt trận Việt Minh ra đời (19/5/1941) để tập hợp mọi lực lượng yêu nước.',
        'Khởi nghĩa vũ trang chỉ thành công khi có lực lượng chính trị và vũ trang đủ sức.',
      ],
    },
    cotPhai: {
      tieuDe: 'Yêu cầu từ thực tiễn',
      diemChinh: [
        'Phát xít Nhật và thực dân Pháp cùng bóc lột, đàn áp nhân dân ta.',
        'Thời cơ chưa chín, cần kiên trì chuẩn bị lâu dài.',
        'Phải có căn cứ địa và lực lượng sẵn sàng khi thời cơ đến.',
      ],
    },
  },

  // 3. MỐC THEN CHỐT: 22/12/1944
  mocThenChot: {
    tieuDe: 'MỐC THEN CHỐT: 22/12/1944',
    tenSuKien: 'ĐỘI VIỆT NAM TUYÊN TRUYỀN GIẢI PHÓNG QUÂN',
    thongTinCoBan: [
      { nhan: 'Thời gian', giaTri: '22/12/1944' },
      {
        nhan: 'Địa điểm',
        giaTri: 'Khu rừng giữa hai tổng Hoàng Hoa Thám và Trần Hưng Đạo, châu Nguyên Bình, Cao Bằng',
      },
      {
        nhan: 'Chỉ huy',
        giaTri: 'Võ Nguyên Giáp (Đội trưởng Hoàng Sâm, Chính trị viên Xích Thắng)',
      },
    ],
    anhTuLieu: {
      src: '/images/m2-doi-du-kich.svg',
      tieuDe: 'Đội Việt Nam Tuyên truyền Giải phóng quân',
      ghiChu: 'Lễ thành lập Đội tại khu rừng Trần Hưng Đạo, Cao Bằng (22/12/1944)',
    },
    moTa:
      'Theo chỉ thị của lãnh tụ Hồ Chí Minh, Đội gồm 34 chiến sĩ, biên chế 3 tiểu đội, có chi bộ Đảng lãnh đạo. Tên Đội thể hiện nguyên tắc chính trị trọng hơn quân sự.',
    videoShorts: {
      coVideo: true,
      youtubeId: 'cQZfp0JiySY',
      url: 'https://www.youtube.com/shorts/cQZfp0JiySY',
      videoTitle: 'Kỉ Niệm Ngày Đội Việt Nam Tuyên Truyền Giải Phóng Quân Được Thành Lập (22/12/1944)',
      tieuDeModal: 'Kỉ Niệm Ngày Đội Việt Nam Tuyên Truyền Giải Phóng Quân Được Thành Lập (22/12/1944)',
      chuThich: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân, Cao Bằng',
      tenNguon: '',
      nhanNut: 'Xem tư liệu',
    },
  },

  // 4. ĐẢNG XÂY DỰNG LỰC LƯỢNG NHƯ THẾ NÀO? (2 khối lớn)
  dangXayDung: {
    tieuDe: 'ĐẢNG XÂY DỰNG LỰC LƯỢNG NHƯ THẾ NÀO?',
    phuDe:
      'Hai mũi nhọn song hành: Lấy lực lượng chính trị quần chúng làm gốc rễ, lấy lực lượng vũ trang làm nòng cốt xung kích.',
    khoiChinhTri: {
      badge: 'Mũi nhọn 01',
      tieuDe: 'XÂY DỰNG LỰC LƯỢNG CHÍNH TRỊ',
      headline: 'Dựa vào quần chúng, xây nền từ cơ sở',
      cacDiem: [
        {
          tieuDeNho: 'Phát triển các tổ chức cứu quốc',
          moTa: 'Tập hợp các tầng lớp nhân dân vào Hội Nông dân cứu quốc, Phụ nữ cứu quốc, Thanh niên cứu quốc trong Mặt trận Việt Minh.',
        },
        {
          tieuDeNho: 'Xây dựng lực lượng chính trị quần chúng',
          moTa: 'Giác ngộ và rèn luyện đội ngũ quần chúng cách mạng đông đảo, tạo thành khối đoàn kết toàn dân bền chặt.',
        },
        {
          tieuDeNho: 'Xây dựng căn cứ địa cách mạng',
          moTa: 'Xây dựng và củng cố vững chắc hai căn cứ địa lớn Bắc Sơn – Võ Nhai và Cao Bằng, hình thành liên hoàn chiến khu.',
        },
      ],
      callout: 'Lực lượng chính trị là gốc rễ của khởi nghĩa.',
    },
    khoiVuTrang: {
      badge: 'Mũi nhọn 02',
      tieuDe: 'XÂY DỰNG LỰC LƯỢNG VŨ TRANG',
      headline: 'Từ du kích đến đội quân chủ lực đầu tiên',
      cacDiem: [
        {
          tieuDeNho: 'Tháng 11/1941: Đội du kích Pác Bó',
          moTa: 'Đội du kích Pác Bó ra đời gồm 12 người do đồng chí Lê Quảng Ba làm đội trưởng.',
        },
        {
          tieuDeNho: 'Phát triển lực lượng du kích',
          moTa: 'Phát triển các đội du kích, đội tự vệ và vũ trang tuyên truyền trên khắp các vùng căn cứ.',
        },
        {
          tieuDeNho: '22/12/1944: Thành lập Đội VNTTGPQ',
          moTa: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân gồm 34 chiến sĩ tại Cao Bằng.',
        },
        {
          tieuDeNho: 'Cuối 12/1944: Thắng trận Phai Khắt, Nà Ngần',
          moTa: 'Hạ hai đồn địch liên tiếp, mở đầu truyền thống quyết chiến quyết thắng của Quân đội nhân dân Việt Nam.',
        },
      ],
      callout: 'Chính trị đi trước, vũ trang làm nòng cốt.',
    },
  },

  // 5. FLOW "LOGIC XÂY DỰNG LỰC LƯỢNG" (6 bước)
  logicXayDung: {
    tieuDe: 'LOGIC XÂY DỰNG LỰC LƯỢNG',
    phuDe:
      'Quy trình 6 bước chuẩn bị khoa học, bài bản từ đường lối lãnh đạo đến lực lượng chủ lực đầu tiên',
    cacBuoc: [
      {
        buoc: 1,
        tenBuoc: 'Hội nghị Trung ương 8 hoàn chỉnh đường lối',
        nguyenNhan: 'Hội nghị TW8 (5/1941) khẳng định nhiệm vụ giải phóng dân tộc lên hàng đầu.',
        ketQua: 'Xác định rõ phương hướng chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm.',
        tag: 'Đường lối',
      },
      {
        buoc: 2,
        tenBuoc: 'Thành lập Mặt trận Việt Minh',
        nguyenNhan: 'Mặt trận Việt Minh ra đời ngày 19/5/1941 nhằm liên hiệp mọi lực lượng yêu nước.',
        ketQua: 'Quy tụ sức mạnh đại đoàn kết toàn dân tộc dưới lá cờ đỏ sao vàng.',
        tag: 'Tập hợp',
      },
      {
        buoc: 3,
        tenBuoc: 'Phát triển tổ chức cứu quốc trong quần chúng',
        nguyenNhan: 'Mở rộng các đoàn thể cứu quốc đến từng thôn xóm, hầm mỏ, trường học.',
        ketQua: 'Xây dựng đội quân chính trị quần chúng rộng khắp, trung kiên và vững vàng.',
        tag: 'Quần chúng',
      },
      {
        buoc: 4,
        tenBuoc: 'Xây dựng căn cứ địa cách mạng',
        nguyenNhan: 'Tập trung xây dựng căn cứ Cao Bằng và căn cứ Bắc Sơn – Võ Nhai.',
        ketQua: 'Tạo chỗ dựa an toàn cho cơ quan đầu não và bàn đạp xuất phát của lực lượng vũ trang.',
        tag: 'Căn cứ địa',
      },
      {
        buoc: 5,
        tenBuoc: 'Phát triển lực lượng vũ trang',
        nguyenNhan: 'Thành lập Đội du kích Pác Bó (11/1941), các đội tự vệ cứu quốc và vũ trang tuyên truyền.',
        ketQua: 'Bảo vệ quần chúng, trừ gian diệt ác và tích lũy thực tiễn tác chiến.',
        tag: 'Vũ trang',
      },
      {
        buoc: 6,
        tenBuoc: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân',
        nguyenNhan: 'Ngày 22/12/1944, thành lập Đội VNTTGPQ với 34 chiến sĩ tại Cao Bằng.',
        ketQua: 'Khai sinh đội quân chủ lực đầu tiên, sẵn sàng chớp thời cơ Tổng khởi nghĩa 1945.',
        tag: 'Chủ lực',
      },
    ],
  },

  // 6. Ý NGHĨA VÀ TIẾN TRÌNH
  yNghia: {
    tieuDe: 'Ý NGHĨA LỊCH SỬ & TIẾN TRÌNH',
    thongDiepLon:
      'Giai đoạn 1941–1944 đặt nền móng chính trị và vũ trang cho cách mạng. Việc thành lập Đội Việt Nam Tuyên truyền Giải phóng quân mở đường cho Việt Nam Giải phóng quân và cao trào tiến tới Tổng khởi nghĩa tháng Tám 1945.',
    baDiemCotLoi: [
      {
        cauHoi: 'Vì sao phải xây dựng lực lượng?',
        cauTraLoi:
          'Đường lối đúng đắn chỉ thành hiện thực khi có lực lượng chính trị quần chúng hùng hậu và lực lượng vũ trang tinh nhuệ đủ sức đánh đổ kẻ thù.',
      },
      {
        cauHoi: 'Đảng xây dựng thế nào?',
        cauTraLoi:
          'Dựa chắc vào dân, phát triển tổ chức cứu quốc, xây dựng căn cứ địa vững chắc và tuân thủ nguyên tắc "chính trị trọng hơn quân sự".',
      },
      {
        cauHoi: 'Ý nghĩa mốc 22/12/1944?',
        cauTraLoi:
          'Đánh dấu sự ra đời của quân đội chủ lực đầu tiên, lập chiến công Phai Khắt, Nà Ngần, tạo tiền đề quyết định cho thắng lợi Tháng Tám 1945.',
      },
    ],
    timeline: [
      { nam: '1941', giaiDoan: 'Việt Minh ra đời', suKien: 'Mặt trận Việt Minh thành lập (19/5/1941).' },
      { nam: '1941–1944', giaiDoan: 'Xây dựng lực lượng', suKien: 'Xây dựng căn cứ, phát triển lực lượng chính trị & vũ trang.' },
      { nam: '22/12/1944', giaiDoan: 'Lập Đội VNTTGPQ', suKien: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân.' },
      { nam: '1945', giaiDoan: 'Chớp thời cơ', suKien: 'Tổng khởi nghĩa Tháng Tám toàn thắng.' },
    ],
    quoteLon: 'Chính trị đi trước, quân sự theo sau. Dựa vào quần chúng thì việc gì cũng thành.',
    cta: {
      nhan: 'Tiếp theo → 3–8/1945: Cao trào kháng Nhật',
      duongDan: '/cot-moc/5',
      ghiChu: 'Cột mốc 05: Cao trào kháng Nhật cứu nước – Chuẩn bị thời cơ',
    },
  },

  // 7. NGUỒN TƯ LIỆU THAM KHẢO
  nguonTuLieu: [
    { ten: 'Văn kiện Đảng Toàn tập, Tập 7 (1940–1945)', nhaXuatBan: 'NXB Chính trị quốc gia, Hà Nội' },
    { ten: 'Lịch sử Quân đội nhân dân Việt Nam, Tập 1', nhaXuatBan: 'NXB Quân đội nhân dân' },
    { ten: 'Hồ Chí Minh: Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (12/1944)', nhaXuatBan: 'Hồ Chí Minh Toàn tập, Tập 3' },
    { ten: 'Võ Nguyên Giáp: Những chặng đường lịch sử – Hồi ức', nhaXuatBan: 'NXB Chính trị quốc gia Sự thật' },
  ],
};
