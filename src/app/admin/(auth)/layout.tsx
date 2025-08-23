import type { PropsWithChildren } from "react";

const AdminAuthLayout = ({ children }: PropsWithChildren) => {
    return <div className="min-h-svh bg-gray-100">{children}</div>;
};

export default AdminAuthLayout;
