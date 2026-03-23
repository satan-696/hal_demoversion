import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

// Self-hosted fonts for kiosk reliability
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

// Disable right-click / long-press context menu globally
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable keyboard shortcuts that could break kiosk
document.addEventListener('keydown', e => {
  const blocked = ['F5', 'F11', 'F12'];
  if (blocked.includes(e.key)) e.preventDefault();
  if ((e.ctrlKey || e.metaKey) && ['r', 'R', 'w', 'W', 't', 'T'].includes(e.key)) {
    e.preventDefault(); // blocks Ctrl+R (reload), Ctrl+W (close tab), Ctrl+T (new tab)
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
