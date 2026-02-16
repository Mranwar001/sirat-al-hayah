/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        "primary-light": "#374151",
        "primary-dark": "#111827",
        accent: "#d4af37",
        "accent-light": "#e3c468",
        "accent-dark": "#b8942b",
        soft: "#f9fafb",
        "soft-dark": "#f3f4f6",
        islamic: "#2e7d32",
        "islamic-light": "#4caf50",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'arabic': ['Amiri', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}