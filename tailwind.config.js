/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['nexa light'],
        dinpro: ['dinpro'],
        dinprolight: ['dinpro-400'],
        nunito: ['nunitoblack'],
        gohtam: ['gothamrounded'],
        inter: ['intermedium'],
        nunitolight: ['nunitolight']
      },

      backgroundImage: {
        'mobilebg': "linear-gradient(180deg, rgba(24, 24, 24, 0.87) 0%, rgba(34, 34, 34, 0.48) 100%), url('./Images/image2.png')",
        'customgradient': "linear-gradient(90.17deg, rgba(18, 18, 18, 0.88) 1.03%, rgba(18, 18, 18, 0.92) 44.18%, rgba(1, 1, 1, 0) 95.15%)",
        'desktopbg': "linear-gradient(90deg, rgba(24, 24, 24, 0.97) 0%, rgba(34, 34, 34, 0.1) 100%),url('./Images/desktopbg.png')",
        'desktop20bg': "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./Images/twobottel.jpeg')"
      }
    },
  },
  plugins: [],
}

