/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '24px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1240px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#285500',
          dark: '#1b3a00',
          light: '#3a7700',
        },
        'card-hover': '#EEFFF9',
        accent: {
          DEFAULT: '#8cc63f',
          dark: '#6fa028',
        },
        secondary: '#c9e2b3',
        cream: {
          DEFAULT: '#f2efe6',
          dark: '#e6e2d3',
        },
        ink: {
          DEFAULT: '#1a2a1f',
          muted: '#5c6b62',
        },
        success: '#2e8b3a',
        danger: '#c2412f',
        border: '#dfe5db',
        bg: {
          DEFAULT: '#ffffff',
          alt: '#f7f8f4',
        },
      },
      fontFamily: {
        body: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(31, 74, 44, 0.06)',
        md: '0 12px 32px rgba(31, 74, 44, 0.10)',
        lg: '0 24px 60px rgba(31, 74, 44, 0.15)',
        cta: '0 8px 20px rgba(140, 198, 63, 0.35)',
        mega: '0 24px 40px rgba(31, 74, 44, 0.08)',
      },
      borderRadius: {
        sm: '6px',
        md: '14px',
        lg: '24px',
        pill: '999px',
      },
      maxWidth: {
        container: '1240px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        megaFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        megaFadeIn: 'megaFadeIn 0.22s ease both',
        floatY: 'floatY 4s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-hero':
          'linear-gradient(135deg, #1f4a2c 0%, #143018 60%, #0d2010 100%)',
        'gradient-accent':
          'linear-gradient(135deg, #8cc63f 0%, #6fa028 100%)',
      },
    },
  },
  plugins: [],
};
