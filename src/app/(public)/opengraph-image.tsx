import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "CMS homepage";
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
                fontSize: 128,
                background: "white",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            CMS
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: "Inter",
                    data: interSemiBold,
                    style: "normal",
                    weight: 400,
                },
            ],
        },
    );
}
