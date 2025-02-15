import { NextResponse, type NextRequest } from 'next/server';
import { BACKEND_URL } from './constants';

const AUTH_COOKIE_NAME = 'mercapp-auth';
const publicRoutes = ['/login', '/register', '/password-reset', ''];
const protectedRoutes = ['/profile'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const authCookie = req.cookies.get(AUTH_COOKIE_NAME);

  try {
    const response = await fetch(`${BACKEND_URL}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${authCookie?.value}`
      },
      credentials: 'include'
    });

    const isAuth = response.ok;

    if (!isAuth && isProtectedRoute) {
      return NextResponse.redirect(new URL('/login', req.url));
    } else if (isAuth && isPublicRoute) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  } catch (error) {
    console.log(error);
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..+$).*)']
};
