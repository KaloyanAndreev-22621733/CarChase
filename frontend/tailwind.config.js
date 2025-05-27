/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // вот здесь, на верхнем уровне!
  theme: {
    extend: {},
  },
  plugins: [],
}