const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      navbar: '#18181b',
      sidebar: '#1f1f23',
      main: '#0e0e10',
      indigo: colors.indigo,
      gray: colors.trueGray,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
