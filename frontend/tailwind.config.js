/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Helvetica', 'Arial'],
        display: ['Sora', 'Inter', 'ui-sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'ui-serif']
      },
      boxShadow: {
        'soft': '0 2px 20px -8px rgb(0 0 0 / 0.15)'
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}


