/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          'background': '#fff0c7',
          'text': '#5f7055',
          'accent1': '#c09173',
          'accent2': '#74c5c8'
        }
      },
      fontFamily: {
        'primary': ['Playfair Display', 'Georgia', 'serif'],
        'secondary': ['Lato', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
