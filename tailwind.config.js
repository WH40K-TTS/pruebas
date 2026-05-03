/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        slate: {
          950: '#0a0f1a',
          900: '#0d1424',
          850: '#111827',
          800: '#1a2236',
          700: '#243047',
          600: '#2e3d5c',
          500: '#3d5070',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        crimson: '#dc2626',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)",
        'hero-gradient':
          'radial-gradient(ellipse at 20% 50%, rgba(251,191,36,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(46,61,92,0.6) 0%, transparent 50%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(251,191,36,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(251,191,36,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
