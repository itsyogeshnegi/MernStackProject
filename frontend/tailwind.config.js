/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Headline: '"Platypi", serif',
        Paraline:'"Roboto Mono", monospace'
      },
      colors: {
        baseColor: "#101015",
        primaryColor: "#506385",
        secendaryColor: "#F1F0E1",
      },
    },
  },
  plugins: [],
};