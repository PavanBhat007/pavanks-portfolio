/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "var(--color-neon)",
        main: "var(--bg-main)",
      },
    },
  },
  safelist: [
    "text-emerald-400", "bg-emerald-400",
    "text-cyan-400", "bg-cyan-400",
    "text-purple-400",
    "text-pink-400",
    "text-yellow-400", "bg-amber-400",
    "text-orange-400", "bg-orange-300",
    "text-blue-400",
  ],
  plugins: [require("@tailwindcss/typography")],
};
