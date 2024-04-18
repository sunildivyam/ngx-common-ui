import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ImageUpload } from '../../classes/image-upload.class';
import { SlideshowComponent } from '@annuadvent/ngx-common-ui/slideshow';

@Component({
  selector: 'anu-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, OnChanges {
  @ViewChild('fileInput') fileEl: ElementRef = null;
  @ViewChild('previewSlides') previewSlides: SlideshowComponent = null;

  /**
   * Images to upload
   */
  @Input() imageUploadFiles: Array<ImageUpload> = [];

  /**
   * helpText- instructions to upload image
   */

  @Input() helpText: string = '';
  /**
   * Image element id
   */
  @Input() id: string | string = '';

  /**
   * placeholder text
   */
  @Input() placeholder: string = '';

  /**
   * Show/hide upload button.
   */
  @Input() enableUploadButton: boolean = true;

  /**
   * Show/hide upload button.
   */
  @Input() multiple: boolean = false;

  /**
   * Accepts provided comma separated mime types only. exampel - image/png, image/jpg, image/x-icon
   */
  @Input() accept: string = 'image/*';

  /**
   * Emits when image is choosed for upload
   */
  @Output() changed = new EventEmitter<Array<ImageUpload> | ImageUpload>();

  /**
   * Emits when Upload button is clicked
   */
  @Output() uploadClicked = new EventEmitter<
    Array<ImageUpload> | ImageUpload
  >();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  /**
   * Comma separated fileNames
   * */
  public get chosenFileNames(): string {
    return this.imageUploadFiles?.map((file) => file.fileName).join(',');
  }

  private reset(): void {
    this.imageUploadFiles.forEach((file) => (file = null));
    this.imageUploadFiles = [];
  }

  public onFileChange(event: any) {
    this.reset();

    // Generate preview Urls, then emit changed event with all files
    Object.keys(event.target.files).forEach((key) => {
      const file: File = event.target.files[key];
      const uImg = new ImageUpload({
        fileName: file.name,
        data: file,
        size: file.size,
        mimeType: file.type,
        previewUrl: URL.createObjectURL(file)
      } as ImageUpload);

      this.imageUploadFiles.push(uImg);
    });

    this.changed.emit(
      this.multiple
        ? this.imageUploadFiles
        : this.imageUploadFiles.length
        ? this.imageUploadFiles[0]
        : null
    );

    // Refresh Image Prview
    setTimeout(() => {
      this.previewSlides.refresh();
    }, 100);
  }

  public chooseFileClick(): void {
    this.fileEl.nativeElement.click();
  }

  public uploadFileClick(event: any): void {
    event.preventDefault();

    this.uploadClicked.emit(
      this.multiple
        ? this.imageUploadFiles
        : this.imageUploadFiles.length
        ? this.imageUploadFiles[0]
        : null
    );
  }
}
