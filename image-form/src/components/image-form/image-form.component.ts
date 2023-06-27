import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageFileInfo } from '../../classes/image-file-info.class';
import { ImageInfo } from '../../interfaces/image-form.interface';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { LibConfig } from '@annuadvent/ngx-core/app-config';

@Component({
  selector: 'anu-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() helpText: string = '';
  @Input() isSrcFromFirebase: boolean = false;  // if select images as Firebase storage download urls else API url
  @Input() imageFileName: string = '';
  @Input() imagePromptText: string = '';
  @Input() enableOpenaiAutoImage: boolean = false;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ImageInfo>();

  selectedImage: ImageFileInfo | null = null;

  constructor(private libConfig: LibConfig, private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  public cancelClicked(event: any) {
    event.preventDefault();
    this.cancel.emit();
  }

  public saveClicked(event: any) {
    event.preventDefault();
    this.save.emit({ src: this.src, alt: this.alt } as ImageInfo);
  }

  public onFileBrowserSelect(imageFileInfo: ImageFileInfo): void {
    if (this.isSrcFromFirebase === true) {
      this.src = imageFileInfo.downloadUrl;
    } else {
      this.src = this.utilsService.getImageUrl(
        imageFileInfo.fullPath,
        this.libConfig.imagesSourceUrl || '',
      );
    }

    this.selectedImage = imageFileInfo;
  }
}
