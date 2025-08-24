import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        useCache: true,
        cacheComponents: true,
    },
    images: {
        qualities: [25, 50, 75, 100],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uo5t6ssito.ufs.sh",
            },
        ],
    },
};

export default nextConfig;
