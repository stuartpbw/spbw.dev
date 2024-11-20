import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  experimental: { optimizeUniversalDefaults: true },
  theme: {
    screens: {
      sm: "40em",
      md: "48em",
      lg: "64em",
      xl: "80em",
      "2xl": "96em",
    },
    extend: {
      fontFamily: {
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: { container: false },
  plugins: [
    require("@tailwindcss/typography"),

    function ({ addBase, addComponents, addUtilities }) {
      addBase({
        ":root": {
          "--font-body": "'Inter Variable', sans-serif",
        },
      });

      addComponents({
        ".container": {
          maxWidth: "100%",
          marginInline: "auto",
          "@screen sm": {
            maxWidth: "40rem",
          },
          "@screen md": {
            maxWidth: "48rem",
          },
          "@screen lg": {
            maxWidth: "64rem",
          },
          "@screen xl": {
            maxWidth: "80rem",
          },
        },
      });

      addUtilities({
        ".debug *": {
          outline: "1px solid gold",
        },
      });
    },
  ],
};
