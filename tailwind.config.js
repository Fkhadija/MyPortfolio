/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#6366f1', // Indigo
      secondary: '#06b6d4', // Cyan
    },
  },
},

  plugins: [],
}
