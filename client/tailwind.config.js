/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: '"Exo 2"',
    },
    extend: {
      colors: {
        body: '#1D1F23',
        primary: '#151618',
        accent: '#F6CD46',
      },
    },
  },
  plugins: [],
};
