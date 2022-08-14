const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '400px',
      // => @media (min-width: 768px) { ... }

      'lg': '400px',
      // => @media (min-width: 1024px) { ... }

      'xl': '400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '400px',
    },
    extend: {},
    colors: {
      'primaryblue': '#3563E9',
      'deepblack': '#1A202C',
      ...colors,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'sans': ['Poppins, sans-serif', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
