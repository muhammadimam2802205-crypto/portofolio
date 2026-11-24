/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#eae4d5',
          light: '#f5f0e3',
          card: '#f1ecdd',
          dark: '#ded5c0',
        },
        ink: {
          DEFAULT: '#171614',
          soft: '#3d3a33',
          muted: '#6b6558',
        },
        accent: {
          DEFAULT: '#7c3131',
          soft: '#a15a4f',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper:
          '0 24px 50px -32px rgba(23,22,20,0.55), 0 2px 6px rgba(23,22,20,0.08)',
        photo:
          '0 18px 35px -20px rgba(23,22,20,0.6), 0 2px 4px rgba(23,22,20,0.12)',
      },
    },
  },
  plugins: [],
}
