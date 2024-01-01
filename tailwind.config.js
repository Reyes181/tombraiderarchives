/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*,{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      skew: {
        '24': '24deg',
      },
      height: {
        '100': '28rem',
        '102': '30rem'
      }
    },
    fontFamily: {
      main: ['var(--font-montserrat)'],
      comic: ['var(--font-bangers)']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      loose: '.25em'
    }
  },
  plugins: [],
}

