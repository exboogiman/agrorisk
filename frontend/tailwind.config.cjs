module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#05060a',
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.sans').join(', '),
          },
        },
        invert: {
          css: {
            fontFamily: theme('fontFamily.sans').join(', '),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
