import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  response.headers.delete('X-Frame-Options');
  response.headers.set(
    'Content-Security-Policy',
    "frame-ancestors 'self' *;"
  );

  return response;
}

export const config = {
  matcher: '/:path*',
};
