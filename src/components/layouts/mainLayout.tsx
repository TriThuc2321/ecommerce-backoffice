'use client';

import { type ReactNode, useState } from 'react';

import Header from './header';
import Sidebar from './sidebar';

type MainLayoutProps = {
  children: ReactNode;
  initialShowFullMenu: boolean;
};

export default function MainLayout({
  children,
  initialShowFullMenu = true,
}: MainLayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSetIsOpen = (isOpen: boolean) => setIsOpen(isOpen);

  return (
    <div className="flex h-screen w-full flex-col overflow-y-hidden pl-0 md:flex-row">
      <Sidebar
        isOpen={isOpen}
        handleOpen={handleSetIsOpen}
        initialShowFullMenu={initialShowFullMenu}
      />

      <div className="bg-secondary-50 m-2 ml-0 flex w-full flex-col gap-4 rounded-xl px-6 py-5">
        <Header />
        {/* <ThemeSwitch /> */}
        {children}
      </div>
    </div>
  );
}
