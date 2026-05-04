/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#141414",
        surfaceSoft: "#1c1c1c",

        primary: "#c6a35a",
        primaryBright: "#e6c77a",

        accent: "#8b1e1e",
        accentSoft: "#b03a3a",

        text: "#e5e5e5",
        textDim: "#a1a1a1",

        border: "#2a2a2a",
      },

      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        gold: "0 0 12px rgba(198,163,90,0.25)",
      },
    },
  },
  plugins: [],
};