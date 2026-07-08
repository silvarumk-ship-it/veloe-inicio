import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Cores alinhadas com a marca e acessibilidade
      colors: {
        veloe: {
          navy: "#1d1b84",       // Azul principal
          "navy-dark": "#0f0e5c",// Azul escuro para hover
          cyan: "#26d0e0",       // Azul claro / destaque
          green: "#25d366",      // Verde WhatsApp
          light: "#eef0f8",      // Fundo claro
          gray: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
        },
      },
      // Fontes otimizadas para leitura e SEO
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      // Animações suaves
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
