/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./icons/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/images/herobg.png')",
      },
      keyframes: {
        sparkle: {
          "0%": {
            transform: "scale(0) rotate(0deg)",
          },
          "50%": {
            transform: "scale(1) rotate(90deg)",
          },
          "100%": {
            transform: "scale(0) rotate(180deg)",
          },
        },
        "grow-and-shrink": {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(180deg)",
          },
        },
      },
      animation: {
        sparkle: "sparkle 700ms forwards",
        "grow-and-shrink": "grow-and-shrink 700ms forwards",
        spin: "spin 1000ms linear forwards",
      },
    },
  },
  plugins: [],
};
