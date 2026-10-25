// src/data/milestone2.js
// Dữ liệu Cột mốc 02: Tháng 11/1939 – Mở đầu chuyển hướng chiến lược
// Nội dung cô đọng, súc tích, chuẩn phong cách trưng bày bảo tàng (Hội nghị TW6, Bà Điểm)

export default {
  id: 2,
  slug: '2',
  thoiGian: '11/1939',
  tieuDe: 'MỞ ĐẦU CHUYỂN HƯỚNG CHIẾN LƯỢC',
  phuDe: 'Chiến tranh bùng nổ – Cách mạng cần một hướng đi mới.',
  mau: '#8F2418',

  // Chuỗi chiến lược tổng thể (Strategy Rail)
  chuoiChienLuoc: [
    {
      id: 1,
      so: '01',
      ten: 'Đảng ra đời',
      moc: '1930',
      isActive: false,
      moTa: 'Hội nghị thành lập Đảng tại Hương Cảng',
    },
    {
      id: 2,
      so: '02',
      ten: 'Chuyển hướng đúng',
      moc: '11/1939',
      isActive: true,
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
      moTa: 'Thành lập Việt Minh, xây dựng căn cứ và lực lượng vũ trang',
    },
    {
      id: 5,
      so: '05',
      ten: 'Cao trào kháng Nhật',
      moc: '3–8/1945',
      isActive: false,
      moTa: 'Kháng Nhật cứu nước',
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
      ten: 'Thắng lợi',
      moc: '2/9/1945',
      isActive: false,
      moTa: 'Tuyên ngôn Độc lập',
    },
  ],

  // 1. HERO COMPOSITION
  hero: {
    cotMoc: 'CỘT MỐC 02',
    namThang: '11 / 1939',
    tieuDe: 'MỞ ĐẦU CHUYỂN HƯỚNG CHIẾN LƯỢC',
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
        tieuDe: 'Chiến tranh thế giới II bùng nổ',
        moTa: 'Chủ nghĩa phát xít tấn công châu Âu. Chiến tranh lan rộng, cục diện toàn cầu đảo lộn.',
        hinhAnh: '/images/m1-ww2.png',
        chuThich: 'Chiến tranh thế giới II bùng nổ, mở màn cho cuộc đối đầu toàn cầu.',
        anh: {
          src: '/images/m1-ww2.png',
          chuThich: 'Chiến tranh thế giới II bùng nổ, mở màn cho cuộc đối đầu toàn cầu.',
        },
      },
      {
        so: '02',
        thoiDiem: 'Tháng 9/1939',
        tieuDe: 'Pháp siết chặt đàn áp Đông Dương',
        moTa: 'Toàn quyền Đông Dương ban bố tình trạng thời chiến, đặt Đảng Cộng sản ngoài vòng pháp luật, tổng động viên kinh tế phục vụ mẫu quốc.',
        hinhAnh: '/images/m1-phap-dan-ap.png',
        chuThich: 'Thực dân Pháp khủng bố trắng, thiết quân luật trên toàn cõi Đông Dương.',
        anh: {
          src: '/images/m1-phap-dan-ap.png',
          chuThich: 'Thực dân Pháp khủng bố trắng, thiết quân luật trên toàn cõi Đông Dương.',
        },
      },
      {
        so: '03',
        thoiDiem: 'Cuối 1939',
        tieuDe: 'Mâu thuẫn dân tộc lên cao nhất',
        moTa: 'Nhân dân ta lâm vào cảnh lầm than cùng cực. Mâu thuẫn giữa dân tộc Việt Nam với thực dân Pháp trở thành mâu thuẫn chủ yếu, gay gắt nhất.',
        hinhAnh: '/images/m1-mau-thuan-dan-toc.png',
        chuThich: 'Quần chúng nhân dân sục sôi tinh thần đấu tranh, mâu thuẫn giữa dân tộc ta và thực dân Pháp lên đến tột đỉnh.',
        anh: {
          src: '/images/m1-mau-thuan-dan-toc.png',
          chuThich: 'Quần chúng nhân dân sục sôi tinh thần đấu tranh, mâu thuẫn giữa dân tộc ta và thực dân Pháp lên đến tột đỉnh.',
        },
      },
    ],
  },

  // 3. HỘI NGHỊ TRUNG ƯƠNG 6 (Bố cục 2 cột)
  hoiNghiTW6: {
    tieuDe: 'HỘI NGHỊ TRUNG ƯƠNG 6',
    thongTinCoBan: [
      { nhan: 'Thời gian', giaTri: '06 – 08/11/1939' },
      { nhan: 'Địa điểm', giaTri: 'Bà Điểm, Hóc Môn, Gia Định' },
      { nhan: 'Chủ trì', giaTri: 'Tổng Bí thư Nguyễn Văn Cừ' },
      { nhan: 'Tham dự', giaTri: 'Phan Đăng Lưu, Lê Duẩn, Võ Văn Tần...' },
    ],
    anhTuLieu: [
      {
        src: '/images/m1-nguyen-van-cu.png',
        tieuDe: 'Tổng Bí thư Nguyễn Văn Cừ (1912–1941)',
        ghiChu: 'Người chủ trì Hội nghị TW6, nhà lý luận xuất sắc khởi xướng tự phê bình và chuyển hướng chiến lược',
      },
      {
        src: '/images/m1-badiem-hocmon.png',
        tieuDe: 'Địa điểm Bà Điểm (Hóc Môn, Gia Định)',
        ghiChu: 'Căn cứ bí mật kiên trung nuôi giấu Trung ương Đảng giữa vòng vây quân thù',
      },
    ],
    quoteBox:
      'Bước ngoặt lịch sử: Quyết định chuyển từ đấu tranh đòi dân sinh, dân chủ sang trực tiếp chuẩn bị khởi nghĩa vũ trang giành chính quyền.',
    videoShorts: {
      youtubeId: '_eF7_97ReXU',
      tieuDeModal: 'TỔNG BÍ THƯ NGUYỄN VĂN CỪ (1912–1941)',
      url: 'https://www.youtube.com/shorts/_eF7_97ReXU',
      nguonTienTo: 'Nguồn: YouTube – ',
      nguonTenLink: 'Nguyễn Văn Cừ',
      nutMoRong: '⤢ Mở rộng',
    },
  },

  // 4. FLOW "LOGIC CHUYỂN HƯỚNG" (6 bước)
  logicChuyenHuong: {
    tieuDe: 'LOGIC CHUYỂN HƯỚNG CHIẾN LƯỢC',
    phuDe: 'Dòng tư duy chiến lược từ bối cảnh đến hành động cách mạng',
    cacBuoc: [
      {
        buoc: 1,
        tenBuoc: 'Thế chiến II bùng nổ',
        nguyenNhan: 'Mâu thuẫn giữa các khối đế quốc đạt đỉnh điểm.',
        ketQua: 'Cục diện thế giới biến động sâu sắc.',
        tag: 'Bối cảnh',
      },
      {
        buoc: 2,
        tenBuoc: 'Pháp đàn áp dã man',
        nguyenNhan: 'Thực dân siết chặt ách thống trị thời chiến.',
        ketQua: 'Không gian đấu tranh công khai bị bóp nghẹt.',
        tag: 'Áp bức',
      },
      {
        buoc: 3,
        tenBuoc: 'Mâu thuẫn dân tộc gay gắt',
        nguyenNhan: 'Toàn thể dân tộc đứng trước họa diệt vong.',
        ketQua: 'Yêu cầu độc lập trở thành đòi hỏi sinh tử.',
        tag: 'Bản chất',
      },
      {
        buoc: 4,
        tenBuoc: 'Hội nghị Trung ương 6',
        nguyenNhan: 'Đảng kịp thời phân tích tình hình mới.',
        ketQua: 'Hạ quyết tâm chuyển hướng chiến lược toàn diện.',
        tag: 'Quyết sách',
      },
      {
        buoc: 5,
        tenBuoc: 'Ưu tiên Giải phóng Dân tộc',
        nguyenNhan: 'Lợi ích dân tộc cao hơn lợi ích giai cấp.',
        ketQua: 'Tạm gác khẩu hiệu ruộng đất, lập Mặt trận phản đế.',
        tag: 'Hành động',
      },
      {
        buoc: 6,
        tenBuoc: 'Chuẩn bị Khởi nghĩa Vũ trang',
        nguyenNhan: 'Con đường bạo lực cách mạng là tất yếu.',
        ketQua: 'Tạo tiền đề trực tiếp cho thắng lợi Tháng Tám 1945.',
        tag: 'Mục tiêu',
      },
    ],
  },

  // 5. ĐẢNG ĐIỀU CHỈNH NHƯ THẾ NÀO?
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

  // 6. Ý NGHĨA VÀ TIẾN TRÌNH
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
      { nam: '1930', giaiDoan: 'Nền tảng', suKien: 'Đảng Cộng sản Việt Nam ra đời, mở ra con đường cứu nước.' },
      { nam: '1939', giaiDoan: 'Khởi đầu', suKien: 'Mở đầu chuyển hướng chiến lược, đặt dân tộc lên hàng đầu.' },
      { nam: '1941', giaiDoan: 'Hoàn chỉnh', suKien: 'Hội nghị TW8 hoàn chỉnh đường lối, thành lập Việt Minh.' },
      { nam: '1945', giaiDoan: 'Thắng lợi', suKien: 'Tổng khởi nghĩa Tháng Tám thắng lợi trọn vẹn.' },
    ],
    quoteLon: 'Thời cơ không tự đến, thời cơ được chuẩn bị bằng những quyết định đúng.',
    cta: {
      nhan: 'Tiếp theo → 05/1941: Hoàn chỉnh chuyển hướng, Việt Minh',
      duongDan: '/cot-moc/3',
      ghiChu: 'Cột mốc 03: Hoàn chỉnh chuyển hướng chiến lược tại Pác Bó',
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
