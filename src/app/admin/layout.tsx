import type { PropsWithChildren } from "react";
import AdminAuthGuard from "@/components/app-auth-guard";

const AdminLayout = ({ children }: PropsWithChildren) => {
    return <AdminAuthGuard>{children}</AdminAuthGuard>;
};

export default AdminLayout;
