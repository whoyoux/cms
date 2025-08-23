"use client";

import { useRouter } from "next/navigation";
import { TransitionButton } from "@/components/ui/transition-button";
import type { Session } from "@/lib/auth";
import { signOut } from "@/lib/auth-client";

type AdminDashboardProps = {
    session: Session;
};

const AdminDashboard = ({ session }: AdminDashboardProps) => {
    const router = useRouter();

    return (
        <>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <TransitionButton
                action={async () => {
                    await signOut();
                    router.replace("/admin/sign-in");
                }}
            >
                Sign out
            </TransitionButton>
        </>
    );
};

export default AdminDashboard;
