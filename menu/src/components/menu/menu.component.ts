import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'anu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('nav') navContainer: ElementRef;

  @Input() items: Array<MenuItem> = [];
  @Input() heading: string = '';
  @Input() headingHref: Array<string> = [];
  @Input() subHeading: string = '';
  @Input() subHeadingHref: Array<string> = [];
  @Input() headingPrefix: string = '';
  @Input() headingPrefixHref: Array<string> = [];
  @Input() opened: boolean = false;
  @Input() logoUrl: string = '';
  @Input() logoWidth: string = 'auto';
  @Input() menuClassNames: Array<string> = [];
  @Input() menuItemClassNames: Array<string> = ['shadow', 'border'];
  @Input() enableSeparator: boolean = false;
  @Input() separatorClassNames: Array<string> = [
    'border-left',
    'primary-darker-border'
  ];
  @Input() fixed: boolean = true;

  @Output() selected = new EventEmitter<MenuItem>();
  @Output() openStatusChanged = new EventEmitter<boolean>();

  navContainerheight: number = 0;
  currentWindowScrollY: number = 0;
  setTimeout$ = null;

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

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    changes.fixed && this.makeNavFixed();
  }

  ngAfterViewInit(): void {
    this.makeNavFixed();
  }

  public toggleOpen(opened: boolean): void {
    this.opened = opened;
    this.openStatusChanged.emit(this.opened);
  }

  public itemCliked(menuItem: MenuItem): void {
    this.selected.emit(menuItem);

    if (this.opened) {
      this.toggleOpen(false);
    }
  }

  private makeNavFixed(): void {
    if (this.fixed) {
      (this.el.nativeElement as Element).setAttribute(
        'style',
        'position: fixed'
      );
      this.document.body.style.paddingTop =
        (this.el.nativeElement as Element).querySelector('.logo-section')
          ?.clientHeight +
        16 +
        'px';
    } else {
      (this.el.nativeElement as Element).setAttribute(
        'style',
        'position: static'
      );
      this.document.body.style.paddingTop = '0px';
    }
  }
}
