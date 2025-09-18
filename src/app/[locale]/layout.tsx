import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import {
  AccessProvider,
  HeroUIProvider,
  ReactQueryProvider,
  ThemeProviders,
  ToastProvider,
} from '@/providers';

import '../globals.css';
import { geistMono, geistSans } from './fonts';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }];
}

export const experimental_ppr = true;
export const dynamic = 'force-dynamic';

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'vi' }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NextIntlClientProvider>
            <HeroUIProvider>
              <ToastProvider placement="top-center" toastOffset={30} />
              <ThemeProviders>
                <AccessProvider>{children}</AccessProvider>
              </ThemeProviders>
            </HeroUIProvider>
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | My English',
    default: 'My English',
  },
  description: 'My English',
  openGraph: {
    title: {
      template: '%s | My English',
      default: 'My English',
    },
    description: 'My English Dashboard',
    images: ['/images/logo.jpeg'],
  },
};
