import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla-VariableFont_wght"],
        logo: ["Macondo-Regular"],
        title: ["MochiyPopOne-Regular"],
        price: ["Kalam-Regular"],
        signature: ["QwitcherGrypen-Regular"],
        poppins: [
          '"Poppins", sans-serif',
        ],
        "poppins-italic": [
          '"Poppins", sans-serif',
          "italic",
        ],
      },
      colors: {
        matcha: {
          50: "#F5FFF5", // Lightest green for background
          100: "#527427", // Light green (titles)
          200: "#E4ECA4", // Light green
          300: "#a3c293", // Matcha green
          400: "#B2C9AB", // Matcha green
          700: "#485F3C", // Dark green
          footer: "#f6fbe2", // Footer green
        },
        coffee: {
          900: "#3f291f", // Coffee brown
          800: "#4d3b2b",
          600: "#795548",
        },
        background: {
          primary: "#fdfbf3",
          secondary: "#F7F7F7",
        },
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        extra: "1.04rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      keyframes: {
        "fade-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-15px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-right": "fade-right 1s ease infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
