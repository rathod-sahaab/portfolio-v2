/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      fg: {
        100: "#fefefe",
        200: "#aeaeae",
      },
      bg: {
        100: "black",
        200: "#1b1b1b",
      },
      transparent: "rgba(254, 245, 230, 0.16)",
      link: "#5599ff",
    },
    fontSize: {
      title: "10em",
    },
    fontFamily: {
      heading: ["Poppins", "Inter", "sans-serif"],
      base: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {},
  },
}
