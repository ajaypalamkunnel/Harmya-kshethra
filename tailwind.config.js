/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#000000",
          surface: "#0A0A0A",
          card: "#111111",
          border: "#1F1F1F",
        },
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFE44D",
          dark: "#C5A000",
          glow: "rgba(255, 215, 0, 0.15)",
          border: "rgba(255, 215, 0, 0.25)",
        },
        gray: {
          muted: "#A1A1AA",
          subtle: "#71717A",
          dark: "#18181B",
        }
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #B38F00 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.95) 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(255, 215, 0, 0.08) 0%, transparent 70%)",
      },
      animation: {
        "slow-zoom": "zoom 20s infinite alternate ease-in-out",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s infinite ease-in-out",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        }
      }
    },
  },
  plugins: [],
};
