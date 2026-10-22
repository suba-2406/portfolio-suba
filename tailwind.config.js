/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: {
          bg: '#FAF5EF',
          surface: '#FFFFFF',
          secondary: '#E9D3BF',
          muted: '#F5EBE1',
          border: '#E7DDD3',
          borderDark: '#D5C4B5',
        },
        terracotta: {
          50: '#FBF7F4',
          100: '#F5ECE1',
          200: '#E9D3BF',
          300: '#D8B597',
          400: '#C4775A', // Secondary accent
          500: '#A85F45', // Primary accent
          600: '#8E4B34', // Hover
          700: '#723A27',
          800: '#5A2D1F',
          900: '#49352D', // Headings
        },
        ink: {
          heading: '#49352D',
          body: '#655A54',
          muted: '#8C7D73',
          light: '#A5978E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(73, 53, 45, 0.05), 0 1px 2px rgba(73, 53, 45, 0.03)',
        'warm-md': '0 4px 12px rgba(73, 53, 45, 0.06), 0 2px 4px rgba(73, 53, 45, 0.04)',
        'warm-lg': '0 12px 30px rgba(73, 53, 45, 0.08), 0 4px 8px rgba(73, 53, 45, 0.04)',
        'warm-xl': '0 20px 40px rgba(73, 53, 45, 0.10)',
        'terracotta': '0 6px 20px rgba(168, 95, 69, 0.25)',
      }
    },
  },
  plugins: [],
}
