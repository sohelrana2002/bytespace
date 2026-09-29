import type { Config } from "tailwindcss";

/**
 * Design tokens taken from the ByteSpace Figma file
 * (Colors, Typography and Layout Grid pages).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Black" neutral scale
        neutral: {
          50: "#f5f5f6",
          100: "#e5e6e8",
          200: "#ced0d3",
          300: "#abaeb5",
          400: "#82868e",
          500: "#666973",
          600: "#585a62",
          700: "#4b4c53",
          800: "#424348",
          900: "#3a3b3f",
          950: "#242528",
        },
        // "Electric Violet" primary scale (it is actually blue in the design)
        primary: {
          50: "#e7f6ff",
          100: "#d3eeff",
          200: "#b0ddff",
          300: "#81c5ff",
          400: "#4f9dff",
          500: "#2872ff",
          600: "#0445ff",
          700: "#0043ff",
          800: "#003be2",
          900: "#0b36a4",
          950: "#071e5f",
        },
        // "Crimson" secondary scale (it is actually lime in the design)
        secondary: {
          50: "#fdffe4",
          100: "#faffc5",
          200: "#f2ff92",
          300: "#e4ff54",
          400: "#d4fb20",
          500: "#cbfc01",
          600: "#8cb400",
          700: "#6a8902",
          800: "#546b09",
          900: "#465a0d",
          950: "#243300",
        },
        ink: "#040819",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        body: [
          "Satoshi",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        // Poppins SemiBold, line-height 120%
        "heading-l": ["4.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-m": ["2.75rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-s": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-xs": ["1.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        // Satoshi Regular, line-height 160%
        "body-l": ["1.125rem", { lineHeight: "1.6" }],
        "body-m": ["1rem", { lineHeight: "1.6" }],
        "body-s": ["0.875rem", { lineHeight: "1.6" }],
        "body-xs": ["0.75rem", { lineHeight: "1.6" }],
        // Satoshi Medium, line-height 120%
        "label-l": ["1.125rem", { lineHeight: "1.2", fontWeight: "500" }],
        "label-m": ["1rem", { lineHeight: "1.2", fontWeight: "500" }],
        "label-s": ["0.875rem", { lineHeight: "1.2", fontWeight: "500" }],
        "label-xs": ["0.75rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
