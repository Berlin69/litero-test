/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'plt-white': '#FFFFFF',
        'plt-black': '#000000',
        'plt-accent': '#5040ED',
        'plt-alert': '#FF3131',
        'plt-warning': '#FF8616',
        'plt-secondary': '#F7F7F7',
        'plt-tertiary': '#D1FBCC',
        'plt-gray': '#B2B2B2',
        'plt-gradient-1': '#C40099',
        'plt-gradient-2': '#0094FF',
        'plt-dark-500': '#7F7F7F',
        'plt-dark-600': '#666666',
        'plt-dark-900': '#202020',
        'plt-green-950': '#0A9C29',
        'plt-red-900': '#CD2929',
      },
      animation: {
        'shake-x': 'shake .3s linear',
        'fade-up': 'fade-up .15s linear',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '25%': {
            transform: 'translateX(5px)',
          },
          '50%': {
            transform: 'translateX(-5px)',
          },
          '75%': {
            transform: 'translateX(5px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px) scale(0.95)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
