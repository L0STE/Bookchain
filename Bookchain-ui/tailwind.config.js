/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'LandingTitle': '46px',
        'ProfileRegisterTitle': '30px',
        'ProfileSmall': '8px',
      },
      borderWidth: {
        'half': '0.5px',  // Defining the custom border width here
      },
    },
  },
  plugins: [],
}
