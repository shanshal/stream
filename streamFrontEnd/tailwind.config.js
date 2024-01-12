/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary_text': '#f8f9fa',
        'background': '#212529',
        'secondary_text': '#E9ECEF',
        'sec': '#343A40'
      }
    },
  },
  plugins: [],
}