"use server";

import { revalidateTag } from "next/cache";
import { REGISTERED_USERS } from "@/constants/cache-keys";

export const revalidateRegisteredUsers = async () => {
    revalidateTag(REGISTERED_USERS);
};
