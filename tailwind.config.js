module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      // padding:'16px'
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      screens: {
        '2xl': '1320px',
      }
    },
  },
  
  plugins: [],
}
