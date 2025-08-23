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
        <div className="w-full p-4 flex flex-col gap-4">
            <pre>{JSON.stringify(session.session, null, 2)}</pre>
            <TransitionButton
                action={async () => {
                    await signOut();
                    router.push("/admin/sign-in");
                }}
            >
                Sign out
            </TransitionButton>
        </div>
    );
};

export default AdminDashboard;
