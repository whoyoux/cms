import "server-only";

import prisma from "@/lib/prisma";

export const getRegisteredUsersCount = async () => {
    "use cache";

    const count = await prisma.user.count();
    return count;
};
