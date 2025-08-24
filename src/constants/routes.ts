export const ADMIN_ROUTE_PREFIX = "/admin";

export const ROUTES = {
    ADMIN: {
        SIGN_UP: `${ADMIN_ROUTE_PREFIX}/sign-up`,
        SIGN_IN: `${ADMIN_ROUTE_PREFIX}/sign-in`,
        DASHBOARD: `${ADMIN_ROUTE_PREFIX}/dashboard`,
        MEDIA_FILES: `${ADMIN_ROUTE_PREFIX}/media-files`,
    },
} as const;
