/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html,css,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#F0F2F5",
        green: "#00A884",
      },
    },
  },
  plugins: [],
};
