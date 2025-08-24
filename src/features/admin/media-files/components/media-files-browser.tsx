import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getUploadedFilesByUser } from "@/data-access/files";

import ImagePreview from "@/features/admin/media-files/components/image-preview";

const MediaFilesBrowser = async ({ userId }: { userId: string }) => {
    const files = await getUploadedFilesByUser(userId);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Your files</CardTitle>
                <CardDescription>Manage your files</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 2xl:grid-cols-12 gap-4">
                    {files
                        .sort(
                            (item1, item2) =>
                                item2.createdAt.getTime() -
                                item1.createdAt.getTime(),
                        )
                        .map((file) => (
                            <ImagePreview key={file.id} file={file} />
                        ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default MediaFilesBrowser;
