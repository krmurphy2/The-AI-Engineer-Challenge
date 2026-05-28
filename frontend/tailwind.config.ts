import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Wired up to the CSS variable exported by next/font in app/layout.tsx.
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        sentinel: {
          bg: "var(--sentinel-bg)",
          panel: "var(--sentinel-panel)",
          border: "var(--sentinel-border)",
          text: "var(--sentinel-text)",
          muted: "var(--sentinel-muted)",
          accent: "var(--sentinel-accent)",
          "accent-dim": "var(--sentinel-accent-dim)",
          cyan: "var(--sentinel-cyan)",
          danger: "var(--sentinel-danger)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
