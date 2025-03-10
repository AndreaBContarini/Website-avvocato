/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B6CA7',
          dark: '#0D1B2A',
          light: '#00A8E8',
          lighter: '#4CC9F0'
        },
        text: {
          light: '#E0E1DD',
          dark: '#293241'
        },
        accent: {
          DEFAULT: '#3D5A80',
          light: '#98C1D9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px'
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neu': '5px 5px 10px #0a1522, -5px -5px 10px #102132'
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
};