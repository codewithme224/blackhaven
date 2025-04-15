
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        secondary: "#1A1A1A",
        accent: "#333333",
        muted: "#808080",
        interactive: "#4A4A4A",
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
