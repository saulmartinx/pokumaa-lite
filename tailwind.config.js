/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#3A5A40',
        moss:   '#A3B18A',
        poku:   '#8B5E3C',
        cream:  '#FAF9F6',
        honey:  '#FFD166',
      },
      fontFamily: {
        heading: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body:    ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
