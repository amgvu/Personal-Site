/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animatedSettings: {
      animationDelaySpeed: 700,
      animatedSpeed: 500,
      classes: ['fadeInDown', 'fadeInLeft', 'fadeInUp', 'fadeIn', 'fadeInRight', 'zoomIn', 'delay', 'delay-1s', 'delay-2s', 'delay-3s', 'delay-4s', 'delay-5s', 'delay-0.5s']
    },
    extend: {
      'animation': {
            'text':'text 15s ease infinite',
        },
        'keyframes': {
            'text': {
                '0%, 100%': {
                   'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'400% 400%',
                    'background-position': 'right center'
                },
            },
        },
      fontFamily: {
        miracle: "Satoshi",
        monument: "Satoshi",
      },
    },
  },
  plugins: [
      require("tailwindcss-animatecss"),
      require("tailwind-scrollbar-hide"),
  ],
};
