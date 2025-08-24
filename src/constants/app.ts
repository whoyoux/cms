export const APP_NAME = "CMS";
export const COOKIE_PREFIX = "whx_cms";
export const APP_BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://cms.whoyoux.com"
        : "http://localhost:3000";

export const MAX_FILES_PER_UPLOAD = 5;
export const MAX_FILE_SIZE_IN_MB = 32;
export const MAX_FILE_SIZE = MAX_FILE_SIZE_IN_MB * 1024 * 1024;
