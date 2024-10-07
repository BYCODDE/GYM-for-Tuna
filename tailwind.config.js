/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      backgroundColor: {
        "primary-bg": "#121212",
      },
      screens: {
        tiny: { max: "300px" },
        smaller: { min: "301px", max: "410px" },
      },
      colors: {
        "primary-paragraph": "#C4C4C4",
      },
      backgroundImage: {
        "header-girl": "url('/home/mobile/header-img-girl.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gradient-main": {
          background: "linear-gradient(180deg, #C4C4C4 0%, #7E7E7E 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });

      addUtilities({
        ".about-trainer": {
          background:
            'url("/home/mobile/mobile-about-girl.png") lightgray 0px -24.498px / cover no-repeat',
          "background-position": "center",
        },
      });

      addUtilities({
        ".gradient-header": {
          background: " linear-gradient(180deg, #D7FD44 0%, #5C6B20 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
