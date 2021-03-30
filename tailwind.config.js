module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(6, 100%, 80%)',
        'secondary': 'hsl(335, 100%, 65%)',
        'PaleBlue': 'hsl(243, 100%, 93%)',
        'GrayishBlue': 'hsl(229, 7%, 55%)',
        'DarkBlue': 'hsl(228, 56%, 26%)',
        'VeryDarkBlue': 'hsl(229, 57%, 11%)',
      }, 

      backgroundImage: theme => ({
        'bgMobile': "url('/images/bg-mobile.png')",
        'bgDesktop': "url('/images/bg-desktop.png')"
       }),

      fontFamily: {
        'Raleway': ['Raleway']      
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
