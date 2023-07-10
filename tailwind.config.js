/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-xs': "url('/assets/home/background-home-mobile.jpg')",
        'home-sm': "url('/assets/home/background-home-tablet.jpg')",
        'home-md': "url('/assets/home/background-home-desktop.jpg')",
        'destination-xs': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-sm': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-md': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-xs': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-sm': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-md': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology-xs': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-sm': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-md': "url('/assets/technology/background-technology-desktop.jpg')",
      },
      outlineWidth: {
        30: '30px',
        40: '40px'
      },
      keyframes: {
        fadeEntrance: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      }
    },
    colors: {
      'main-white': '#E5E7DC',
      'white-opacity' : 'rgba(255, 255, 255, 0.1)'
    },
    fontFamily : {
      'barlow': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif']
    }
  },
  plugins: [],
}

