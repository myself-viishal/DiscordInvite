/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#404EED",
        secondry: "#dedcff",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        moving: {
          "0%, 100%": { left: "0%" },
          "50%": { left: "100%" },
        },
        moving2: {
          "0%": {},
          "0%": {},
          "0%": {},
          "0%": {},
          "0%": {},
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        moving: "moving 10s linear infinite",
        moving: "moving2 1s linear infinite",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
