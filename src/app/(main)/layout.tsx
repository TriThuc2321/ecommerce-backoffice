import MainLayoutClient from '@/components/layouts/mainLayout';
import Loader from '@/components/shared/Loader';
import { AccessProvider } from '@/providers';
import { type ReactNode, Suspense } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <AccessProvider>
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Loader />
          </div>
        }
      >
        <MainLayoutClient>{children}</MainLayoutClient>
      </Suspense>
    </AccessProvider>
  );
}
