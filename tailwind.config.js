// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // if using /pages too
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        ...defaultScreens, // ✅ keep default breakpoints
        "3xl": "1720px",
        "4xl": "2250px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      extend: {
        colors: {
          primary: { 800: "#0D1B2A", 900: "#0A1622", 950: "#050D17" },
          accent: { 400: "#58C6F4", 700: "#1A7FAE" },
          "sky-blue": { 500: "#38BDF8", 600: "#0EA5E9", 700: "#0369A1" },
          green: { 400: "#34D399" },
        },
      },
    },
  },
  plugins: [],
};
