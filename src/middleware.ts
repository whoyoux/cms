import { getSessionCookie } from "better-auth/cookies";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (
            request.nextUrl.pathname === "/admin/sign-in" ||
            request.nextUrl.pathname === "/admin/sign-up"
        ) {
            if (sessionCookie) {
                const dashboardUrl = new URL("/admin/dashboard", request.url);

                return NextResponse.redirect(dashboardUrl);
            }

            return NextResponse.next();
        }

        if (!sessionCookie) {
            const signInUrl = new URL("/admin/sign-in", request.url);

            return NextResponse.redirect(signInUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
