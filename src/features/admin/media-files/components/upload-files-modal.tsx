"use client";

import { Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { UploadThingError } from "uploadthing/server";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    FileUpload,
    FileUploadDropzone,
    FileUploadItem,
    FileUploadItemDelete,
    FileUploadItemMetadata,
    FileUploadItemPreview,
    FileUploadItemProgress,
    FileUploadList,
    type FileUploadProps,
    FileUploadTrigger,
} from "@/components/ui/file-upload";
import {
    MAX_FILE_SIZE,
    MAX_FILE_SIZE_IN_MB,
    MAX_FILES_PER_UPLOAD,
} from "@/constants/app";
import { uploadFiles } from "@/lib/uploadthing";

const UploadFilesModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Upload new files</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload new files</DialogTitle>
                    <DialogDescription>
                        This is where you can upload new files
                    </DialogDescription>
                    <div className="w-full">
                        <FileUploader />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

const FileUploader = () => {
    const router = useRouter();

    const [isUploading, setIsUploading] = useState(false);
    const [files, setFiles] = useState<File[]>([]);

    const onUpload: NonNullable<FileUploadProps["onUpload"]> = useCallback(
        async (files, { onProgress }) => {
            try {
                setIsUploading(true);

                // Inicjalizuj postęp dla wszystkich plików
                files.forEach((file) => {
                    onProgress(file, 0);
                });

                const res = await uploadFiles("imageUploader", {
                    files,
                    onUploadProgress: ({ file, progress }) => {
                        // Upewnij się, że postęp jest aktualizowany dla każdego pliku
                        onProgress(file, progress);
                    },
                });

                // Ustaw 100% postęp dla wszystkich plików po zakończeniu
                files.forEach((file) => {
                    onProgress(file, 100);
                });

                toast.success("Uploaded files:", {
                    description: (
                        <pre className="mt-2 w-80 rounded-md bg-accent/30 p-4 text-accent-foreground">
                            <code>
                                {JSON.stringify(
                                    res.map((file) =>
                                        file.name.length > 25
                                            ? `${file.name.slice(0, 25)}...`
                                            : file.name,
                                    ),
                                    null,
                                    2,
                                )}
                            </code>
                        </pre>
                    ),
                });
            } catch (error) {
                setIsUploading(false);

                if (error instanceof UploadThingError) {
                    const errorMessage =
                        error.data && "error" in error.data
                            ? error.data.error
                            : "Upload failed";
                    toast.error(errorMessage);
                    return;
                }

                toast.error(
                    error instanceof Error
                        ? error.message
                        : "An unknown error occurred",
                );
            } finally {
                setIsUploading(false);
                router.refresh();
            }
        },
        [router],
    );
    const onFileReject = useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
        });
    }, []);

    return (
        <FileUpload
            accept="image/*"
            maxFiles={MAX_FILES_PER_UPLOAD}
            maxSize={MAX_FILE_SIZE}
            className="w-full"
            onAccept={(files) => setFiles(files)}
            onUpload={onUpload}
            onFileReject={onFileReject}
            multiple
            disabled={isUploading}
        >
            <FileUploadDropzone>
                <div className="flex flex-col items-center gap-1 text-center">
                    <div className="flex items-center justify-center rounded-full border p-2.5">
                        <Upload className="size-6 text-muted-foreground" />
                    </div>
                    <p className="font-medium text-sm">
                        Drag & drop images here
                    </p>
                    <p className="text-muted-foreground text-xs">
                        Or click to browse (max {MAX_FILES_PER_UPLOAD} files, up
                        to {MAX_FILE_SIZE_IN_MB}MB each)
                    </p>
                </div>
                <FileUploadTrigger asChild>
                    <Button variant="outline" size="sm" className="mt-2 w-fit">
                        Browse files
                    </Button>
                </FileUploadTrigger>
            </FileUploadDropzone>
            <FileUploadList>
                {files.map((file, index) => (
                    <FileUploadItem
                        key={`${file.name}-${file.size}-${index}`}
                        value={file}
                    >
                        <div className="flex w-full items-center gap-2">
                            <FileUploadItemPreview />
                            <FileUploadItemMetadata />
                            <FileUploadItemDelete asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="size-7"
                                >
                                    <X />
                                </Button>
                            </FileUploadItemDelete>
                        </div>
                        <FileUploadItemProgress />
                    </FileUploadItem>
                ))}
            </FileUploadList>
        </FileUpload>
    );
};

export default UploadFilesModal;
