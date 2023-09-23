import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "electric-violet": {
          "50": "#fdf2ff",
          "100": "#f9e3ff",
          "200": "#f3c6ff",
          "300": "#ee99ff",
          "400": "#e55dff",
          "500": "#d321ff",
          "600": "#bd00ff",
          "700": "#9e00cf",
          "800": "#8300a9",
          "900": "#6e0689",
          "950": "#4a005e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
