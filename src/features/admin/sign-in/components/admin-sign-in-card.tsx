"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TransitionButton } from "@/components/ui/transition-button";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                        />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href="#"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            autoComplete="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="remember"
                            onClick={() => {
                                setRememberMe(!rememberMe);
                            }}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>

                    <TransitionButton
                        action={async () => {
                            await signIn.email(
                                {
                                    email,
                                    password,
                                },
                                {
                                    onSuccess: () => {
                                        router.push("/admin/dashboard");
                                    },
                                },
                            );
                        }}
                    >
                        Login
                    </TransitionButton>
                </div>
            </CardContent>
        </Card>
    );
}
