// tailwind.config.js
module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50", // slate-800
        secondary: "#34495E", // slate-700
        accent: "#8E44AD", // purple-600 - Updated to purple theme
        'accent-light': "#BB6BD9", // purple-400
        'accent-dark': "#6C3483", // purple-700
        background: "#FEFEFE", // gray-50
        surface: "#F8F9FA", // gray-100
        'text-primary': "#2C3E50", // slate-800
        'text-secondary': "#6C757D", // gray-500
        success: "#27AE60", // green-600
        warning: "#F39C12", // orange-500
        error: "#E74C3C", // red-500
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8E44AD 0%, #BB6BD9 50%, #A569BD 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #6C3483 0%, #8E44AD 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(142, 68, 173, 0.1) 0%, rgba(187, 107, 217, 0.05) 100%)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 6vw, 3rem)',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(142, 68, 173, 0.08)',
        'hover': '0 4px 16px rgba(142, 68, 173, 0.12)',
        'accent': '0 8px 32px rgba(142, 68, 173, 0.15)',
      },
      borderRadius: {
        'default': '8px',
      },
      transitionDuration: {
        'fast': '200ms',
        'medium': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'ambient-float': 'ambientFloat 6s ease-in-out infinite',
        'loading': 'loading 1.5s infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        ambientFloat: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-2px)',
          },
        },
        loading: {
          '0%': {
            'background-position': '200% 0',
          },
          '100%': {
            'background-position': '-200% 0',
          },
        },
        gradientShift: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
      },
      gridTemplateColumns: {
        'asymmetric': '2fr 1fr',
      },
    },
  },
  plugins: [],
}