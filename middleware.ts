import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req })
//     const isAuth = !!token
//     const isAuthPage =
//       req.nextUrl.pathname.startsWith("/login") ||
//       req.nextUrl.pathname.startsWith("/register")

//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL("/dashboard", req.url))
//       }

//       return null
//     }

//     if (!isAuth) {
//       let from = req.nextUrl.pathname;
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search;
//       }

//       return NextResponse.redirect(
//         new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
//       );
//     }
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true
//       },
//     },
//   }
// )

// export const config = {
//   matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/register"],
// }
