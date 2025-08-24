import "server-only";

import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { getCachedSession } from "./get-session";

export const authGuard = async () => {
    const data = await getCachedSession();

    if (!data.session || !data.isLoggedIn)
        return redirect(ROUTES.ADMIN.SIGN_IN);
    return data;
};
