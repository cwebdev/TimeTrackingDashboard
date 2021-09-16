module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'profile-logo': "url('./images/image-jeremy.png')",        
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
