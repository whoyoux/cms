import "server-only";

import { redirect } from "next/navigation";
import { getCachedSession } from "./get-session";

export const authGuard = async () => {
    const data = await getCachedSession();

    if (!data.session || !data.isLoggedIn) return redirect("/admin/sign-in");
    return data;
};
