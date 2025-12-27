/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#93c5fd",

      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "360px",
        tab: "900px",
        desk: "1200px",
      },
    },
  },
  plugins: [],
}
