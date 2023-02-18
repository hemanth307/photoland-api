/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: '"Exo 2"',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
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
