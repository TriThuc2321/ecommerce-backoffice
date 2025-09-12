'use client';

import { ThemeProvider } from 'next-themes';

import { ThemeMode } from '@/types/common';

type ThemeProvidersProps = {
  children: React.ReactNode;
};

export function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      themes={[ThemeMode.DARK, ThemeMode.LIGHT, ThemeMode.SYSTEM]}
      defaultTheme={ThemeMode.LIGHT}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
