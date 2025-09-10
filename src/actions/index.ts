'use server';

import { cookies } from 'next/headers';

import COOKIE from '@/constants/cookie';

export async function storeFullMenuCookie(isOpen: boolean) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE.SHOW_FULL_MENU, isOpen.toString());
}
