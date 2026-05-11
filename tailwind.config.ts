import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1C',
          50: '#1A2035',
          100: '#151B2E',
          200: '#111827',
          300: '#0D1220',
          400: '#0A0F1C',
          500: '#070B15',
          600: '#04060D',
        },
        electric: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          glow: '#93C5FD',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          glow: '#FCD34D',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        marquee: 'marquee 30s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    typography,
  ],
}

export default config
