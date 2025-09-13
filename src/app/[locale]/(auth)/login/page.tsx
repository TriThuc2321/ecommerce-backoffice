import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('@/appPages/login'));

export default function Page() {
  return <LoginPage />;
}

export const metadata: Metadata = {
  title: 'Login',
};
