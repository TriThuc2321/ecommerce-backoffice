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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        typography: 'var(--color-typography)',
        'typography-secondary': 'var(--color-typography-secondary)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;
