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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryPalette: "#416954",
        secondaryPalette: "#D9D9D9",
        redPalette: "#FF0000",
        whitePalette: "#FFFFFF",
        greyPalette: "#828282",
        blackPalette: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
export default config;
