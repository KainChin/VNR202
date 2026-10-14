// src/data/milestone2.js
// Dữ liệu Cột mốc 02: Tháng 05/1941 – Hoàn chỉnh chuyển hướng chiến lược
// Nội dung cô đọng, súc tích chuẩn bảo tàng, tích hợp đúng 5 ảnh thật từ người dùng

export default {
  id: 2,
  slug: '2',
  thoiGian: '05/1941',
  tieuDe: 'HOÀN CHỈNH CHUYỂN HƯỚNG CHIẾN LƯỢC',
  phuDe: 'Nguyễn Ái Quốc về nước – Thành lập Mặt trận Việt Minh – Chuẩn bị khởi nghĩa',
  mau: '#8F2418',

  // Chuỗi chiến lược tổng thể (Strategy Rail)
  chuoiChienLuoc: [
    {
      id: 1,
      so: '01',
      ten: 'Chuyển hướng đúng',
      moc: '11/1939',
      isActive: false,
      moTa: 'Hội nghị TW6: Mở đầu chuyển hướng',
    },
    {
      id: 2,
      so: '02',
      ten: 'Hoàn chỉnh đường lối',
      moc: '05/1941',
      isActive: true,
      moTa: 'Hội nghị TW8: Thành lập Việt Minh',
    },
    {
      id: 3,
      so: '03',
      ten: 'Chuẩn bị lực lượng',
      moc: '1941–1944',
      isActive: false,
      moTa: 'Xây dựng căn cứ & vũ trang',
    },
    {
      id: 4,
      so: '04',
      ten: 'Nhận diện & Chớp thời cơ',
      moc: '3–8/1945',
      isActive: false,
      moTa: 'Kháng Nhật & Tổng khởi nghĩa',
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

  // 1. HERO (ẢNH 1: BÁC HỒ TẠI PÁC BÓ)
  hero: {
    cotMoc: 'CỘT MỐC 02',
    namThang: '05 / 1941',
    tieuDe: 'HOÀN CHỈNH CHUYỂN HƯỚNG CHIẾN LƯỢC',
    cauPhu: 'Độc lập dân tộc là nhiệm vụ trước hết và cấp bách nhất.',
    thongDiepCotLoi:
      'Tháng 5/1941, lãnh tụ Nguyễn Ái Quốc chủ trì Hội nghị Trung ương 8 tại Pác Bó (Cao Bằng), hoàn chỉnh trọn vẹn đường lối giải phóng dân tộc và thành lập Mặt trận Việt Minh.',
    anhHero: {
      src: '/images/m2-bac-ho-pac-bo.png',
      nhan: 'Lãnh tụ Nguyễn Ái Quốc tại Pác Bó',
      thoiGian: 'Mùa xuân 1941',
      chuThich: 'Nguyễn Ái Quốc trở về nước sau 30 năm bôn ba, trực tiếp lãnh đạo cách mạng tại căn cứ Pác Bó (Cao Bằng).',
      nguon: 'Lưu trữ tư liệu lịch sử Pác Bó',
    },
  },

  // 2. BỐI CẢNH (RÚT GỌN 2 Ý CHÍNH - KHÔNG DÙNG ẢNH ĐỂ TIẾT KIỆM)
  boiCanh: {
    tieuDe: 'BỐI CẢNH ĐẦU NĂM 1941',
    phuDe: 'Nhật vào Đông Dương, vận mệnh dân tộc đứng trước yêu cầu giải phóng cấp bách.',
    cacMoc: [
      {
        so: '01',
        thoiDiem: 'Đầu năm 1941',
        tieuDe: 'Nhật vào Đông Dương',
        moTa: 'Chiến tranh thế giới II lan rộng, Nhật vào Đông Dương cấu kết với Pháp. Nhân dân chịu cảnh áp bức của cả Pháp và Nhật; yêu cầu giải phóng dân tộc trở nên cấp bách nhất.',
      },
      {
        so: '02',
        thoiDiem: 'Mùa xuân 1941',
        tieuDe: 'Nguyễn Ái Quốc về nước',
        moTa: 'Sau 30 năm bôn ba tìm đường cứu nước, Người trở về Pác Bó (Cao Bằng), trực tiếp lãnh đạo cách mạng và xây dựng căn cứ địa.',
      },
    ],
  },

  // 3. HỘI NGHỊ TRUNG ƯƠNG 8 (ẢNH 2 & ẢNH 3)
  hoiNghiTW8: {
    tieuDe: 'HỘI NGHỊ TRUNG ƯƠNG 8',
    thongTinCoBan: [
      { nhan: 'Thời gian', giaTri: '10 – 19/5/1941' },
      { nhan: 'Địa điểm', giaTri: 'Lán Khuổi Nặm, Pác Bó (Cao Bằng)' },
      { nhan: 'Chủ trì', giaTri: 'Đồng chí Nguyễn Ái Quốc' },
    ],
    quoteBox:
      'Hội nghị Trung ương 8 tiếp tục và hoàn chỉnh quá trình chuyển hướng chiến lược đã bắt đầu từ Hội nghị Trung ương 6 năm 1939.',
    anhTuLieu: [
      {
        src: '/images/m2-lan-khuoi-nam.png',
        tieuDe: 'Di tích Lán Khuổi Nặm (Pác Bó)',
        ghiChu: 'Nơi diễn ra Hội nghị Trung ương 8 lịch sử (10–19/5/1941)',
      },
      {
        src: '/images/m2-tranh-tw8.png',
        tieuDe: 'Hội nghị Trung ương 8',
        ghiChu: 'Nguyễn Ái Quốc chủ trì hoàn chỉnh trọn vẹn đường lối cứu nước',
      },
    ],
  },

  // 4. BA QUYẾT SÁCH CHIẾN LƯỢC (ẢNH 4 & ẢNH 5)
  noiDungChinh: {
    tieuDe: '3 QUYẾT SÁCH CHIẾN LƯỢC',
    phuDe: 'Ba quyết sách lịch sử đặt nền tảng đưa toàn dân tiến tới Tổng khởi nghĩa.',
    cacQuyetDinh: [
      {
        so: '01',
        tieuDe: 'Đặt giải phóng dân tộc lên hàng đầu',
        vaiTro: 'Nhiệm vụ tối thượng',
        quote: '“Độc lập dân tộc là nhiệm vụ trước hết và cấp bách nhất.”',
        cacY: [
          'Hội nghị xác định nhiệm vụ cấp bách nhất là giành độc lập dân tộc.',
          'Quyền lợi của giai cấp và bộ phận phải đặt dưới quyền lợi chung của dân tộc.',
          'Tạm gác khẩu hiệu ruộng đất, tập trung mũi nhọn chống Pháp – Nhật.',
        ],
      },
      {
        so: '02',
        tieuDe: 'Thành lập Mặt trận Việt Minh',
        vaiTro: 'Ngày 19/5/1941',
        quote: '“Tập hợp rộng rãi các lực lượng yêu nước cùng đấu tranh giành độc lập.”',
        hinhAnh: '/images/m2-mat-tran-viet-minh.png',
        chuThichAnh: 'Mặt trận Việt Minh – Biểu tượng khối đại đoàn kết toàn dân (19/5/1941)',
        cacY: [
          'Mở rộng khối đại đoàn kết toàn dân thông qua các Hội Cứu quốc.',
          'Tập hợp lực lượng chính trị quần chúng rộng rãi và áp đảo.',
          'Tạo cơ sở tổ chức vững chắc cho cuộc đấu tranh giành chính quyền.',
        ],
      },
      {
        so: '03',
        tieuDe: 'Chuẩn bị khởi nghĩa vũ trang',
        vaiTro: 'Nhiệm vụ trung tâm',
        quote: '“Chuẩn bị toàn diện thực lực để tiến tới khởi nghĩa giành chính quyền.”',
        hinhAnh: '/images/m2-luc-luong-khoi-nghia.png',
        chuThichAnh: 'Lực lượng vũ trang cách mạng sẵn sàng đón thời cơ',
        cacY: [
          'Xây dựng lực lượng chính trị làm nòng cốt đại đoàn kết.',
          'Phát triển lực lượng vũ trang: tự vệ, du kích cứu quốc.',
          'Xây dựng căn cứ địa cách mạng, sẵn sàng chớp thời cơ giải phóng.',
        ],
      },
    ],
  },

  // 5. FLOW LOGIC CHIẾN LƯỢC (6 BƯỚC CÔ ĐỌNG)
  logicChienLuoc: {
    tieuDe: 'LOGIC CHIẾN LƯỢC 1939 – 1945',
    phuDe: 'Dòng tư duy chuyển hướng nhất quán từ lý luận đến sức mạnh hiện thực',
    cacBuoc: [
      {
        buoc: 1,
        tenBuoc: '11/1939: Mở đầu chuyển hướng',
        nguyenNhan: 'Hội nghị Trung ương 6 (Bà Điểm, Gia Định).',
        ketQua: 'Đặt giải phóng dân tộc lên hàng đầu, chuyển sang hoạt động bí mật.',
        tag: 'Mở đầu',
      },
      {
        buoc: 2,
        tenBuoc: '05/1941: Hoàn chỉnh đường lối',
        nguyenNhan: 'Hội nghị Trung ương 8 (Pác Bó, Cao Bằng).',
        ketQua: 'Nguyễn Ái Quốc chủ trì, hoàn chỉnh trọn vẹn đường lối cứu nước.',
        tag: 'Hoàn chỉnh',
      },
      {
        buoc: 3,
        tenBuoc: 'Thành lập Việt Minh',
        nguyenNhan: 'Ngày 19/5/1941 ra đời ngọn cờ tập hợp.',
        ketQua: 'Mở rộng khối đại đoàn kết toàn dân qua các Hội Cứu quốc.',
        tag: 'Đoàn kết',
      },
      {
        buoc: 4,
        tenBuoc: 'Xây dựng lực lượng',
        nguyenNhan: 'Hiện thực hóa đường lối vào đời sống.',
        ketQua: 'Phát triển lực lượng chính trị, vũ trang và căn cứ Việt Bắc.',
        tag: 'Thực lực',
      },
      {
        buoc: 5,
        tenBuoc: 'Chuẩn bị khởi nghĩa',
        nguyenNhan: 'Đi từ khởi nghĩa từng phần.',
        ketQua: 'Tích cực chuẩn bị thực lực, đón chờ thời cơ chín muồi.',
        tag: 'Chuẩn bị',
      },
      {
        buoc: 6,
        tenBuoc: 'Tiến tới Tổng khởi nghĩa 1945',
        nguyenNhan: 'Thời cơ tháng 8/1945 xuất hiện.',
        ketQua: 'Chớp thời cơ giành chính quyền cả nước, lập nên nước Việt Nam Dân chủ Cộng hòa.',
        tag: 'Thắng lợi',
      },
    ],
  },

  // 6. Ý NGHĨA (NGẮN GỌN & CÂU KẾT LỚN)
  yNghiaTienTrinh: {
    tieuDe: 'Ý NGHĨA LỊCH SỬ',
    thongDiepLon:
      'Hội nghị Trung ương 8 tháng 5/1941 đã hoàn chỉnh quá trình chuyển hướng chiến lược của Đảng.',
    baKetQua: [
      {
        so: '01',
        tieuDe: 'Hoàn chỉnh đường lối giải phóng dân tộc',
        moTa: 'Xác định độc lập dân tộc là nhiệm vụ trước hết và cấp bách nhất của cách mạng.',
      },
      {
        so: '02',
        tieuDe: 'Thành lập Mặt trận Việt Minh',
        moTa: 'Tập hợp rộng rãi mọi lực lượng yêu nước trong khối đại đoàn kết toàn dân.',
      },
      {
        so: '03',
        tieuDe: 'Đẩy mạnh chuẩn bị toàn diện khởi nghĩa',
        moTa: 'Xây dựng lực lượng chính trị, vũ trang và căn cứ địa sẵn sàng đón thời cơ.',
      },
    ],
    cauKetLon:
      '“1939 mở đầu chuyển hướng – 1941 hoàn chỉnh đường lối và biến đường lối thành lực lượng cách mạng.”',
    cta: {
      nhan: 'Tiếp theo → 1941–1944: Xây dựng lực lượng',
      duongDan: '/cot-moc/3',
      ghiChu: 'Cột mốc 03: Giai đoạn xây dựng căn cứ địa và lực lượng vũ trang cách mạng',
    },
  },

  // 7. NGUỒN TƯ LIỆU THAM KHẢO
  nguonTuLieu: [
    { ten: 'Văn kiện Đảng Toàn tập, Tập 7 (1940–1945)', nhaXuatBan: 'NXB Chính trị quốc gia' },
    { ten: 'Hồ Chí Minh Toàn tập, Tập 3 (1930–1945)', nhaXuatBan: 'NXB CTQG Sự thật' },
    { ten: 'Lịch sử Đảng Cộng sản Việt Nam, Tập 1', nhaXuatBan: 'NXB CTQG Sự thật' },
    { ten: 'Hồ sơ Di tích Quốc gia đặc biệt Pác Bó', nhaXuatBan: 'Cao Bằng' },
  ],
};
