import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // If user accesses the root path '/', redirect to default locale '/en'
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

// Match only the root or paths not starting with _next, api, etc.
export const config = {
  matcher: [
    '/', // root
    '/((?!api|_next|.*\\..*).*)', // avoid static files and API
  ],
};
