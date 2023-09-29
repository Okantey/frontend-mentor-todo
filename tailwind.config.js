/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        BrightBlue: "hsl(220, 98%, 61%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: "hsl(236, 9%, 61%)",
        // Dark colors
        VeryDarkBlue: "hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlueDark: "hsl(234, 39%, 85%)",
        LightGrayishBlueHover: "hsl(236, 33%, 92%)", //(hover)
        DarkGrayishBlueDark: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlueDark: "hsl(233, 14%, 35%)",
        VeryDarkGrayishBlueLow: "hsl(237, 14%, 26%)",


      },
      fontFamily: {
        poppins: ["Cabin", "sans-serif"]
      },
      backgroundImage: {
        'mobile-header-light': "url('/images/bg-mobile-light.jpg')",
        'mobile-header-dark': "url('/images/bg-mobile-dark.jpg')",
        'desktop-header-light': "url('/images/bg-desktop-light.jpg')",
        'desktop-header-dark': "url('/images/bg-desktop-dark.jpg')",
        'moon': "url('./images/icon-moon.svg')",
        'sun': "url('./images/icon-sun.svg')",
      },
      container: {
        center: true,
      }

    },
  },
  plugins: [],
}