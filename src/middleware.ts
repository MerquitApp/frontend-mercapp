import { NextResponse, type NextRequest } from 'next/server';

const AUTH_COOKIE_NAME = 'mercapp-auth';
const publicRoutes = ['/login', '/register', '/password-reset'];
const protectedRoutes = [''];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const authCookie = req.cookies.get(AUTH_COOKIE_NAME);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify`,
      {
        headers: {
          Cookie: `${AUTH_COOKIE_NAME}=${authCookie}`
        }
      }
    );

    if (response.ok && isProtectedRoute) {
      return NextResponse.redirect(new URL('/login', req.url));
    } else if (response.ok && isPublicRoute) {
      console.log('HERE');
      return NextResponse.redirect(new URL('/', req.url));
    }
  } catch (error) {
    console.log(error);
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
