/** @type {import('tailwindcss').Config} */
export default {
  content: {
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  },
  theme: {
    extend: {
      colors: {
        forest: '#3A5A40',   // metsa roheline
        moss:   '#A3B18A',   // sammal
        poku:   '#8B5E3C',   // poku pruun
        cream:  '#FAF9F6',   // kreemvalge
        honey:  '#FFD166',   // soe kollane
      },
      fontFamily: {
        heading: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body:    ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
