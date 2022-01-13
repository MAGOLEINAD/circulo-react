module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js,jsx}"],
    theme: {
      container: {
        center: true,
      },
    },

    extend: {
      backgroundImage: {
        'cartas': "url('/img/slides/cartas.jpg')",
      }
    },
    plugins: [
      require('tailwindcss-textshadow')
    ]
  };
  
