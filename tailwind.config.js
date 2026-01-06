/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
      },
      backgroundImage: {
        "custom-pattern": "url('./bgmin.png')",
        "custom-pattern1": "url('./tree.png')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
