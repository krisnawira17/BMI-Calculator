/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5E6E85",
        borders: "#D8E2E7",
        white: "#FFFFFF",
        gradientFrom: "hsla(184, 95%, 92%, 0%)",
        gradientTo: "hsl(216, 95%, 92%)",

        gradientBmiFrom: "rgba(52, 95, 246, 1)",
        gradientBmiTo: "rgba(88, 125, 255, 1)",
      },
      boxShadow: {
        bmi: "16px 32px 56px 16px rgba(143, 174, 207, 0.25)",
      },
    },
    fontFamily: {
      inter: "inter, sans-serif",
    },
    fontSize: {
      headingXL: "64px",
      heading: "48px",
      headingM: "24px",
      headingS: "20px",

      bodyM: "16px",
      bodyS: "14px",
    },
  },
  plugins: [],
};
