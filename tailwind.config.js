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
      "borderRadius": {
       "none": 0,
       "": 45
      }
    }
  },
  plugins: []
}
