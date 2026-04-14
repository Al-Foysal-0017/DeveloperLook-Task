/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#F5F2EA", // স্ক্রিনশটে থাকা হালকা ক্রিম কালার
          brandPink: "#F2A1E2",  // Content creation section
          brandGreen: "#40C78E", // Activation section
          brandBlue: "#2B87FF",  // Data/Organic views section
          brandOrange: "#FF5F2E", // Buttons and Strategy
          brandBlack: "#1A1A1A", 
        },
        borderRadius: {
          '3xl': '2rem', // বড় এবং রাউন্ডেড কর্নারের জন্য
        }
      },
    },
    plugins: [],
  };