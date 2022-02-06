// @ts-check

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

/** @type { import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['"Noto serif"', 'serif'],
      heading: ['"Oxygen"', 'sans-serif'],
    },
    extend: {
      colors: {
        text: withOpacityValue('--color-text'),
        title: withOpacityValue('--color-title'),
        background: withOpacityValue('--color-background'),
        primary: withOpacityValue('--color-primary'),
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-logical'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
