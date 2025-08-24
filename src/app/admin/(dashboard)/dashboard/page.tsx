import AdminDashboard from "@/features/admin/dashboard/components/admin-dashboard";
import { authGuard } from "@/lib/auth-guard";

const AdminDashboardPage = async () => {
    const { session } = await authGuard();
    if (!session) return null;

    return <AdminDashboard session={session} />;
};

export default AdminDashboardPage;
