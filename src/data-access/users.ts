import "server-only";

import { unstable_cacheTag } from "next/cache";
import { REGISTERED_USERS } from "@/constants/cache-keys";
import prisma from "@/lib/prisma";

export const getRegisteredUsersCount = async () => {
    "use cache";
    unstable_cacheTag(REGISTERED_USERS);

    const count = await prisma.user.count();
    return count;
};
