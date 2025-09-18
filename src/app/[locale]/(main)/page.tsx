import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const DashboardPage = dynamic(() => import('@/appPages/dashboard'));

export default async function Page() {
  return <DashboardPage />;
}

export const metadata: Metadata = {
  title: 'Home',
};
