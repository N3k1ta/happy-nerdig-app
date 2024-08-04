/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        'geist-thin': ['Geist Thin', 'monospace'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '10rem',
      },
      letterSpacing: {
        'tighter': '-0.05em',
      },
    },
  },
  plugins: [],
};
