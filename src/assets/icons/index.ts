import dynamic from 'next/dynamic';
import type { SVGProps } from 'react';

export const FlagUSIcon = dynamic<SVGProps<SVGSVGElement>>(
  () => import('./flag-us.svg'),
);
export const FlagVNIcon = dynamic<SVGProps<SVGSVGElement>>(
  () => import('./flag-vi.svg'),
);
