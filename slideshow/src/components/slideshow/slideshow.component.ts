import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  SimpleChanges
} from '@angular/core';
import { SLIDESHOW_ITEM_CLASS } from '../../constants/slideshow.constant';
import { isPlatformBrowser } from '@angular/common';

/**
 * Slide Show Component, scrolls horizontally any projected content, by the specified scrollsize.
 * Allows to click next and prev buttons too.
 * Projected content should have added <code>.slideshow_item</code> class to the projected content.
 * @date 6/11/2023 - 8:40:31 PM
 *
 * @export
 * @class SlideshowComponent
 * @typedef {SlideshowComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'anu-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent
  implements OnInit, AfterContentInit, OnChanges, OnDestroy
{
  /**
   * Item width in percentage of Slidhow width.
   * Should be a number between 1-100
   * Default is 100, which means 1 item at a time is visible in view.
   */
  @Input() relativeItemWidth: number = 100;

  /**
   * slide duration in miliseconds. Next slide wil show up after this duration.
   */
  @Input() duration: number = 5000;

  /**
   * enables auto scrolling based on duration.
   */
  @Input() autoSlide: boolean = false;

  contentEl: Element | null = null;
  el: Element | null = null;
  items: Array<any> = [];

  setTimeout$ = null;
  interval$ = null;
  activeSlide = 0;

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (!this.setTimeout$) {
      this.setTimeout$ = setTimeout(() => {
        this.setSlideShowWidth();
        clearTimeout(this.setTimeout$);
        this.setTimeout$ = null;
      }, 500);
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseenter(event) {
    console.log('Enter');
    this.stopAutoSlide();
  }

  @HostListener('mouseleave', ['$event'])
  onMouseleave(event) {
    console.log('Out');
    this.startAutoSlide();
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.setSlideShowWidth();

    this.startAutoSlide();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSlideShowWidth();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    this.setTimeout$ && clearTimeout(this.setTimeout$);
    this.setTimeout$ = null;
  }

  private stopAutoSlide(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.interval$ && clearInterval(this.interval$);
      this.interval$ = null;
    }
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();

    if (isPlatformBrowser(this.platformId)) {
      if (!this.duration || !this.autoSlide) return;

      this.interval$ = setInterval(() => {
        // Slide
        this.scrollSlide(1);
      }, this.duration);
    }
  }

  private setSlideShowWidth(): void {
    this.el = this.elRef.nativeElement;
    this.contentEl = this.el?.querySelector('.slideshow_content') || null;
    const nodes = this.el?.querySelectorAll(`.${SLIDESHOW_ITEM_CLASS}`) || null;

    if (!this.contentEl || !nodes || !nodes.length || !nodes.forEach) return;

    const slideshowVieportWidth = this.contentEl.clientWidth;
    console.log(slideshowVieportWidth);

    nodes?.forEach((item) => {
      if (
        !this.relativeItemWidth ||
        typeof this.relativeItemWidth !== 'number'
      ) {
        this.relativeItemWidth = 100;
      }

      let marginTotal = 0;
      let marginLeft = 0;
      let marginRight = 0;

      if (typeof window !== 'undefined' && window.getComputedStyle) {
        const cs = window.getComputedStyle(item);
        marginLeft = parseFloat(cs.marginLeft?.replace('px', '') || '0');
        marginRight = parseFloat(cs.marginRight?.replace('px', '') || '0');
        marginTotal = marginLeft + marginRight;
      }

      this.items.push({
        el: item,
        marginLeft,
        marginRight
      });

      item.setAttribute(
        'style',
        `width: ${
          slideshowVieportWidth * (this.relativeItemWidth / 100) - marginTotal
        }px`
      );
    });
  }

  public scrollSlide(scrollDir: number): void {
    if (!this.contentEl || !this.items?.length) return;

    if (!this.relativeItemWidth || typeof this.relativeItemWidth !== 'number') {
      this.relativeItemWidth = 100;
    }

    if (scrollDir === -1) {
      this.previousSlide();
    } else {
      this.nextSlide();
    }

    const activeEl = this.items[this.activeSlide].el;
    this.contentEl.scrollLeft = activeEl.offsetLeft;
  }

  private previousSlide(): void {
    if (this.activeSlide <= 0) {
      this.activeSlide = this.items.length - 1;
    } else {
      this.activeSlide--;
    }
  }

  private nextSlide(): void {
    if (this.activeSlide >= this.items.length - 1) {
      this.activeSlide = 0;
    } else {
      this.activeSlide++;
    }
  }

  public onSlideControlClick(event: any, activeSlide: number): void {
    event.preventDefault();
    this.activeSlide = activeSlide - 1;
    this.scrollSlide(1);
  }
}
