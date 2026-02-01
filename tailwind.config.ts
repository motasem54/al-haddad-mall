import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC2626',
          dark: '#991B1B',
          light: '#EF4444',
        },
        secondary: {
          DEFAULT: '#0A0A0A',
          dark: '#000000',
          light: '#1F1F1F',
        },
        accent: {
          gold: '#D4AF37',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
