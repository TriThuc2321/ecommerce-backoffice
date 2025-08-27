import { ThemeSwitch } from '@/components/layouts';
import type { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <ThemeSwitch />
    </div>
  );
}
