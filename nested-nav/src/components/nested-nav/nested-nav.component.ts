import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { NestedNavItem } from '../../interfaces/nested-nav.interface';
import { NestedNavService } from '../../services/nested-nav.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'anu-nested-nav',
  templateUrl: './nested-nav.component.html',
  styleUrls: ['./nested-nav.component.scss'],
  providers: [NestedNavService]
})
export class NestedNavComponent implements AfterViewInit, OnChanges {
  @Input() items: Array<NestedNavItem> = [];
  @Input() fullWidthItems: boolean = true;
  @Input() fixed: boolean = true;
  @Input() logoUrl: string = '';
  @Output() navClicked = new EventEmitter<NestedNavItem>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (!this.setTimeout$) {
      this.setTimeout$ = setTimeout(() => {
        this.makeNavFixed();
        clearTimeout(this.setTimeout$);
        this.setTimeout$ = null;
      }, 500);
    }
  }

  navContainerheight: number = 0;
  currentWindowScrollY: number = 0;
  setTimeout$ = null;
  navClosed = true;
  opened = false;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.makeNavFixed();
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.fixed && this.makeNavFixed();
  }

  // Works only for mobile (small)
  public toggleOpen(opened: boolean): void {
    this.opened = opened;
  }

  public onMobileNavClick(event, item): void {
    event.preventDefault();
    // this.navClosed = true;
    // this.navClicked.emit(item);
  }
  public onNavClick(event, item): void {
    this.navClosed = true;
    this.navClicked.emit(item);
  }

  private makeNavFixed(): void {
    if (this.fixed) {
      (this.el.nativeElement as Element).setAttribute(
        'style',
        'position: fixed'
      );
      const height =
        (this.el.nativeElement as Element).querySelector('.section.logo')
          ?.clientHeight +
        16 +
        'px';
      this.document.body.style.paddingTop = height;
    } else {
      (this.el.nativeElement as Element).setAttribute(
        'style',
        'position: static'
      );
      this.document.body.style.paddingTop = '0px';
    }
  }
}
