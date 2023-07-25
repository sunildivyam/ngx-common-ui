import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageFileInfo } from '../../../../image-browser/src/classes/image-file-info.class';
import { ImageInfo } from '../../interfaces/image-form.interface';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';

@Component({
  selector: 'anu-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ImageInfo>();

  constructor() { }

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

}
