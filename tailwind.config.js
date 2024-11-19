/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff0c7',
        text: '#5f7055',
        accent1: '#ffd449',
        accent2: '#74c5c8'
      },
      fontFamily: {
        'primary': ['Playfair Display', 'Georgia', 'serif'],
        'secondary': ['Lato', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}