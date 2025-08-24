"use client";

import { TransitionButton } from "@/components/ui/transition-button";
import type { Session } from "@/lib/auth";
import { signOut } from "@/lib/auth-client";

type AdminDashboardProps = {
    session: Session;
};

const AdminDashboard = ({ session }: AdminDashboardProps) => {
    return (
        <div className="w-full p-4 flex flex-col gap-4">
            <pre>{JSON.stringify(session.session, null, 2)}</pre>
            <TransitionButton action={signOut}>Sign out</TransitionButton>
        </div>
    );
};

export default AdminDashboard;
