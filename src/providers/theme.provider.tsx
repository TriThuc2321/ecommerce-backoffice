'use client';

import { ThemeMode } from '@/types/common';
import { ThemeProvider } from 'next-themes';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
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
