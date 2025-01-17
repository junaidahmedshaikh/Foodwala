/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#f54323",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#d6d8db",
      grayDark: "#a9adb0",
      green: "#008000",
      fontGray: "#808080",
      fontDarkGray: "#36454F",
      whiteSmoke: "#F5F5F5",
      redBackground: "#FEE2E2", // bg-red-100
      amber: "#D97706", // text-amber-600
      amberBackground: "#FEF3C7", // bg-amber-100
      brown: "#7C4D25", // text-brown-600
      amberLightBackground: "#FFFBEB", // bg-amber-50
      pink: "#EC4899", // text-pink-500
      pinkBackground: "#FECFE4", // bg-pink-100
      orange: "#F97316", // text-orange-600
      orangeBackground: "#FFEDD5", // bg-orange-100
      greenLight: "#10B981", // text-green-500
      greenBackground: "#D1FAE5", // bg-green-100
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      // font for heading & body
      headingFont: ["Merriweather Sans", "system-ui"],
      bodyFont: ["Noto Sans", "Georgia"],
      logoFont: ["Minal", "sans-serif"],
    },
  },
  plugins: [],
};
