/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        marquee: {
          "0%": { transform: "translate3d(calc(-25%), 0, 0)" },
          "100%": { transform: "translate3d(calc(-50%), 0, 0)" },
        },
      },
      animation: {
        "spin-slow": "wiggle 3s linear infinite",
        marquee: "marquee 5s linear infinite",
      },
    },
  },
  plugins: [],
};
