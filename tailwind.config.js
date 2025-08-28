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
          50: '#ecf1f4',
          100: '#DDF3F8',
          200: '#CBEDF6',
          300: '#97DAED',
          400: '#63C8E3',
          500: '#2FB5DA',
          600: '#1F8EAD',
          700: '#156479',
          800: '#0C3945',
          900: '#030E11',
          DEFAULT: '#156479',
          foreground: '#ffffff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
