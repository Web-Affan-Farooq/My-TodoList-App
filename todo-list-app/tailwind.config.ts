import type { Config } from "tailwindcss";

export default {
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
        'blue-sea':"#56c8e8",
      },
      backgroundImage: {
        'custom':"url('/images/background.png')"
      },
      backgroundColor: {
        'blur-1':"rgba(207, 207, 207, 0.4)",
        'blur-2':"rgba(255, 255, 255, 0.5)"
      },
      fontFamily: {
        'primary':"var(--font-poppins)"
      }
    },
  },
  plugins: [],
} satisfies Config;
