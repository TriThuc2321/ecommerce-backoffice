'use client';

import { type ReactNode, useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSetIsOpen = (isOpen: boolean) => setIsOpen(isOpen);

  return (
    <div className="bg-primary flex h-screen w-full flex-col gap-4 p-3 pl-0 md:flex-row">
      <Sidebar isOpen={isOpen} handleOpen={handleSetIsOpen} />

      <div className="flex h-full w-full flex-col gap-4">
        <Header />
        <div className="bg-primary-50 flex h-full w-full flex-col gap-4 overflow-x-auto overflow-y-hidden rounded-2xl p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
