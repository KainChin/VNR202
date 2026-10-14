import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cấu hình Vite cho dự án VNR202
// base: './' dùng cho GitHub Pages (sẽ chỉnh sau khi deploy)
export default defineConfig({
  plugins: [react()],
  base: './',
});
