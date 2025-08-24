export const APP_NAME = "CMS";
export const COOKIE_PREFIX = "whx_cms";
export const APP_BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://cms.whoyoux.com"
        : "http://localhost:3000";
