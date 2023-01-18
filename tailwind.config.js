const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#edf0ff',
        100: '#dfe2ff',
        200: '#c5caff',
        300: '#a1a6ff',
        400: '#807cfd',
        500: '#6e5df7',
        600: '#5f3fec',
        700: '#5d3fd3',
        800: '#432ba8',
        900: '#392b84',
      },
      alt: {
        '50': '#f6f6f7',
        '100': '#e1e3e6',
        '200': '#c3c7cc',
        '300': '#9da3ab',
        '400': '#787f89',
        '500': '#5e646e',
        '600': '#4a4e57',
        '700': '#3e4047',
        '800': '#34363b',
        '900': '#18191b',
      },
      error: '#E81221',
      success: '#81E052',
      info: '#FBC850'
    },
    
    extend: {
      textColor: {
         white: 'white'
      },
      fontFamily: {
        sans: ["var(--font-sourcecodepro)", ...fontFamily.sans]
      },
    }
  },
  plugins: [],
};

