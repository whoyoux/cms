import { Skeleton } from "@/components/ui/skeleton";

const AdminDashboardPageLoading = () => {
    return (
        <div className="w-full">
            <Skeleton className="min-h-[40dvh] bg-gray-200" />
        </div>
    );
};

export default AdminDashboardPageLoading;
