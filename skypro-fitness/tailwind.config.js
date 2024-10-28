/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Оставляем часть из локальной версии
        'sans': ['Roboto', 'sans-serif'],   // Оставляем часть из удаленной версии
      },
      colors: {
        "gray": "#999999",
        "light-gray": "#F7F7F7",
        "green": "#BCEC30",
        "light-green": "#C6FF00",
      },
    },
    container: {
      center: true, // Добавляем конфигурацию контейнера из удаленной версии
    },
  },
  plugins: [],
};

