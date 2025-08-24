import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Session } from "@/lib/auth";
import { ChartAreaInteractive } from "./charts";

type AdminDashboardProps = {
    session: Session;
};

const Info = ({ label, value }: { label: string; value: string }) => {
    return (
        <div className="flex items-center gap-2">
            <span className="font-semibold">{label}:</span>
            <span>{value}</span>
        </div>
    );
};

const AdminDashboard = ({ session }: AdminDashboardProps) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Admin details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="flex flex-row gap-4 items-center-safe">
                            {session?.user?.image ? (
                                <div className="relative w-16 h-16 rounded-sm overflow-hidden">
                                    <Image
                                        src={session?.user?.image || ""}
                                        alt="Profile preview"
                                        fill
                                    />
                                </div>
                            ) : null}
                            <div className="flex flex-col flex-1">
                                <Info label="ID" value={session.user.id} />
                                <Info label="Name" value={session.user.name} />
                                <Info
                                    label="Email"
                                    value={session.user.email}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Stats</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
            </div>
            <ChartAreaInteractive />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-[500px]">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Stats</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Stats</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Stats</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 h-[500px]">
                <Card>
                    <CardHeader>
                        <CardTitle>Stats</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Stats</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>

                    <CardContent></CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
