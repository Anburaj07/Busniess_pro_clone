/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  fontFamily: {
    sans: ["Source Sans 3", "sans-serif"],
  },
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', 
      },
    },
  },
  plugins: [],
}
