const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'adelia': ["ADELIA", "cursive"],
      },
      gridTemplateColumns: {
       'login': 'minmax(0px, 1.4fr) 1fr;',
       'logo':'18px minmax(170px,1fr);',
       'botones_crud':'128px auto;',
       'principal':'auto 1fr auto;'
      },
      
      colors: {
        'rgba-black': '#e5e7eb85;',
        'rgba-indigo': '#4f46e5ed;',
        'colorbg': '#f2f2f2',
        'colorle': '#2D2D2D', 
        'colorbo': '#462de0', 
        'colorac': '#1ac80c',
        'rgba-me': '#1f9383ba',
        'thead-NS': '#045c94',
        'dark': '#202124'
      },

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

      'smm': {'max': '450px'}
    }
  },
  plugins: [],
}