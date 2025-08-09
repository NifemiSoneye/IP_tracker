/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('images/pattern-bg-desktop.png')",
        "mobile-pattern": "url('images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
