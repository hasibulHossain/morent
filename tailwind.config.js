const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ads-1': "url('./assets/imgs/Ads.jpg')",
        'ads-1-large': "url('./assets/imgs/ads-1-lg.jpg')",
        'ads-2-large': "url('./assets/imgs/ads-2-lg.jpg')",
      }
    },
    colors: {
      'primaryblue': '#3563E9',
      'deepblack': '#1A202C',
      'navy': '#3D5278',
      ...colors,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'sans': ['Poppins, sans-serif', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
