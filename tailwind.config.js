/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        'side-right': "url('public/images/sideRight.png')",
      }),
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        strongPink: '#BD147A',
        boldPink: '#BA1578',
        regularPink: '#ED4998',
        lightPink: '#FF8AC8',
        boldGray: '#454545',
        regularGray: '#D9D9D9',
        lightGray: '#EEEEEE',
        mediumGray: "#c1bfbf",
        google: "#334155",
        inputForm: "#f3f1ff",
        buttonDisabled: "#d9d7e5",
        lowGray: "#9da4b0",
        mediumPink: "#DE78AE",
        medium2Pink: "#dc368d",
        mediumGrayDarkMode: "#444444", 
        strongGray: "#2c2c2c",
        mediumPinkDark: "#e364a5",
        lowGrayDark: "#797979",
      
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },

        },
      },
      borderRadius: {
        sm: "0.38rem",
        md: "1rem",
        xl: "1.25rem",
      },
      fonts: {
        poppinsLight: {
          family: "Poppins",
          weight: "300",
        },
        poppinsRegular: {
          family: "Poppins",
          weight: "400",
        },
        poppinsBold: {
          family: "Poppins",
          weight: "700",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      
    }
  })],
};
