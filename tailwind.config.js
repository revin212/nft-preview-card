/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'soft-blue-primary': 'hsl(215, 51%, 70%)',
        'cyan-primary': 'hsl(178, 100%, 50%)',
        'primary-bg': 'hsl(217, 54%, 11%)',
        'card-bg': 'hsl(216, 50%, 16%)',
        'dark-blue-line': 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        'main-font': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
