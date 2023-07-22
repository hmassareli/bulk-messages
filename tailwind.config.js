/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html,css,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayDark: "#A1A1A1",
        grayLight: "#F0F2F5",
        green: "#00A884",
        greenDark: "#009373",
      },
      fontSize: {
        large: "40px",
      },
    },
  },
  plugins: [],
};
