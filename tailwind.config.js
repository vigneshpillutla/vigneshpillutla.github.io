const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        dullBlack: '#323232'
      }
    }
  },
  plugins: []
};
