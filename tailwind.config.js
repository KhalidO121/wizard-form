/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
