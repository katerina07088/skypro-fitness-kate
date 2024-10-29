/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        gray: "#999999",
        "light-gray": "#F7F7F7",
        green: "#BCEC30",
        "light-green": "#C6FF00",
        "blue": "#00C1FF"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
