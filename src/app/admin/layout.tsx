import type { Metadata } from "next";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: {
        default: "Admin Dashboard",
        template: "%s - Admin Dashboard",
    },
};

const AdminHeader = () => {
    return (
        <div className="flex items-center p-4 gap-2">
            <Link href="/admin/dashboard">Dashboard</Link>
            <Link href="/admin/sign-in">Sign in</Link>
            <Link href="/admin/sign-up">Sign up</Link>
        </div>
    );
};

const AdminLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-svh w-full bg-gray-100">
            <AdminHeader />
            {children}
        </div>
    );
};

export default AdminLayout;
