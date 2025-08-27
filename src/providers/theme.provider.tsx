'use client';

import { ThemeMode } from '@/types/common';
import { ThemeProvider } from 'next-themes';

type ThemeProvidersProps = {
  children: React.ReactNode;
};

export function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      themes={[ThemeMode.DARK, ThemeMode.LIGHT, ThemeMode.SYSTEM]}
      defaultTheme={ThemeMode.SYSTEM}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
