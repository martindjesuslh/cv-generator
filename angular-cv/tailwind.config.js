/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      width: {
        extend: '-webkit-fill-available',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
