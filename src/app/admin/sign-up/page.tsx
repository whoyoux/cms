import type { Metadata } from "next";
import SignUp from "@/features/admin/sign-up/components/admin-sign-up-card";

export const metadata: Metadata = {
    title: "Sign up",
};

const AdminSignUpPage = () => {
    return (
        <div className="w-full pt-4 md:pt-12">
            <SignUp />
        </div>
    );
};

export default AdminSignUpPage;
