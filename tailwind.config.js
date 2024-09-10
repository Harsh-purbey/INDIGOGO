module.exports = {
  content: [
    './app/**/*.html',
    './app/components/**/*.js',
    './app/containers/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0% ': { opacity: 0, transform: 'translateY(40px)' },
          '50%': { opacity: 50, transform: 'translateY(-30px)' },
          '100%': { opacity: 0, transform: 'translateY(-40)' },
        },
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      fontFamily: {
        josefin: ['Josefin', 'sans-serif'],
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        36: '36px',
        46: '46px',
        76: '76px',
      },
      colors: {
        offer: '#4B01D4',
        disbtn: '#D5FF5E',
        expbg: '#F1F1F1',
        fotter: '#1F0733',
        'fotter-button': '#CF0C67',
        'fotter-input': '#4C395C',
        'fotter-blog': '#2A133D',
        primary: {
          100: '#081420',
          200: '#192431',
          300: '#6D5AE6',
          400: '#1BCE93',
          500: '#FFFFFF',
          600: '#ffffff14',
          700: '#F9B223',
          800: '#ECECEC',
          900: '#B1B1B5',
          1000: '#70798B',
          1100: '#2B3541',
        },
      },
      borderRadius: {
        20: '20px',
      },
    },
    screens: {
      sm: '	640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
};
