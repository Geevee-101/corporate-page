import type { Config } from "tailwindcss";
{
  /*import { imgHero } from "./src/app/assets/images";*/
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "none",
      },
    },
    extend: {
      colors: {
        primary: "#fb923c",
        secondayLight: "#f3f4f6",
        secondaryDark: "#6b7280",
      },
    },
  },
  plugins: [],
};
export default config;
