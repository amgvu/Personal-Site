/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animatedSettings: {
      animationDelaySpeed: 700,
      animatedSpeed: 500,
      classes: [
        "fadeInDown",
        "fadeInLeft",
        "fadeInUp",
        "fadeIn",
        "fadeInRight",
        "zoomIn",
        "delay",
        "delay-1s",
        "delay-2s",
        "delay-3s",
        "delay-4s",
        "delay-5s",
        "delay-0.5s",
      ],
    },
    backgroundImage: {
      mobilebg: "url('../public/mobilebg.png')",
    },
    extend: {
      animation: {
        text: "text 15s ease infinite",
      },
      fontFamily: {
        geist: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
