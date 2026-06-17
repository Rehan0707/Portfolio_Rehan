import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F4FF",
        primary: "#CBB6FF",
        glow: "#B89BFF",
        accent: "#A78BFA",
        ink: "#171717",
        muted: "#6A6A6A",
        line: "rgba(0,0,0,0.08)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(124,92,255,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
        glow: "0 0 80px rgba(184,155,255,0.45)",
        card: "0 20px 60px -20px rgba(80,50,160,0.25)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-24px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "blob-drift": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        "marquee-reverse": "marquee-reverse 36s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "blob-drift": "blob-drift 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
