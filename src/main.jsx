// src/main.jsx
// Entry point của ứng dụng React

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import CSS toàn cục
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
