import { z } from "zod";

export const SignInSchema = z.object({
    email: z
        .email({ error: "Invalid email format" })
        .min(1, { error: "Email is required" })
        .min(5, { error: "Password must have at least 5 characters" })
        .max(50, { error: "Email can have maximum 50 characters" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must have at least 8 characters" })
        .max(150, { message: "Password can have maximum 150 characters" }),
    rememberMe: z.boolean(),
});
