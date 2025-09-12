import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('DashboardPage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
};
