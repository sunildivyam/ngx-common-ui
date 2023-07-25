import { ImageFileInfo } from "../classes/image-file-info.class";

export interface ImageFileInfoList {
    imageFiles: Array<ImageFileInfo>;
    nextPageToken: string;
}

export interface DeleteImageInfo {
    imageFile: ImageFileInfo;
    doneDeleteCb: Function;
};
