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
    <div className="flex h-screen w-full flex-col overflow-y-hidden pl-0 md:flex-row">
      <Sidebar isOpen={isOpen} handleOpen={handleSetIsOpen} />

      <div className="bg-primary-50 m-2 ml-0 flex w-full flex-col gap-4 rounded-xl p-6">
        <Header />
        {children}
      </div>
    </div>
  );
}
