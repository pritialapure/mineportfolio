/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { lg: '1080px', xl: '1180px' },
    },
    extend: {
      colors: {
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        surface2: 'var(--c-surface-2)',
        edge: 'var(--c-edge)',
        ink: 'var(--c-ink)',
        muted: 'var(--c-muted)',
        accent: {
          DEFAULT: '#4FD1C5',
          dim: '#2E8B82',
        },
        amber: '#F2B84B',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(140,150,168,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(140,150,168,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}
