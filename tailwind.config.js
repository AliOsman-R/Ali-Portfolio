import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty:{
        'background-color': 'background-color',
        "height": "max-height"
      },
      colors:{
        btnColor:"#5c5b5bd5",
        darkColor:"#0a0a0a",
        textColor:"#cfcfcfee",
        borderColor:"#2a2a2a",
        cardColor:"#1a1a1acf",
        inputColor:"#f0f0f0",
        hoverColor:"#b0b0b0aa",
        hoverIcon:"#9696966f"
      },
      animation: {
        slideInFromRight:'slideInFromRight 1.5s ease-out forwards',
        slideInFromLeft:'slideInFromLeft 1.5s ease-out forwards',
        spinner:'spinner .5s linear infinite',
      },
      keyframes: {
        slideInFromRight:{
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromLeft: {
          '0%':{transform: 'translateX(100%)', opacity:'0'},
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        spinner:{
          "0%": {transform: "rotate(360deg)",},
        }

      },
    },
  },
  plugins: [],
}