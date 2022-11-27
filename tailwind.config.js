/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { screens: {
      'xl': '1350px',
      // => @media (min-width: 992px) { ... }
    },
  },
  },
  plugins: [],
}