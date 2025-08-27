'use client';

import { type ReactNode, useState } from 'react';
import Sidebar from './sidebar';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSetIsOpen = (isOpen: boolean) => setIsOpen(isOpen);

  return (
    <div className="bg-primary-50 flex h-screen w-full flex-col gap-4 p-4 pr-0 md:flex-row">
      <Sidebar isOpen={isOpen} handleOpen={handleSetIsOpen} />

      <div className="flex w-full flex-col gap-4 overflow-x-auto overflow-y-hidden pr-4">
        <p>Header</p>
        {children}
      </div>
    </div>
  );
}
