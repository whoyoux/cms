import "server-only";

import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

export const getSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return {
        isLoggedIn: !!session?.user.id,
        session,
    };
};

export const getCachedSession = cache(getSession);
