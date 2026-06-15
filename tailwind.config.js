/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0B0C",
        crimson: "#B11226",
        gold: "#D4AF37",
        cream: "#F8F5F0",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "10%": { opacity: "0.55" },
          "90%": { opacity: "0.55" },
          "100%": { transform: "translateY(-110vh) scale(1.4)", opacity: "0" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        spinSlow: "spin 14s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
