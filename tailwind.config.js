/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#12141D",
        text1: "#B7B8BB",
        text2: "#FAFAFA",
      },
      backgroundImage:{
        "gradient": "linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)",
        
      }
    },
  },
  plugins: [],
}

