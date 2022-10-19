/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        testColor: '#990033'
      },
      fontSize: {
        '26px': '26px',
        '28px': '28px',
        '34px': '34px',
      },
    },
  },
  plugins: [],
}
