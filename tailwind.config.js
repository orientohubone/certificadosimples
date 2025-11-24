/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7', // Primary Brand Blue
          700: '#0369a1',
          900: '#0c4a6e',
        },
        accent: {
          500: '#10b981', // Trust Green
          600: '#059669',
        }
      }
    },
  },
  plugins: [],
}