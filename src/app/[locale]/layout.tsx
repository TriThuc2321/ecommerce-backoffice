import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { AccessProvider, HeroUIProvider, ThemeProviders } from '@/providers';

import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }];
}

export const experimental_ppr = true;
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    template: '%s | Toards',
    default: 'Toards',
  },
  description: 'Toards',
  openGraph: {
    title: {
      template: '%s | Toards',
      default: 'Toards',
    },
    description: 'Toards Dashboard',
    images: ['/images/logo.png'],
  },
};

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
        <NextIntlClientProvider>
          <HeroUIProvider>
            <ThemeProviders>
              <AccessProvider>{children}</AccessProvider>
            </ThemeProviders>
          </HeroUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
