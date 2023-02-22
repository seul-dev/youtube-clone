/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white_logo: '#ffffff',
        white_title: '#F1F1F1',
        white_body: '#D5E2E2',
        gray_inactive: '#212121',
        gray_active: '#3F3F3F',
        black: '#0F0F0F',
        red: '#FF0000',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
