'use client';

import type { QueryClientProviderProps } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { getQueryClient } from './reactQuery.config';

export const ReactQueryProvider = ({
  children,
  ...rest
}: Omit<QueryClientProviderProps, 'client'>) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient} {...rest}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
    </QueryClientProvider>
  );
};
