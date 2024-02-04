import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "display": "var(--display-font)",
      "body": "var(--body-font)",
      },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pokemon": "url('/pokemon.gif')",
        "background2": "url('/background2.gif')"
      },
    },
  },
  plugins: [
      require('tailwindcss-textshadow')
  ],
};
export default config;
