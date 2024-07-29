/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      gridTemplateColumns: {
        'auto-fill-285': 'repeat(auto-fill, minmax(285px, 1fr))',
        'footer': 'grid-template-columns: 2fr 1fr 1fr',
      },

      animation: {
        fadeIn: 'fadeIn 3s'
      },
      keyframes: {
        fadeIn: {
          '0%' : { opacity: 0},
          '100%' : {opacity: 1}
        }
      }
    },
  },
  plugins: [],
}

