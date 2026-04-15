/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Righteous"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        gd: {
          purple:     '#2D0057',
          deepPurple: '#0E0020',
          orange:     '#FF6B1A',
          gold:       '#FFD700',
          teal:       '#00CED1',
          magenta:    '#FF1493',
          green:      '#39FF14',
          copper:     '#B87333',
          darkCopper: '#7C4A1E',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400% center' },
          '100%': { backgroundPosition: '400% center' },
        },
        pennyGlow: {
          '0%, 100%': { boxShadow: '0 0 12px #B87333, 0 0 24px #FFD700' },
          '50%':      { boxShadow: '0 0 24px #FFD700, 0 0 48px #FF6B1A' },
        },
      },
      animation: {
        float:     'float 5s ease-in-out infinite',
        shimmer:   'shimmer 4s linear infinite',
        pennyGlow: 'pennyGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

