/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      primary: '#6C708D',
      secondary: '#B3B5C5',
      dark: '#494C5F',
      light: '#F5F5FD',
      background1: '#a3a8f0',
      background2: '#696fdd',
      white: '#FFFFFF'
    },
    fontSize: {
      xs: '0.8rem',
      sm: '0.9rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '2rem',
      xxl: '2.5rem',
      xxxl: '4rem'
  },
  plugins: [],
}
}