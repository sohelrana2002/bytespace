import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // ---------- COLORS ----------
      colors: {
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
        secondary: {
          50: "#fdfe4",
          100: "#fafcf5",
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
      },

      // ---------- FONTS ----------
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },

      // ---------- TYPOGRAPHY SCALE ----------
      fontSize: {
        // Headings (Poppins SemiBold, line-height 120%)
        "heading-l": ["72px", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-m": ["44px", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-s": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-xs": ["20px", { lineHeight: "1.2", fontWeight: "600" }],

        // Body (Satoshi Regular, line-height 160%)
        "body-l": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-m": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-s": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "1.6", fontWeight: "400" }],

        // Labels (Satoshi Medium, line-height 120%)
        "label-l": ["18px", { lineHeight: "1.2", fontWeight: "500" }],
        "label-m": ["16px", { lineHeight: "1.2", fontWeight: "500" }],
        "label-s": ["14px", { lineHeight: "1.2", fontWeight: "500" }],
        "label-xs": ["12px", { lineHeight: "1.2", fontWeight: "500" }],
      },

      // ---------- GRID SYSTEM ----------
      // 12 col, margin 120px, gutter 40px
      // 120*2 (margin) + 11*40 (gutter) = 240 + 440 = 680
      // Design width 1440px → 1440 - 680 = 760 / 12 ≈ 63.33px col
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        gutter: "40px",
        "margin-desktop": "120px",
        "margin-tablet": "48px",
        "margin-mobile": "20px",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gap: {
        gutter: "40px",
      },
    },
  },
  plugins: [],
};

export default config;
