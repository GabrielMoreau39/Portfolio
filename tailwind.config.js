/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
       "colors": {
       "white": "#ffffff",
       "black": "#000000",
       "gray": "#1a1a1a"
      },
      fontFamily: {
      'sans': ['Arial', 'sans-serif'],
      'display': ['Notable', 'sans-serif'],
      'body': ['Nova Mono', 'sans-serif'],
      'mono': ['Lexend Zetta  ', 'sans-serif'],
      'number':  ['Archivo Black', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'tiny': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      }
    }
  },
  plugins: []
}
