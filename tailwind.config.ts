import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue", sans-serif'] // Add Bebas Neue font
      },
      boxShadow: {
        'bottom-only': '0 5px 0px -3px rgba(0, 0, 0, 0.3)', // Custom bottom-only shadow
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
