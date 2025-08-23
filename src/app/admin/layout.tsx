import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s - Admin Dashboard",
  },
};

const AdminLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default AdminLayout;
