/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.jpg')",
        register: "url('/register.jpg')",
        sdBackground: "url('/wip.jpg')",
      },
    },
  },
  plugins: [],
}
