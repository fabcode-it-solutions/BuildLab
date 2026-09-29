import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B0F19",
          850: "#0F1421",
          800: "#151C2C",
          750: "#1A2235",
          700: "#1E2A3F",
          600: "#2A3A52",
          500: "#3B4F6A",
          400: "#5A7390",
          300: "#7B93AE",
          200: "#A0B4CC",
          100: "#C5D2E2",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
        },
        accent: {
          DEFAULT: "#E8A838",
          light: "#F0C060",
          dark: "#C48A20",
          muted: "rgba(232, 168, 56, 0.12)",
          glow: "rgba(232, 168, 56, 0.25)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;