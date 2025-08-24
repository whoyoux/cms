import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import UploadFilesModal from "./upload-files-modal";

const HeaderCard = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Media files</CardTitle>
                <CardDescription>Manage your files</CardDescription>
                <CardAction>
                    <UploadFilesModal />
                </CardAction>
            </CardHeader>
        </Card>
    );
};

export default HeaderCard;
