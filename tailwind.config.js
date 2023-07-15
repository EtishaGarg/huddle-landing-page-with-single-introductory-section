/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hover-button-color': '#E880E8',
        'hover-social-color': '#FF52C1',
      },
      screens: {
        'sm': '375px',
        'lg': '1440px',
      },
      backgroundImage: {
        'desktop-background': "url('/public/images/bg-desktop.svg')",
        'mobile-background': "url('/public/images/bg-mobile.svg')",
      }
    },
  },
  plugins: [],
}

