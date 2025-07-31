/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepNight: '#0f0c29',
        deepPurple: '#302b63',
        darkGray: '#24243e',
        glowPurple: '#8e2de2',
        glowTeal: '#00c9ff',
      },
      backgroundImage: {
        'gradient-night': 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      blur: {
        '3xl': '64px',
      }
    },
  },
  plugins: [],
};
