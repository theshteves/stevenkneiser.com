module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
      inset: ['hover'],
    },
  },
  plugins: [],
}
