import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import ENV from './configs/env';
import { routing } from './i18n/routing';

const i18nMiddleware = createMiddleware(routing);

function authMiddleware(req: NextRequest) {
  const accessToken = req.cookies.get(ENV.COOKIE.ACCESS_TOKEN_NAME)?.value;
  const path = `/${req.nextUrl.pathname.split('/').slice(2).join('/')}`;
  const isProtectedRoute =
    path === '/' || protectedRoutes.some(route => path.startsWith(route));
  const isAuthHandlerRoute = authHandlerRoutes.includes(path);
  if (isProtectedRoute && !accessToken) {
    if (path === '/login') return NextResponse.next();

    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('from', path);

    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  if (isAuthHandlerRoute && accessToken)
    return NextResponse.redirect(new URL('/', req.nextUrl), { status: 303 });

  return NextResponse.next();
}

export default async function middleware(req: NextRequest) {
  const response = i18nMiddleware(req);

  if (!response?.ok) {
    // response not in the range 200-299 (usually a redirect)
    // no need to execute the auth middleware
    return response;
  }

  return authMiddleware(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};

const protectedRoutes = [
  '/online-tests',
  '/students',
  '/teachers',
  '/users',
  '/roles',
];
const authHandlerRoutes = ['/login'];
