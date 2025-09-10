import { cookies } from 'next/headers';
import { type ReactNode, Suspense } from 'react';

import MainLayout from '@/components/layouts/mainLayout';
import Loader from '@/components/shared/Loader';
import COOKIE from '@/constants/cookie';
import { AccessProvider } from '@/providers';

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();

  const initialShowFullMenu =
    cookieStore.get(COOKIE.SHOW_FULL_MENU)?.value === 'true';

  return (
    <AccessProvider>
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Loader />
          </div>
        }
      >
        <MainLayout initialShowFullMenu={initialShowFullMenu}>
          {children}
        </MainLayout>
      </Suspense>
    </AccessProvider>
  );
}
