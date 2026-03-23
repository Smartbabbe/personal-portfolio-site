/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['"Plus Jakarta Sans"', 'sans-serif'],
  //       display: ['"Playfair Display"', 'serif'],
  //       mono: ['"JetBrains Mono"', 'monospace'],
  //       syne: ['"Syne"', 'sans-serif'],
  //       dm: ['"DM Sans"', 'sans-serif'],
  //     },
  //     colors: {
  //       copper: {
  //         50:  '#fdf6ef',
  //         100: '#f9e8d4',
  //         200: '#f2cfa3',
  //         300: '#e9af6a',
  //         400: '#d4956a',
  //         500: '#b87333',  // primary burnished copper
  //         600: '#a06228',
  //         700: '#8b5e2a',  // dark copper
  //         800: '#6e4a22',
  //         900: '#5a3d1c',
  //       },
  //     },
  //     backgroundImage: {
  //       'copper-gradient': 'linear-gradient(135deg, #b87333 0%, #d4956a 50%, #8b5e2a 100%)',
  //       'grid-dark': `linear-gradient(rgba(184,115,51,0.06) 1px, transparent 1px),
  //                     linear-gradient(90deg, rgba(184,115,51,0.06) 1px, transparent 1px)`,
  //       'grid-light': `linear-gradient(rgba(184,115,51,0.10) 1px, transparent 1px),
  //                      linear-gradient(90deg, rgba(184,115,51,0.10) 1px, transparent 1px)`,
  //     },
  //     backgroundSize: {
  //       'grid': '60px 60px',
  //     },
  //     animation: {
  //       'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
  //       'fade-in': 'fadeIn 0.4s ease forwards',
  //       'float': 'float 6s ease-in-out infinite',
  //       'float-delayed': 'float 6s ease-in-out 2s infinite',
  //       'pulse-ring': 'pulseRing 2s ease-out infinite',
  //       'spin-slow': 'spin 12s linear infinite',
  //     },
  //     keyframes: {
  //       fadeUp: {
  //         from: { opacity: '0', transform: 'translateY(28px)' },
  //         to:   { opacity: '1', transform: 'translateY(0)' },
  //       },
  //       fadeIn: {
  //         from: { opacity: '0' },
  //         to:   { opacity: '1' },
  //       },
  //       float: {
  //         '0%, 100%': { transform: 'translateY(0)' },
  //         '50%':      { transform: 'translateY(-12px)' },
  //       },
  //       pulseRing: {
  //         '0%':   { transform: 'scale(1)',   opacity: '0.7' },
  //         '100%': { transform: 'scale(2)',   opacity: '0' },
  //       },
  //     },
  //   },
  // },
  plugins: [],
}
