/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#EC4899',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4F46E5, #EC4899)',
      },
    },
  },
  plugins: [],
};
