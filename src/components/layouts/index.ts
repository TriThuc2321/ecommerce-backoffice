'use client';

import dynamic from 'next/dynamic';

export const ThemeSwitch = dynamic(() => import('./switchTheme'), {
  ssr: false,
});
