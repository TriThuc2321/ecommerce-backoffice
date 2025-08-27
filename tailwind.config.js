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
          50: '#ecf9fd',
          100: '#c7edfa',
          200: '#a1e2f7',
          300: '#7cd6f4',
          400: '#56caf0',
          500: '#31beed',
          600: '#14aee1',
          700: '#1091bc',
          800: '#0d7496',
          900: '#0a5770',
          DEFAULT: '#073A4B',
          foreground: '#ffffff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
