import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'anu-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit, OnChanges {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() isLazy: boolean = true;
  @Input() defaultSrc: string = '';

  @Output() loaded = new EventEmitter<string>();

  failed: boolean = false;
  defFailed: boolean = false;
  loading: boolean = true;
  srcUrl: string = '';
  defaultSrcUrl: string = '';

  ngOnInit(): void {
    this.loadImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadImage();
  }

  private loadImage(): void {
    const isSrcChanged = this.srcUrl !== this.src;
    const isDefaultSrcChanged = this.defaultSrc !== this.defaultSrcUrl;

    if (isSrcChanged) {
      this.failed = false;
      this.srcUrl = this.src;
      if (this.defFailed === false) {
        const ds = this.defaultSrcUrl;
        this.defaultSrcUrl = '';
        this.defaultSrcUrl = ds;
      } else {
        this.defFailed = false;
      }

      this.loading = true;
    }

    if (isDefaultSrcChanged) {
      this.defFailed = false;
      this.defaultSrcUrl = this.defaultSrc;
      if (this.failed) this.loading = true;
    }
  }

  public onImgLoad(event: any) {
    this.failed = false;
    this.loading = false;
  }

  public onImgError(event: any) {
    this.failed = true;
    if (this.defaultSrcUrl) {
      this.loading = true;
    } else {
      this.loading = false;
    }
  }

  public onDefImgLoad(event: any) {
    this.defFailed = false;
    this.loading = false;
  }

  public onDefImgError(event: any) {
    this.defFailed = true;
    this.loading = false;
  }
}
