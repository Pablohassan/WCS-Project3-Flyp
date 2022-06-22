const colors = require('tailwindcss/colors')


module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: colors.red[700],
      error: colors.red[700],
      ...colors,
    },
  },
  plugins: [],
};
