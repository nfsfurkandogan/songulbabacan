import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        ink: "#0f172a",
        "ink-muted": "#475569",
        "ink-soft": "#64748b",
        sand: "#faf8fc",
        pearl: "#fff0f6",
        brand: {
          DEFAULT: "#e6007e",
          dark: "#bf0068",
          soft: "rgba(230, 0, 126, 0.12)"
        },
        lilac: "#7b61ff",
        border: "rgba(15, 23, 42, 0.12)",
        ring: "rgba(230, 0, 126, 0.28)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 22px 70px rgba(230, 0, 126, 0.18)",
        soft: "0 18px 55px rgba(15, 23, 42, 0.12)",
        lift: "0 30px 90px rgba(15, 23, 42, 0.14)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out"
      },
      backgroundImage: {
        "hero-sheen":
          "radial-gradient(900px 520px at 8% 0%, rgba(230, 0, 126, 0.12), transparent 60%), radial-gradient(900px 520px at 92% 20%, rgba(123, 97, 255, 0.12), transparent 60%), linear-gradient(180deg, #faf8fc, #ffffff)",
        "section-glow":
          "radial-gradient(950px 520px at 0% 15%, rgba(230, 0, 126, 0.16), transparent 60%), radial-gradient(1000px 520px at 100% 10%, rgba(123, 97, 255, 0.14), transparent 60%), radial-gradient(900px 600px at 50% 120%, rgba(15, 23, 42, 0.05), transparent 55%), linear-gradient(180deg, rgba(255, 240, 246, 0.9), transparent 60%)",
        "cta-gradient": "linear-gradient(135deg, #e6007e, rgba(123, 97, 255, 0.9))"
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem"
      }
    }
  },
  plugins: [typography]
};

export default config;
