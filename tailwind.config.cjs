/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3.7rem"
      },

      backgroundImage: {
        heroBg: 'url(/src/assets/background.jpg)',
      },

      fontFamily: {
        Barlow: "Barlow Condensed",
        Bellefair: "Bellefair"
      }
    },
  },
  plugins: [],
}
