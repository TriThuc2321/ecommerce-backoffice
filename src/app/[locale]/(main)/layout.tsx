import { cookies } from 'next/headers';
import { type ReactNode, Suspense } from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import MainLayout from '@/components/layouts/mainLayout';
import Loader from '@/components/shared/Loader';
import COOKIE from '@/constants/cookie';
import { REACT_QUERY_KEYS } from '@/constants/reactQuery';
import { AccessProvider } from '@/providers';
import { getQueryClient } from '@/providers/reactQuery.config';
import { userApi } from '@/services/apis';
import { setHeaderCookies } from '@/services/axios-instance';

type LayoutProps = {
  children: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const cookieStore = await cookies();
  setHeaderCookies(cookieStore.getAll());

  const queryClient = getQueryClient();

  const initialShowFullMenu =
    cookieStore.get(COOKIE.SHOW_FULL_MENU)?.value === 'true';

  await queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.USER.PROFILE],
    queryFn: userApi.getProfile,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
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
    </HydrationBoundary>
  );
}
