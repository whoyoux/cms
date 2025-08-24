import { genUploader } from "uploadthing/client";
import type { UploadFileRouter } from "@/app/api/uploadthing/core";

export const { uploadFiles } = genUploader<UploadFileRouter>();
