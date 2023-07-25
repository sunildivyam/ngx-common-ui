import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ImageFileInfo } from '../../classes/image-file-info.class';
import { DeleteImageInfo } from '../../interfaces/image-browser.interface';

const PAGE_SIZE = 30;

@Component({
  selector: 'anu-image-browser',
  templateUrl: './image-browser.component.html',
  styleUrls: ['./image-browser.component.scss'],
})
export class ImageBrowserComponent implements OnInit {
  @Input() selectedImageFile: ImageFileInfo = null;
  @Input() uploadHelpText: string = '';
  @Input() imageFiles: Array<ImageFileInfo> = [];
  @Input() nextPageToken: any = null;

  @Output() onSelect: EventEmitter<ImageFileInfo> = new EventEmitter<ImageFileInfo>();
  @Output() onUpload: EventEmitter<File> = new EventEmitter<File>();
  @Output() onRefresh: EventEmitter<Function> = new EventEmitter<Function>();
  @Output() onLoadMore: EventEmitter<Function> = new EventEmitter<Function>();
  @Output() onDelete: EventEmitter<DeleteImageInfo> = new EventEmitter<DeleteImageInfo>();

  @ViewChild('fileInput') fileEl: ElementRef;

  imagesFilesFiltered: Array<ImageFileInfo> = [];
  choosenFileName: string = '';

  error: any;
  loading: boolean = false;
  loadingPreview: Object = {};

  constructor() { }

  public doneRefreshCb(imageFiles: Array<ImageFileInfo>, nextPageToken: any): void {
    this.refresh(imageFiles, nextPageToken);
  }

  public doneLoadMoreCb(imageFiles: Array<ImageFileInfo>, nextPageToken: any): void {
    const appendedImageFiles = [...this.imageFiles, ...imageFiles];
    this.refresh(appendedImageFiles, nextPageToken);
  }

  public doneDeleteCb(imageFile: ImageFileInfo, success: boolean): void {
    if (success) {
      this.imageFiles = this.imageFiles.filter(imgF => imgF.fullPath !== imageFile.fullPath);
    }
  }

  public refresh(imageFiles: Array<ImageFileInfo>, nextPageToken: any) {
    this.imageFiles = imageFiles;
    this.nextPageToken = nextPageToken;
  }

  public onImageListFilter(imageFilesFiltered: Array<object>): void {
    this.imagesFilesFiltered = imageFilesFiltered as Array<ImageFileInfo>;
  }

  private refreshPreviewLoaders(imageFiles: Array<ImageFileInfo>) {
    this.loadingPreview = {};
    imageFiles?.forEach((imageFile) => {
      const imageLoaderKey = `${imageFile.fullPath}${imageFile.name}`;
      this.loadingPreview[imageLoaderKey] = false;
    });
  }

  /**
   * Previews image by fetching download url from firebase.
   * @param imageFile
   * @returns
   */
  private async previewImageFile(
    imageFile: ImageFileInfo
  ): Promise<ImageFileInfo> {
    // const imageLoaderKey = `${imageFile.fullPath}${imageFile.name}`;
    // this.error = null;
    // this.loadingPreview[imageLoaderKey] = true;

    try {
      //   if (this.isSrcFromFirebase) {
      //     imageFile.downloadUrl = await this.imageFireSvc.getImageUrl(
      //       imageFile.name,
      //       this.authSvc.getCurrentUserId()
      //     );
      //   } else {
      //     imageFile.downloadUrl = this.utilsService.getImageUrl(
      //       imageFile.fullPath,
      //       this.libConfig.imagesSourceUrl,
      //     );
      //   }

      //   this.loadingPreview[imageLoaderKey] = false;
      return imageFile;
    } catch (error: any) {
      //   this.error = error;
      //   this.loadingPreview[imageLoaderKey] = false;
      return null;
    }
  }

  ngOnInit(): void { }

  public selectClick(event: any, imageFile: ImageFileInfo): void {
    event.preventDefault();
    this.onSelect.emit(imageFile);
  }

  public loadMoreClick(event: any) {
    event.preventDefault();
    this.onLoadMore.emit(this.doneLoadMoreCb);
  }

  public refreshClick(event: any) {
    event.preventDefault();
    this.onRefresh.emit(this.doneRefreshCb);
  }

  public deleteClick(event: any, imageFile: ImageFileInfo): void {
    event.preventDefault();
    this.onDelete.emit({ imageFile, doneDeleteCb: this.doneDeleteCb } as DeleteImageInfo);;
  }

  public previewClick(event: any, imageFile: ImageFileInfo): void {
    event.preventDefault();
    this.previewImageFile(imageFile);
  }

  public onFileChange(event: any) {
    this.choosenFileName = '';
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.choosenFileName = file.name;
      this.onUpload.emit(file);
    }
  }

  public uploadClick(): void {
    const fileInputEl = this.fileEl.nativeElement;
    fileInputEl.value = '';
    this.choosenFileName = '';
    fileInputEl.click();
  }
}
