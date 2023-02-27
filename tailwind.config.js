/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#423F71',
        header: '#292841',
        body: '#1C1829',

      },
      screen: {
       'mobile': {
        max: '768px'
       }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}