const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{js,ts,jsx,tsx,md,mdx}",

],

  theme: {
    extend: {
      colors: {
        // Custom text color
        text: '#22454', // Change this to your desired color value
        background: '#fffaf2', 
      },
      fontFamily: {
        Default: ['verdana', 'sans-serif'], // Custom font family
        Geo: ['Georgia', 'sans-serif'],
        Hel: ['Helvetica', 'sans-serif'],
        sans: ['Helvetica', 'Futura', 'sans-serif'],
      },

      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
};

