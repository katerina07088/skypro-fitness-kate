/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'yoga': "url('/public/yogapic.png')",
        'vector':"url('/public/vector.png')",
    },
  },
  plugins: [],
}
}