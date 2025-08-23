import { Skeleton } from "@/components/ui/skeleton";

const AdminDashboardPageLoading = () => {
    return (
        <div className="w-full p-4">
            <Skeleton className="min-h-[40dvh] bg-gray-200" />
        </div>
    );
};

export default AdminDashboardPageLoading;
