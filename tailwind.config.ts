import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";
/*
!NOTE: using the uploadthing css library in layout breaks the site, must wrap with withUt
*/
export default withUt( {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
}) satisfies Config;
