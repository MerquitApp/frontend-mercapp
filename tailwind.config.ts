import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryPalette: '#416954',
        secondaryPalette: '#D9D9D9',
        redPalette: '#FF0000',
        whitePalette: '#FFFFFF',
        greyPalette: '#828282',
        blackPalette: '#1E1E1E'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
export default config;
