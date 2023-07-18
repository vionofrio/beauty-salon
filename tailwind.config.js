/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1120px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        transparent: "transparent",
        current: "current",
        white: "rgb(255 255 255 / <alpha-value>)",
        brand: {
          lighter: "var(--color-brand-lighter)",
          light: "var(--color-brand-light)",
          DEFAULT: "rgb(var(--color-brand) / <alpha-value>)",
          dark: "var(--color-brand-dark)",
        },
        gray: {
          light: "var(--color-gray-light)",
          DEFAULT: "rgb(var(--color-gray) / <alpha-value>)",
          dark: "var(--color-gray-dark)",
        },
      },
      backgroundImage: {
        "section-divide-gradient":
          "linear-gradient(to right, rgb(var(--color-brand)), var(--color-brand-lighter))",
      },
    },
  },
  plugins: [],
};
