"use client";

import { useRouter } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";
import { useSession } from "@/lib/auth-client";

function AdminAuthGuard({ children }: PropsWithChildren) {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session.data?.session) router.push("/admin/sign-in");
    }, [session, router]);

    return <>{children}</>;
}

export default AdminAuthGuard;
