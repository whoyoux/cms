import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ONLY_ONE_ACCOUNT_CAN_BE_REGISTERED } from "@/constants/feature-flags";
import { ROUTES } from "@/constants/routes";
import { getRegisteredUsersCount } from "@/data-access/users";
import SignUp from "@/features/admin/sign-up/components/admin-sign-up-card";

export const metadata: Metadata = {
    title: "Sign up",
};

const AdminSignUpPage = async () => {
    if (ONLY_ONE_ACCOUNT_CAN_BE_REGISTERED) {
        const registeredUsers = await getRegisteredUsersCount();
        if (registeredUsers >= 1) return redirect(ROUTES.ADMIN.SIGN_IN);
    }

    return (
        <div className="w-full pt-4 md:pt-12">
            <SignUp />
        </div>
    );
};

export default AdminSignUpPage;
