import type { MetadataRoute } from "next";
import { getBaseAppUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: getBaseAppUrl(),
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
