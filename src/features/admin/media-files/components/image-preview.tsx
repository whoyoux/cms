import Image from "next/image";
import type { File } from "@/generated/prisma";

const ImagePreview = ({ file }: { file: File }) => {
    return (
        <div
            className="grid place-items-center w-full aspect-square rounded-lg bg-gray-100 border relative"
            key={file.id}
        >
            <Image
                width={150}
                height={150}
                quality={100}
                src={file.url}
                alt="photo"
                className="w-full h-full rounded-lg object-cover aspect-square"
            />
        </div>
    );
};

export default ImagePreview;
