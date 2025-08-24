import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import { APP_NAME, COOKIE_PREFIX } from "@/constants/app";
import { ONLY_ONE_ACCOUNT_CAN_BE_REGISTERED } from "@/constants/feature-flags";
import { getRegisteredUsersCount } from "@/data-access/users";
import prisma from "./prisma";

export const auth = betterAuth({
    appName: APP_NAME,
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        async sendResetPassword(data, request) {
            console.log("TODO");
            // Send an email to the user with a link to reset their password
        },
    },
    hooks: {
        before: createAuthMiddleware(async (ctx) => {
            if (ONLY_ONE_ACCOUNT_CAN_BE_REGISTERED) {
                if (ctx.path !== "/sign-up/email") {
                    return;
                }
                const usersCount = await getRegisteredUsersCount();
                const doAdminExist = usersCount >= 1;
                if (doAdminExist)
                    throw new APIError("BAD_REQUEST", {
                        message: "Admin account already exists.",
                    });
                else return;
            }
        }),
    },
    advanced: {
        cookiePrefix: COOKIE_PREFIX,
    },
    plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
