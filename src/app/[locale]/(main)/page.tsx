import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
