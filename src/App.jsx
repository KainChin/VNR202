// src/App.jsx
// Cấu hình routing chính dùng HashRouter + AnimatePresence cho chuyển trang

import { lazy, Suspense } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PosterHome from './components/PosterHome.jsx';
import GemButton from './components/GemButton.jsx';

// Trang chủ: poster + nút Gem
function HomeWithGem() {
  return (
    <>
      <PosterHome />
      <GemButton milestoneId={null} />
    </>
  );
}

// Lazy-load 6 trang cột mốc để tối ưu performance
const Milestone1 = lazy(() => import('./pages/Milestone1.jsx'));
const Milestone2 = lazy(() => import('./pages/Milestone2.jsx'));
const Milestone3 = lazy(() => import('./pages/Milestone3.jsx'));
const Milestone4 = lazy(() => import('./pages/Milestone4.jsx'));
const Milestone5 = lazy(() => import('./pages/Milestone5.jsx'));
const Milestone6 = lazy(() => import('./pages/Milestone6.jsx'));

// Biến thể animation "lật trang giấy" khi chuyển route
const pageVariants = {
  initial: { opacity: 0, x: 40, rotateY: -3 },
  enter:   { opacity: 1, x: 0,  rotateY:  0 },
  exit:    { opacity: 0, x: -40, rotateY: 3 },
};

const pageTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
};

// Khung loading giấy cũ
function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-tieude)',
      color: 'var(--chu-nhat)',
      fontSize: '1rem',
      gap: '0.5rem',
    }}>
      <span style={{ fontSize: '1.3rem', opacity: 0.6 }}>✦</span>
      Đang tải...
    </div>
  );
}

import ScrollToTopButton from './components/ScrollToTopButton.jsx';

// Component Routes bên trong để dùng được useLocation
function AnimatedRoutes() {
  const location = useLocation();
  const isMilestone = location.pathname.startsWith('/cot-moc');

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={pageTransition}
          style={{ minHeight: '100vh', perspective: '1200px' }}
        >
          <Suspense fallback={<Loading />}>
            <Routes location={location}>
              {/* Trang chủ poster + nút Gem */}
              <Route path="/" element={<HomeWithGem />} />

              {/* 6 trang cột mốc */}
              <Route path="/cot-moc/1" element={<Milestone1 />} />
              <Route path="/cot-moc/2" element={<Milestone2 />} />
              <Route path="/cot-moc/3" element={<Milestone3 />} />
              <Route path="/cot-moc/4" element={<Milestone4 />} />
              <Route path="/cot-moc/5" element={<Milestone5 />} />
              <Route path="/cot-moc/6" element={<Milestone6 />} />

              {/* 404 – trang không tồn tại */}
              <Route
                path="*"
                element={
                  <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    fontFamily: 'var(--font-tieude)',
                    color: 'var(--do-dam)',
                  }}>
                    <h1 style={{ fontSize: '3rem' }}>404</h1>
                    <p>Trang này không tồn tại.</p>
                    <a href="#/" className="nut-giay">← Về trang chủ</a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* Nút mũi tên lướt lên đầu trang cho tất cả các cột mốc */}
      {isMilestone && <ScrollToTopButton />}
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
