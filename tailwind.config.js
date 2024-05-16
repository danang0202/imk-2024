/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#237D31',
        black: '#263238',
        info: '#2194f3',
        success: '#2E7D31',
        error: '#E53835',
        warning: '#FBC02D',
        silver:'#F5F7FA',
        white:'#FFFFFF',
        greyBlue:'#ABBED1'
      },
    },
  },
  plugins: [],
}

