import type { MetadataRoute } from "next";
import { APP_BASE_URL } from "@/constants/app";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin/",
        },
        sitemap: `${APP_BASE_URL}/sitemap.xml`,
    };
}
