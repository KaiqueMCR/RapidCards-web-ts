/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        herofix: "540px",
      },
      fontFamily: {
        title: "Josefin Sans, sans-serif",
        text: "Open Sans, sans-serif",
        logo: "Montserrat, sans-serif",
      },
    },
    plugins: [],
  },
};
