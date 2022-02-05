// @ts-check

/** @type { import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  theme: {
    fontFamily: {
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      colors: {
        primary: '#F5A3B8',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-logical')],
}
