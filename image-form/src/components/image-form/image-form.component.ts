import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageInfo } from '../../interfaces/image-form.interface';

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
