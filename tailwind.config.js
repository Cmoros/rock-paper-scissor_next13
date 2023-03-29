/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        70: "70vw",
        90: "90vw",
        screen: "100vh",
      },
      minHeight: {
        70: "70vh",
        90: "90vh",
        400: "400px",
        500: "500px",
        600: "600px",
      },
      maxWidth: {
        70: "70vw",
        90: "90vw",
      },
      maxHeight: {
        70: "70vh",
        90: "90vh",
      },
      colors: {
        title: "var(--title)",
        bgc1: "var(--bgc1)",
        bgc2: "var(--bgc2)",
        c1: "var(--c1)",
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
      },
    },
  },
  plugins: [],
};
