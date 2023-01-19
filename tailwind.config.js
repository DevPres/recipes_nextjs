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
      warn: '#FBC850'
    },
    fontSize: {
      base: 'var(--text-base-size)',
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xlg: 'var(--text-xlg)',
      '2xlg': 'var(--text-2xlg)',
      '3xlg': 'var(--text-3xlg)',
      '4xlg': 'var(--text-4xlg)',
      '5xlg': 'var(--text-5xlg)',
      '6xlg': 'var(--text-6xlg)',
      '7xlg': 'var(--text-7xlg)',
      '8xlg': 'var(--text-8xlg)',
      '9xlg': 'var(--text-9xlg)',
    },
    extend: {
      textColor: ({ theme }) => ({
        white: 'var(--white)',
        black: 'var(--black)',
        'gray-1': 'var(--gray-1)',
        'gray-2': 'var(--gray-2)',
        'gray-3': 'var(--gray-3)',
        'gray-4': 'var(--gray-4)',
        'gray-5': 'var(--gray-5)',
        'gray-6': 'var(--gray-6)',
        'gray-7': 'var(--gray-7)',
        primary: theme('colors.primary[900]'),
        alt: theme('colors.alt[900]')
      }),
      fontFamily: {
        heading: ["var(--font-sourcecodepro)", ...fontFamily.sans],
        body: ["var(--font-hamlet)", ...fontFamily.serif],
        button: ["var(--font-sourcecodepro)", ...fontFamily.sans],
      },
      spacing: {
        'xxxs': 'var(--space-xxxs)',
        'xxs': 'var(--space-xxs)',
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        'xxl': 'var(--space-xxl)',
        'xxxl': 'var(--space-xxxl)',
      },
      maxWidth: {
        'line-length':'var(--line-length)'
      },
      lineHeight: {
        heading: 'var(--heading-line-height)',
        body: 'var(--body-line-height)'
      }
    }
  },
  plugins: [],
};

