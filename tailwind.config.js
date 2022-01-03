const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#710193",
      violet: colors.violet,
      neutral: {
        50: "#262626",
        100: "#222222",
        200: "#1e1e1e",
        300: "#1a1a1a",
        400: "#161616",
        500: "#131313",
        600: "#0f0f0f",
        700: "#0b0b0b",
        800: "#070707",
        900: "#030303",
      },
      grey: {
        50: "#e9e9e9",
        100: "#d3d3d3",
        200: "#bdbdbd",
        300: "#a8a8a8",
        400: "#929292",
        500: "#7c7c7c",
        600: "#676767",
        700: "#515151",
        800: "#3b3b3b",
        900: "#262626",
      },
    },
    extend: {},
  },
  plugins: [],
};
