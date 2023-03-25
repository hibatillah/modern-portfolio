/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#14b8a6",
        tertier: "#7c3aed",
        fait: "#94a3b8",
      }
    },
  },
  plugins: [],
}