import type { MetadataRoute } from "next";
import { APP_BASE_URL } from "@/constants/app";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: APP_BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
