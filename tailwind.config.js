/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: 'slide 1.5s ease-in-out  '
      },
      keyframes: {
        slide : {
          '0%' : { transform:'translateX(-100px)',opacity:0},
          '50%' : { transform:'translateX(-300px)', opacity:1},
          '100%' : {transform:'translateX(0)',opacity:0}
        }
      }
    },
  },
  plugins: [],
}


