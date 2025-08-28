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
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        dark: {
          extend: 'dark',
          colors: {
            background: '#0A0F1C',
            foreground: '#E2E8F0',
            primary: {
              50: '#0B1426',
              100: '#0F1B35',
              200: '#142544',
              300: '#1A2F53',
              400: '#1F3962',
              500: '#244371',
              600: '#2B4F80',
              700: '#325B8F',
              800: '#39679E',
              900: '#4073AD',
              DEFAULT: '#244371',
              foreground: '#E2E8F0',
            },
          },
        },
        light: {
          extend: 'light',
          colors: {
            primary: {
              50: '#ffffff',
              100: '#ecf1f4',
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
            background: '#ffffff',
            foreground: '#0A0F1C',
          },
        },
      },
    }),
  ],
};

export default config;
