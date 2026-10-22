/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
          50: '#E8EDF3',
          100: '#D1DAE7',
          200: '#A3B5CF',
          300: '#7590B8',
          400: '#5A7BA5',
          500: '#3E5F87',
          600: '#2E4A6E',
          700: '#1D3651',
          800: '#142840',
          900: '#0B1F33',
          950: '#06101C',
        },
        techblue: {
          DEFAULT: '#1677FF',
          50: '#E8F1FF',
          100: '#D1E4FF',
          200: '#A3C9FF',
          300: '#75AEFF',
          400: '#4793FF',
          500: '#1677FF',
          600: '#125FCC',
          700: '#0E4799',
          800: '#0A2F66',
          900: '#061833',
        },
        cyan: {
          highlight: '#22D3EE',
        },
        light: '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
