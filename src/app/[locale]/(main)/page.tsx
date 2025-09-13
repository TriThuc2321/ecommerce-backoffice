import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Button } from '@heroui/button';

export default async function Page() {
  const t = await getTranslations('DashboardPage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Button color="primary">Test</Button>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
};
