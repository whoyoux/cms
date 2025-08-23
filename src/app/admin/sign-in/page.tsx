import type { Metadata } from "next";
import SignIn from "@/features/admin/sign-in/components/admin-sign-in-card";

export const metadata: Metadata = {
    title: "Sign in",
};

const AdminSignInPage = () => {
    return (
        <div className="w-full pt-4 md:pt-12">
            <SignIn />
        </div>
    );
};

export default AdminSignInPage;
