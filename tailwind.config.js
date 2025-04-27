/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // xl: { max: "1440px" },
      // lg: { max: "976px" },
      // md: { max: "768px" },
      // sm: { max: "480px" },
    },
    // container: {
    //   center: true,
    //   padding: '2rem',
    // },
    extend: {
      colors: {
        primary: "#D90429",
        primaryTint: "#EF233C",
        secondary: "#EDF2F4",
        dark: "#090809",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },

    fontFamily: {
      sans: ["Glory", "sans-serif"],
      // title: ["Livvic", "sans-serif"],
    },
  },
  plugins: [],
});
