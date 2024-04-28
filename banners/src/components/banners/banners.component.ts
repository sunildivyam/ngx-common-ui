import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { BannerItem } from '../../interfaces/banner-item.interface';
import { SlideshowComponent } from '@annuadvent/ngx-common-ui/slideshow';

@Component({
  selector: 'anu-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnChanges {
  @ViewChild('banner') bannerSlides: SlideshowComponent = null;

  @Input() items: Array<BannerItem> = [];
  @Input() autoSlide: boolean = true;
  @Input() duration: number = 5000;
  @Input() slideSectionClassNames: Array<string> = ['container'];
  @Input() contentSectionClassNames: Array<string> = ['container'];

  @Output() bannerClicked = new EventEmitter<BannerItem>();

  ngOnChanges(changes: SimpleChanges): void {
    changes['items'] && this.refreshSlides();
  }

  private refreshSlides() {
    setTimeout(() => {
      this.bannerSlides.refresh();
    }, 500);
  }
  public onBannerClick(event: any, item: BannerItem): void {
    if (!item.href) {
      event.preventDefault();
      this.bannerClicked.emit(item);
    }
  }
}
