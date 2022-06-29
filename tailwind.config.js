/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.webp')",
        register: "url('/register.webp')",
        sdBackground: "url('/wip.webp')",
        bgAbout: "url('/bgAbout.webp')",
        bgAbout2: "url('/bgAbout2.webp')",
        bgAbout3: "url('/bgAbout3.webp')",
        bgAbout4: "url('/bgAbout4.webp')",
      },
    },
  },
  plugins: [],
}
