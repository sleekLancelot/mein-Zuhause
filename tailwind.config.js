/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      clashDisplay: ["Clash Display", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        // primary: "#050816",
        primary: "#1D2026",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        transparent_black: 'rgba(0, 0, 0, 0.5)',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/herobg.png')",
        "mobile-hero-image": "url('/src/assets/backgrounds/bg_water.jpg')",
        "desktop-hero-image": "url('/src/assets/backgrounds/BlackWaves.jpg')",
      },
    },
  },
  plugins: [],
};