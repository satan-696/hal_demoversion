/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hal: {
          // Core brand
          navy: '#003087',
          'navy-dark': '#001F5B',
          'navy-light': '#0A4DB5',
          sky: '#1E90FF',
          gold: '#C8A94B',
          white: '#FFFFFF',
          offwhite: '#F0F4FA',
          border: '#D0DCF0',
          text: '#1A2B4A',
          muted: '#6B7A99',
          // Card backgrounds (from reference screenshots)
          'card-blue': '#003087',    // dark navy cards (Attendance tab)
          'card-teal': '#006B5E',    // teal cards (Payroll Payments tab)
          'card-brown': '#8B3A1D',   // brown cards (Other Application)
          // Header
          'header-bg': '#003087',
          'header-light': '#edf3ff',
          // Tab strip
          'tab-bg': '#003087',
          'tab-active': '#FFFFFF',
          // Content area
          'content-bg': '#E8EEF8', // Approvals bar
          'approve-green': '#2E7D32',
          'approve-yellow': '#F9A825',
          'approve-teal': '#00897B',
          'approve-blue': '#1565C0',
          'approve-darkgreen': '#388E3C',
          'approve-grey': '#757575',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'spin-slow': 'spin-slow 3s linear infinite',
      }
    },
  },
  plugins: [],
}
