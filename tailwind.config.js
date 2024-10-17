/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#EAE9E5',
        l_color_o: {
          DEFAULT: "#CD612D",
          600: "#A25F3B",
        },
        l_color_v: {
          DEFAULT: "#47797A",
          600: "#3C5050",
        },
        l_color_r: {
          DEFAULT: "#9D1A2E",
          600: "#742732",
        },
        l_color_y: {
          DEFAULT: "#BBB237",
          600: "#908A42",
        },
        l_color_Fondo: {
          DEFAULT: "#DAD6D3",
        },
      },
      fontFamily: {
        loto: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

