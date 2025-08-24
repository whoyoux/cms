import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { APP_BASE_URL, APP_NAME } from "@/constants/app";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const commonMetadata = {
    title: APP_NAME,
    description:
        "Modern content management system (CMS) with intuitive interface and advanced features",
    images: [
        {
            url: "/opengraph-image",
            width: 1200,
            height: 630,
            alt: "CMS - Content Management System",
        },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(APP_BASE_URL),
    title: {
        absolute: commonMetadata.title,
        default: commonMetadata.title,
        template: `%s - ${commonMetadata.title}`,
    },
    description: commonMetadata.description,
    keywords: ["CMS", "content management", "blog", "website", "next.js"],
    authors: [{ name: "whx", url: "https://whoyoux.com" }],
    creator: "whx",
    publisher: "whx",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: APP_BASE_URL,
        siteName: commonMetadata.title,
        title: commonMetadata.title,
        description: commonMetadata.description,
        images: commonMetadata.images,
    },
    twitter: {
        card: "summary_large_image",
        title: commonMetadata.title,
        description: commonMetadata.description,
        images: [commonMetadata.images[0].url],
        creator: "@whoyoux",
        site: "@cms",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${interSans.variable} font-sans antialiased`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
