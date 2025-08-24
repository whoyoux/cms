import prisma from "@/lib/prisma";
import "server-only";

export const getUploadedFilesByUser = async (userId: string) => {
    // "use cache";
    // cacheTag(`${UPLOADED_FILES_BY_USER_CACHE_KEY}-${userId}`);

    const files = await prisma.file.findMany({
        where: {
            userId,
        },
    });

    return files.sort(
        (item1, item2) => item2.createdAt.getTime() - item1.createdAt.getTime(),
    );
};
