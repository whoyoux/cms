import { getSessionCookie } from "better-auth/cookies";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ADMIN_ROUTE_PREFIX, ROUTES } from "./constants/routes";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    if (request.nextUrl.pathname.startsWith(ADMIN_ROUTE_PREFIX)) {
        if (
            request.nextUrl.pathname === ROUTES.ADMIN.SIGN_IN ||
            request.nextUrl.pathname === ROUTES.ADMIN.SIGN_UP
        ) {
            if (sessionCookie) {
                const dashboardUrl = new URL(
                    ROUTES.ADMIN.DASHBOARD,
                    request.url,
                );

                return NextResponse.redirect(dashboardUrl);
            }

            return NextResponse.next();
        }

        if (!sessionCookie) {
            const signInUrl = new URL(ROUTES.ADMIN.SIGN_IN, request.url);

            return NextResponse.redirect(signInUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
