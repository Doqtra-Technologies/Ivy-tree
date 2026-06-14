import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "sp-8": "8px",
        "sp-16": "16px",
        "sp-24": "24px",
        "sp-32": "32px",
        "sp-48": "48px",
        "sp-64": "64px",
        "sp-96": "96px",
        "sp-128": "128px",
      },
      maxWidth: {
        "outer": "1440px",
        "content": "1280px",
        "text": "720px",
      },
      fontSize: {
        "hero-desktop": ["90px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-tablet": ["56px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "hero-mobile": ["40px", { lineHeight: "1.1", letterSpacing: "0.5px" }],
      },
      colors: {
        brand: {
          dark: "#0a0b0a",
          secondary: "#121412",
          tertiary: "#1a1c1a",
          gold: "#c5a059",
          goldBright: "#e5c158",
          crimson: "#8b1e23",
          crimsonHover: "#a6242a",
          green: "#0e3b21",
          greenLight: "#1b5e34",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
