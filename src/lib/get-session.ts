import "server-only";

import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

export const getSession = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        return {
            isLoggedIn: !!session?.user.id,
            session,
        };
    } catch (err) {
        console.log(`[AUTH GET SESSION] Error: ${err}`);

        return {
            isLoggedIn: false,
            session: null,
        };
    }
};

export const cachedGetSession = cache(getSession);
