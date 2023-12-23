/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#282C33',
        primary: '#C778DD',
        typography: '#ABB2BF',
      },
      fontFamily: {
        sans: ['fira-code'],
      },
    },
    screens: {
      largeDesktop: { min: '1400px' },
      desktop: { max: '1400px' },
      bigTablet: { max: '1140px' },
      tablet: { max: '1028px' },
      phone: { max: '695px' },
      smallPhone: { max: '400px' },
    },
  },
  plugins: [],
}
