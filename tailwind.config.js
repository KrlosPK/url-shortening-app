/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-desktop": "url('./assets/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('./assets/images/bg-shorten-mobile.svg')",

        "boost-desktop": "url('./assets/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('./assets/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
