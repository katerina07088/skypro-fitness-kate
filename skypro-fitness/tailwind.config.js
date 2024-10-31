/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray": "#999999",
      "light-gray": "#F7F7F7",
      "green": "#BCEC30",
      "light-green": "#C6FF00",
      "blue": "#00C1FF",
      "black": "#000000",
      "while": "#FFFFFF",
      "bgclr": "#FAFAFA",
      "custom": "#f7f7f7",
      "btnbg": "#BCEC30",
      "lightBlue": "#00C1FF",
      "blackRgba": "rgba(0, 0, 0, 0.54)",
      "inputBorder": "#D0CECE",
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      extend: {
        colors: {
          gray: "#999999",
          "light-gray": "#F7F7F7",
          green: "#BCEC30",
          "light-green": "#C6FF00",
          blue: "#00C1FF",
        },
        backgroundImage: {
          yoga: "url('/public/img/yogapic.png')",
          yogamin: "url('/public/img/yogapicmin.png')",
        },
      },
    },
    plugins: [],
  },
