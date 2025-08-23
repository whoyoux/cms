import { redirect } from "next/navigation";
import AdminDashboard from "@/features/admin/dashboard/components/admin-dashboard";
import { cachedGetSession } from "@/lib/get-session";

const AdminDashboardPage = async () => {
    const { isLoggedIn, session } = await cachedGetSession();
    if (!isLoggedIn || !session) return redirect("/admin/sign-in");

    return <AdminDashboard session={session} />;
};

export default AdminDashboardPage;
