import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import { cache } from "react";
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

            const usersCount = await prisma.user.count();
            const doAdminExist = usersCount >= 1;

            console.log(usersCount, doAdminExist);

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

export const getSession = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        return {
            isLoggedIn: !!session?.user.id,
            session,
        };
    } catch (err) {
        console.log(`[AUTH GET SESSION] Error: ${err}`);

        return {
            isLoggedIn: false,
            session: null,
        };
    }
};

export const cachedGetSession = cache(getSession);
