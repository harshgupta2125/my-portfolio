/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Merriweather", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Legacy palette
        deepNight: '#0f0c29',
        deepPurple: '#302b63',
        darkGray: '#24243e',
        glowPurple: '#8e2de2',
        glowTeal: '#00c9ff',
        navy: '#00468C',
        charcoal: '#0A0A0A',
        offwhite: '#F9FAFB',

        // Semantic palette: Royal Navy & Alabaster (Day/Night)
        'primary': '#00468C', // Day: Oxford Blue
        'primary-dark': '#38BDF8', // Night: Sky Blue

        'background': '#F9FAFB', // Day: Alabaster
        'background-dark': '#0F172A', // Night: Rich Midnight

        'surface': '#FFFFFF', // Day: Pure White
        'surface-dark': '#1E293B', // Night: Lighter Midnight

        'text-main': '#1A1A1A', // Day: Charcoal
        'text-main-dark': '#E2E8F0', // Night: Soft Silver
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
