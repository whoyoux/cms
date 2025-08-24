import type { MetadataRoute } from "next";
import { getBaseAppUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin/",
        },
        sitemap: `${getBaseAppUrl()}/sitemap.xml`,
    };
}
