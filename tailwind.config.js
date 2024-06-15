/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#4BAF4F',  // hijau utama
        primaryHover: '#81C784',
        secondary: '#F59C0B',
        secondaryHover: '#FBC02D',
        info: '#2194f3',
        black: '#263238',
        greyDark: '#4D4D4D',
        grey: '#717171',
        greyLight: '#89939E',
        greyBlue: '#ABBED1',
        silver: '#F5F7FA', // bg silver
        white: '#FFF',
        warning: '#FBC02D', // oren
        error: '#E53835',
        success: '#2E7D31',
        accent2: '#5746AF',
        accent2a: '#EDE9FE',
        accent3: '#FA8C16',
        accent3a: '#fff2d5',
        accent4: "#52C41A",
        accent4a: "#dffbcc",
        accent5: "#F5222D",
        accent5a: "#fecaca",
        primaryTint2: '#E8F5E9',
        inactive: '#BCBDBE',
        purpleBlue: '#342B6E',
        orangeChart: '#FEAB00',
        orangeLightChart: '#FECE50',
        purpleDarkChart: '#332A6D',
        blueChart: '#0070B8',
        blueLightChart: '#7596CC',
        yellowChart: '#FED050'
      },
      fontSize: {
        'xs': '.75rem',     // ukuran ekstra kecil
        'sm': '.875rem',    // ukuran kecil
        'base': '1rem',     // ukuran dasar (biasanya 16px)
        'lg': '1.125rem',   // ukuran besar
        'xl': '1.25rem',    // ukuran sangat besar
        '2xl': '1.5rem',    // ukuran sangat besar
        '3xl': '1.875rem',  // ukuran sangat besar
        '4xl': '2.25rem',   // ukuran sangat besar
        '5xl': '3rem',      // ukuran sangat besar
        '6xl': '4rem',      // ukuran sangat besar
        '7xl': '5rem',      // ukuran sangat besar
        '8xl': '6rem',      // ukuran sangat besar
        '9xl': '8rem',      // ukuran sangat besar
      },
      padding: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '5.5xl': '6rem',
        '6xl': '7rem', // Add a new padding size with a custom value
      },
    },
  },
  plugins: [],
}


// dark : bg-grey-600 / 700

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }