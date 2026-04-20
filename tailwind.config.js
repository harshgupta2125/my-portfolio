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
        'grid-pattern': 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)',
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 3s ease-in-out infinite",
        glitch: "glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        scan: "scan 8s linear infinite",
        typewriter: "typewriter 3.5s steps(40, end)",
        blink: "blink 0.7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      blur: {
        '3xl': '64px',
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 70, 140, 0.3)',
        'terminal-lg': '0 0 40px rgba(0, 70, 140, 0.4)',
      }
    },
  },
  plugins: [],
};
