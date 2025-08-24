import {
    Calendar,
    GalleryVerticalEnd,
    Home,
    Inbox,
    Search,
    Settings,
} from "lucide-react";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { authGuard } from "@/lib/auth-guard";
import { UserSidebar } from "./user-sidebar";

const items = [
    {
        title: "Home",
        url: "/admin/dashboard",
        icon: Home,
    },
    {
        title: "Sign in",
        url: "/admin/sign-in",
        icon: Inbox,
    },
    {
        title: "Sign up",
        url: "/admin/sign-up",
        icon: Calendar,
    },
];

export async function AppSidebar() {
    const { session } = await authGuard();

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <div>
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <GalleryVerticalEnd className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-medium">CMS</span>
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <UserSidebar
                    user={{
                        email: session?.user.email || "",
                        name: session?.user.name || "",
                        avatar: session?.user.image || "",
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    );
}
