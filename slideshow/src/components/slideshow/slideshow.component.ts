import { Component, ElementRef, Input, OnInit } from '@angular/core';

/**
 * Slide Show Component, scrolls horizontally any projected content, by the specified scrollsize.
 * Allows to click next and prev buttons too.
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
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  contentEl: Element | null = null;
  el: Element | null = null;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.el = this.elRef.nativeElement;
    this.contentEl = this.el?.querySelector('.slideshow_content') || null;
  }

  public scrollSlide(scrollDir: number): void {
    if (!this.contentEl) return;
    const scrollWidth = (this.el?.clientWidth || 0) * scrollDir;
    this.contentEl.scrollLeft += scrollWidth;
  }
}
