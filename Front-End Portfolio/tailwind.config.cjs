/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        goldenSmall: '0 0 4px rgba(251, 191, 36, .2), 0 0 20px rgba(251, 191, 36, .4)',
        goldenMedium: '0 0 13px rgba(251, 191, 36, .5), 0 0 30px rgba(251, 191, 36, .4)',
      },
    },
  },
  plugins: [],
};
