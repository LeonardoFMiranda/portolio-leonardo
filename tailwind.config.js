/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        surface: "#1F1F1F",
        muted: "#3A3A3A",
        accent: "#9CA3AF",
        innerCard: "#0d0d0f"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
}