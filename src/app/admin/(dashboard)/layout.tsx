import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { PropsWithChildren } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
    title: {
        default: "Admin Dashboard",
        template: "%s - Admin Dashboard",
    },
};

const AdminLayout = async ({ children }: PropsWithChildren) => {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <div className="min-h-svh w-full bg-gray-100">
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />
                <main className="w-full">
                    <div className="w-full p-2 border-b bg-background sticky top-0 z-50">
                        <SidebarTrigger />
                    </div>

                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default AdminLayout;
