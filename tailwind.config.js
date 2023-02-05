/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "#1D1125",
        "dark-2": "#5C5E66",
        "dark-3": "#463C4B",
        "light-1": "#ffffff",
        "light-2": "#F8F8F8",
        "accent-1": "#FCDEA2",
        "accent-2": "#EDE0F4",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      backgroundImage: {},
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
