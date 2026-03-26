import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F5A623",
          orange: "#E8651A",
          green: "#2D9B5C",
          dark: "#1C1C1E",
          darker: "#111111",
          cream: "#FFF8F0",
          "cream-dark": "#F5EDE0",
          "green-light": "#4BAE72",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-caribbean":
          "linear-gradient(135deg, #F5A623 0%, #E8651A 50%, #2D9B5C 100%)",
        "gradient-warm":
          "linear-gradient(180deg, #1C1C1E 0%, #111111 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
