import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BannerItem } from '../../interfaces/banner-item.interface';

@Component({
  selector: 'anu-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
  @Input() items: Array<BannerItem> = [];
  @Input() autoSlide: boolean = true;
  @Input() duration: number = 5000;
  @Input() slideSectionClassNames: Array<string> = ['container'];
  @Input() contentSectionClassNames: Array<string> = ['container'];

  @Output() bannerClicked = new EventEmitter<BannerItem>();

  public onBannerClick(event: any, item: BannerItem): void {
    if (!item.href) {
      event.preventDefault();
      this.bannerClicked.emit(item);
    }
  }
}
