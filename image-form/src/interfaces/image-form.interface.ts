import { ImageFileInfo } from "../classes/image-file-info.class";

export interface ImageInfo {
    src: string;
    alt: string;
    imageData?: any;
};

export interface ImageFileInfoList {
    imageFiles: Array<ImageFileInfo>;
    nextPageToken: string;
}
