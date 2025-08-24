import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "CMS - System zarządzania treścią";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const interSemiBold = await readFile(
        join(process.cwd(), "src/assets/fonts/Inter_18pt-SemiBold.ttf"),
    );

    return new ImageResponse(
        <div
            style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                color: "white",
                fontFamily: "Inter",
            }}
        >
            {/* Logo/Icon */}
            <div
                style={{
                    width: "120px",
                    height: "120px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "32px",
                    fontSize: "48px",
                    fontWeight: "bold",
                    backdropFilter: "blur(10px)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                📝
            </div>

            {/* Main Title */}
            <div
                style={{
                    fontSize: "72px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    textAlign: "center",
                    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
            >
                CMS
            </div>

            {/* Subtitle */}
            <div
                style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    textAlign: "center",
                    opacity: 0.9,
                    maxWidth: "800px",
                    lineHeight: 1.2,
                }}
            >
                System zarządzania treścią
            </div>

            {/* Description */}
            <div
                style={{
                    fontSize: "24px",
                    textAlign: "center",
                    opacity: 0.8,
                    marginTop: "16px",
                    maxWidth: "900px",
                    lineHeight: 1.4,
                }}
            >
                Nowoczesny, intuicyjny i wydajny CMS
            </div>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: "Inter",
                    data: interSemiBold,
                    style: "normal",
                    weight: 600,
                },
            ],
        },
    );
}
