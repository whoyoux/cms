import type { PropsWithChildren } from "react";

const AdminAuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-svh bg-gray-100 flex flex-col items-center pt-4 md:pt-12">
            <h1 className="text-3xl font-semibold tracking-tighter">
                Your logo
            </h1>
            {children}
        </div>
    );
};

export default AdminAuthLayout;
