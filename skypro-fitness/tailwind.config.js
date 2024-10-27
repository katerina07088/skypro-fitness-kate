/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"],
      },
    extend: {
      colors: {
        "gray": "#999999",
        "light-gray": "#F7F7F7",
        "green": "#BCEC30",
        "light-green": "#C6FF00",
        "blue": "#00C1FF"
      },
    }
  },
  plugins: [],
};
