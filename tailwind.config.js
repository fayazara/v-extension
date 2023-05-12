/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['**/*.{vue,html}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
