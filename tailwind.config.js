/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      backgroundColor: {
        "primary-bg": "#121212",
      },
      screens: {
        tiny: { max: "300px" },
        smaller: { min: "301px", max: "410px" },
        small: { min: "410px", max: "640px" },
        huge: { min: "1980px" },
      },
      colors: {
        "primary-paragraph": "#C4C4C4",
        "form-main": "rgba(196, 196, 196, 0.60)",
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
      addUtilities({
        ".certification-header": {
          background: " linear-gradient(180deg, #C4C4C4 0%, #7E7E7E 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
      addUtilities({
        ".certification-h2": {
          background:
            " linear-gradient(180deg, #FFF 0%, rgba(153, 153, 153, 0.50) 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".stories-banner": {
          background:
            "url('/stories/stories-running.png') lightgray 50% / cover no-repeat",
        },
      });
    },
  ],
};
