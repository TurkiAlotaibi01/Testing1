/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: [
          "IBM Plex Sans Arabic",
          "Readex Pro",
          "Alexandria",
          "Tajawal",
          "Cairo",
          "Noto Sans Arabic",
          "Segoe UI",
          "Tahoma",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        bedtime: {
          navy: "#111B3F",
          ink: "#1E2550",
          purple: "#8B7AF0",
          lavender: "#DDD8FF",
          blue: "#BFE9FF",
          cream: "#FFF6DD",
          yellow: "#FFD66B",
          rose: "#FFD9E0"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 27, 63, 0.18)",
        glow: "0 18px 45px rgba(255, 214, 107, 0.28)"
      }
    }
  },
  plugins: []
};
