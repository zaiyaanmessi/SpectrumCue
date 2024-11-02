// tailwind.config.js
module.exports = {
  // important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cffaa",
        reactBlue: "#61dafbaa",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      dropShadow: {
        "logo-hover": "0 0 2em var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
