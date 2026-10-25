// src/data/index.js
// File tập hợp dữ liệu 7 cột mốc lịch sử, xuất mảng để dùng chung

import milestone1 from './milestone1.js';
import milestone2 from './milestone2.js';
import milestone3 from './milestone3.js';
import milestone4 from './milestone4.js';
import milestone5 from './milestone5.js';
import milestone6 from './milestone6.js';
import milestone7 from './milestone7.js';

// Mảng theo thứ tự 1→7 để dùng trong navigation và progress bar
const milestones = [
  milestone1,
  milestone2,
  milestone3,
  milestone4,
  milestone5,
  milestone6,
  milestone7,
];

export default milestones;

// Tra cứu nhanh theo id
export const getMilestoneById = (id) =>
  milestones.find((m) => m.id === Number(id));
