import { revalidateTag } from "next/cache";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { MAX_FILE_SIZE_IN_MB, MAX_FILES_PER_UPLOAD } from "@/constants/app";
import { UPLOADED_FILES_BY_USER_CACHE_KEY } from "@/constants/cache-keys";
import { getSession } from "@/lib/get-session";
import prisma from "@/lib/prisma";

const f = createUploadthing();

export const uploadFileRouter = {
    imageUploader: f({
        image: {
            maxFileSize: `${MAX_FILE_SIZE_IN_MB}MB`,
            maxFileCount: MAX_FILES_PER_UPLOAD,
        },
    })
        .middleware(async () => {
            const { session } = await getSession();

            if (!session?.user.id) throw new UploadThingError("Unauthorized");

            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            await prisma.file.create({
                data: {
                    name: file.name,
                    key: file.key,
                    url: file.ufsUrl,
                    size: file.size,
                    user: {
                        connect: {
                            id: metadata.userId,
                        },
                    },
                },
            });

            revalidateTag(
                `${UPLOADED_FILES_BY_USER_CACHE_KEY}-${metadata.userId}`,
            );
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;
export type UploadFileRouter = typeof uploadFileRouter;
