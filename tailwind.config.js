/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe7',
          300: '#a9bcd3',
          400: '#7b97bc',
          500: '#5777a4',
          600: '#435f89',
          700: '#374d6f',
          800: '#2f405c',
          900: '#1a2435',
        },
        gold: {
          50: '#fdfbed',
          100: '#fbf6d1',
          200: '#f7eba3',
          300: '#f3db6c',
          400: '#f0cb45',
          500: '#ecb71e',
          600: '#d49912',
          700: '#b07610',
          800: '#8d5a14',
          900: '#744a15',
        }
      },
      boxShadow: {
        'glow': '0 0 30px -5px rgba(0, 0, 0, 0.15)',
        'glow-lg': '0 0 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};