import type { Metadata } from "next";

import HeaderCard from "@/features/admin/media-files/components/header-card";
import MediaFilesBrowser from "@/features/admin/media-files/components/media-files-browser";
import { authGuard } from "@/lib/auth-guard";

export const metadata: Metadata = {
    title: "Media files",
};

const AdminDashboardMediaFilesPage = async () => {
    const { session } = await authGuard();
    if (!session) return null;

    return (
        <div className="flex flex-col gap-4">
            <HeaderCard />
            <MediaFilesBrowser userId={session.user.id} />
        </div>
    );
};

export default AdminDashboardMediaFilesPage;
