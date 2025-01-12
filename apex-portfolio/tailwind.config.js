/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#FFFFFF",
      greyam: "#424242",
      black: "#000000",
      "blue-am": "#343D6F",
      "blue-jean": "#59B9E1",
      "blue-yk": "#1C1B3B",
      "purple-am": "#4A2245",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      backgroundImage: {
        blackLogo: "url('/src/assets/blackLogo.svg')",
        whiteLogo: "url('src/assets/whiteLogo.svg')",
        sphere: "url('../../../src/assets/Sphere2.svg')",
      },
      zIndex: {
        1: "1",
        100: "100",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
