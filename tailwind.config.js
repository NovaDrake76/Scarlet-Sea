/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('../img/background.jpg')",
        register: "url('../img/register.jpg')",
        sdBackground: "url('../img/wip.jpg')",
      },
    },
  },
  plugins: [],
}
