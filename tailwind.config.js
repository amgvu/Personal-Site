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
      classes: ['fadeInDown',
                'fadeInLeft',
                'fadeInUp',
                'fadeIn', 'fadeInRight',
                'zoomIn',
                'delay',
                'delay-1s',
                'delay-2s',
                'delay-3s',
                'delay-4s',
                'delay-5s',
                'delay-0.5s'
              ]
    },
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    backgroundImage: {
      'mobilebg': "url('../public/mobilebg.png')",
      'bgbig': "url('../public/bgbig.png')"
    },
>>>>>>> Stashed changes
=======
    backgroundImage: {
      'mobilebg': "url('../public/mobilebg.png')",
    },
>>>>>>> master
    extend: {
      'animation': {
        'text':'text 15s ease infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'] // Include Noto Sans as the primary sans-serif font
      },
    },
  },
  plugins: [
    require("tailwindcss-animatecss"),
  ],
};

