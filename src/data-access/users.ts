import prisma from "@/lib/prisma";
import "server-only";

export const getRegisteredUsersCount = async () => {
    return await prisma.user.count();
};
