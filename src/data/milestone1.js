// src/data/milestone1.js
// Dữ liệu Cột mốc 1: Tháng 11/1939 – Chuyển hướng chiến lược
// Thiết kế bố cục nằm ngang gọn gàng, phù hợp thuyết trình desktop 16:9

export default {
  id: 1,
  slug: '1',
  mau: '#8B1A10',
  thoiGian: '11/1939',

  // TẦNG 1 – HERO (Bố cục 2 cột ngang: Trái thông tin bối cảnh, Phải video Shorts)
  tang1Hero: {
    namThang: '11 / 1939',
    tieuDe: 'CHUYỂN HƯỚNG CHIẾN LƯỢC',
    cauPhu: 'Chiến tranh bùng nổ – Cách mạng cần một hướng đi mới.',
    boiCanhNgan: [
      {
        moc: '01/09/1939',
        moTa: 'Chiến tranh thế giới thứ hai bùng nổ.',
        hinhAnh: '/images/m1-ww2.png',
        chuThich: 'Chiến tranh thế giới thứ hai (1939–1945)',
      },
      {
        moc: 'Đông Dương',
        moTa: 'Pháp tăng cường đàn áp cách mạng.',
        hinhAnh: '/images/m1-phap-dan-ap.png',
        chuThich: 'Thực dân Pháp tăng cường khủng bố, đàn áp',
      },
      {
        moc: '06–08/11/1939',
        moTa: 'Hội nghị Trung ương 6 diễn ra.',
        hinhAnh: '/images/m1-hoi-nghi-tw6.png',
        chuThich: 'Hội nghị Trung ương 6 (Bà Điểm, Hóc Môn)',
      },
    ],
    video: {
      youtubeId: '_eF7_97ReXU',
      url: 'https://www.youtube.com/shorts/_eF7_97ReXU',
      tieuDe: 'NGUYỄN VĂN CỪ',
      nguonTienTo: 'Nguồn: YouTube – ',
      nguonTenLink: 'Nguyễn Văn Cừ',
      nutMoRong: '⤢ Mở rộng',
    },
  },

  // TẦNG 2 – NỘI DUNG CHÍNH (Khối A: Thông tin Hội nghị, Khối B: 4 Quyết định 2x2)
  tang2NoiDung: {
    // Khối A – Thông tin hội nghị
    khoiA_HoiNghi: {
      tieuDe: 'HỘI NGHỊ TRUNG ƯƠNG 6',
      hinhAnh: [
        {
          src: '/images/m1-badiem-hocmon.png',
          chuThich: 'Bà Điểm, Hóc Môn (Địa điểm)',
        },
        {
          src: '/images/m1-nguyen-van-cu.png',
          chuThich: 'TBT Nguyễn Văn Cừ (Chủ trì)',
        },
      ],
      thongTin: [
        { nhan: 'Thời gian', giaTri: '6–8/11/1939' },
        { nhan: 'Địa điểm', giaTri: 'Bà Điểm, Hóc Môn, Gia Định' },
        { nhan: 'Chủ trì', giaTri: 'Tổng Bí thư Nguyễn Văn Cừ' },
      ],
      doanNgan:
        'Trong bối cảnh chiến tranh và đàn áp gia tăng, hội nghị đã mở đầu quá trình chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.',
    },

    // Khối B – 4 QUYẾT ĐỊNH CHIẾN LƯỢC
    khoiB_BonQuyetDinh: {
      tieuDePhan: '4 QUYẾT ĐỊNH CHIẾN LƯỢC',
      danhSach: [
        {
          so: '01',
          tieuDe: 'ĐẶT GIẢI PHÓNG DÂN TỘC LÊN HÀNG ĐẦU',
          noiDung:
            'Xác định chống đế quốc, giành độc lập là nhiệm vụ cấp bách nhất.',
          loaiIcon: 'docLap',
          mauNhan: '#8B1A10',
        },
        {
          so: '02',
          tieuDe: 'ĐIỀU CHỈNH MỤC TIÊU ĐẤU TRANH',
          noiDung:
            'Tạm gác khẩu hiệu cách mạng ruộng đất, hướng tới mục tiêu đoàn kết toàn dân.',
          loaiIcon: 'dieuChinh',
          mauNhan: '#A8541A',
        },
        {
          so: '03',
          tieuDe: 'XÂY DỰNG MẶT TRẬN ĐOÀN KẾT',
          noiDung:
            'Thành lập Mặt trận Dân tộc Thống nhất Phản đế Đông Dương.',
          loaiIcon: 'matTran',
          mauNhan: '#1F4E79',
        },
        {
          so: '04',
          tieuDe: 'CHUYỂN SANG HOẠT ĐỘNG BÍ MẬT',
          noiDung:
            'Bảo toàn lực lượng và chuẩn bị khởi nghĩa khi có thời cơ.',
          loaiIcon: 'biMat',
          mauNhan: '#4A3B32',
        },
      ],
    },
  },

  // TẦNG 3 – TIMELINE + KẾT LUẬN (Dải ngang ở cuối)
  tang3Timeline: {
    cacMoc: [
      { nam: '1939', moTa: 'Khởi đầu' },
      { nam: '1940', moTa: 'Khẳng định' },
      { nam: '1941', moTa: 'Hoàn chỉnh' },
      { nam: '1945', moTa: 'Thắng lợi' },
    ],
    yNghia:
      'Quyết định tháng 11/1939 mở đầu quá trình chuẩn bị về đường lối cho thắng lợi năm 1945.',
    ketLuan:
      'Thời cơ không tự đến, thời cơ được chuẩn bị bằng những quyết định đúng.',
  },

  // ĐIỀU HƯỚNG TIẾP THEO
  dieuHuongTiep: {
    cotMoc: 2,
    duongDan: '/cot-moc/2',
    nhan: 'TIẾP THEO → 05/1941: VIỆT MINH RA ĐỜI',
  },
};
