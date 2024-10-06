/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        tiny: { max: "300px" },
        smaller: { min: "301px", max: "410px" },
      },
    },
  },
  plugins: [],
};
