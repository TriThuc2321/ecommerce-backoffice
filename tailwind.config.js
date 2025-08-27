import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/appPages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
          lg: '0',
        },
        screens: {
          lg: '1248px',
        },
      },
      colors: {
        primary: {
          50: '#f1f8fa',
          100: '#e2f1f5',
          200: '#bfe0e7',
          300: '#97c9d3',
          400: '#6fb1bf',
          500: '#4b99a8',
          600: '#2f8190',
          700: '#19677a',
          800: '#134f5e',
          900: '#0d3843',
          DEFAULT: '#19677a',
          foreground: '#ffffff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
