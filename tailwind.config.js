/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          600: "#535862",
          700: "#414651",
          800: "#252B37",
          950: "#0A0D12",
        },
        forest: {
          50: "#f3f7f2",
          100: "#e5eee3",
          200: "#cfe0c7",
          300: "#b5cea5",
          400: "#8daf73",
          500: "#6d9052",
          600: "#597842",
          700: "#486237",
          800: "#3e5330",
          900: "#34472a",
        },
        moss: {
          100: "#E6F4D7",
          700: "#3F621A",
          950: "#1A280B",
        },
      },
      fontFamily: {
        display: ['"Merienda One"', "cursive"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(24, 51, 29, 0.12)",
      },
    },
  },
  plugins: [],
};
