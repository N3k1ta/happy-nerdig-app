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
        '7xl': '7rem',
        '8xl': '8rem',
        '9xl': '9rem',
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '10rem',
      },
      letterSpacing: {
        'tighter': '-0.05em',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      minWidth: {
        '48': '35rem',
      },
      screens: {
        'sm': '340px',  // (smaller tablets and large phones)
        'md': '768px',  // (tablets)
        'lg': '1024px', // (desktops, laptops)
        'xl': '1280px', // (larger desktops)
        '2xl': '1536px', //(extra-large desktops)
      },
    },
  },
  plugins: [],
};
