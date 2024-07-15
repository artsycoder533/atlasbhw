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
        'accent': '#329c9c',
        'secondary-accent': '#8fcacc',
        'primary-brown': '#57433f',
        'primary-text': '#57433f',
        'primary-black': '#1b1b1b',
        'primary-gray': '#d3d3d3',
        'primary-white': '#fffafa',
      }
    },
  },
  plugins: [],
};
export default config;
