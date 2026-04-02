/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        xl: '3rem',
        '2xl': '5rem',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1280px',
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        brand: {
          blue: '#1a73e8',
          blueDark: '#1557b0',
          blueLight: '#8ab4f8',
          red: '#8b4545',
          green: '#3d6b52',
          yellow: '#c49a3c',
          navy: '#1a1a2e',
          navyLight: '#2d2d44',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        hindi: ['Hind', 'Sora', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gentle-pulse': 'gentlePulse 2.5s ease-in-out infinite',
        'float': 'float 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
