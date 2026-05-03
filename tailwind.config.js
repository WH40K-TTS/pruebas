/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Estetica Guena" - Premium Dark Gaming
        brand: {
          darkest: '#05070a',    // Fondo principal
          deep: '#0f172a',       // Fondos secundarios / Cards
          accent: '#facc15',     // Amarillo Dorado vibrante (Primary)
          highlight: '#fbbf24',  // Dorado brillante para hover
          danger: '#ef4444',     // Crimson para alertas/errores
          muted: '#64748b',      // Slate 500 para texto secundario
        },
        slate: {
          950: '#05070a',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        }
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'premium-glow': 'radial-gradient(circle at center, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(rgba(250, 204, 21, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '50px 50px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(250, 204, 21, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}