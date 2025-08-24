import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { APP_BASE_URL } from "@/constants/app";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(APP_BASE_URL),
    title: {
        default: "CMS",
        template: "%s - CMS",
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
