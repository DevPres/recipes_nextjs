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
        50: '#f4f6f7',
        100: '#e2e8eb',
        200: '#c9d3d8',
        300: '#a3b5bd',
        400: '#768e9a',
        500: '#5b737f',
        600: '#4e606c',
        700: '#44515a',
        800: '#3b444b',
        900: '#363d43',
    },       
  },
  extend: {},
  },
  plugins: [],
};

