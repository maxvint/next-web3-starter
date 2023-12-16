import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      heebo: ['Heebo'],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      // light: {
      //   colors: {
      //     primary: '#2D2930',
      //   }
      // },
      // dark: {
      //   colors: {
      //     primary: '#E6E3EA',
      //     background: '#161B48',
      //   }
      // },
    },
  })],
}
