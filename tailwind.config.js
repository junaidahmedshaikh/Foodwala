/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#f54323",
      white: "#FFFFFF",
      black: "#000000",
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
