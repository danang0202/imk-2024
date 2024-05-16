/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4BAF4F',
        black: '#263238',
        info: '#2194f3',
        success: '#2E7D31',
        error: '#E53835',
        warning: '#FBC02D',
        silver: '#F5F7FA',
        white: '#FFFFFF',
        greyBlue: '#ABBED1',
        hoverPrimary:'#81C784'
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
    },
  },
  plugins: [],
}

