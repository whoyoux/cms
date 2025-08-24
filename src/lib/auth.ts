import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import { getRegisteredUsersCount } from "@/data-access/users";
import prisma from "./prisma";

export const auth = betterAuth({
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
        }),
    },
    plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
