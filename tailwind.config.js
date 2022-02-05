// @ts-check

/** @type { import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Noto serif"', 'serif'],
      heading: ['"Oxygen"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#F5A3B8',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-logical')],
}
