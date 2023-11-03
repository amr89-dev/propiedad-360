/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
      },
      boxShadow: {
        "3xl": "4px 4px #000000",
      },
    },
  },
  plugins: [],
};
