/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
      'outfit':["Outfit","sans-serif"]
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
    },},
  },
  plugins: [],
}

