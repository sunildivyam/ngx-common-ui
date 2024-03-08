import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { MenuItem } from "../../interfaces/menu.interface";

@Component({
  selector: "anu-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild("nav") navContainer: ElementRef;

  @Input() items: Array<MenuItem> = [];
  @Input() heading: string = "";
  @Input() headingHref: Array<string> = [];
  @Input() subHeading: string = "";
  @Input() subHeadingHref: Array<string> = [];
  @Input() headingPrefix: string = "";
  @Input() headingPrefixHref: Array<string> = [];
  @Input() opened: boolean = false;
  @Input() logoUrl: string = "";
  @Input() logoWidth: string = "auto";
  @Input() menuClassNames: Array<string> = [];
  @Input() menuItemClassNames: Array<string> = ["shadow", "border"];
  @Input() enableSeparator: boolean = false;
  @Input() separatorClassNames: Array<string> = [
    "border-left",
    "primary-darker-border",
  ];

  @Output() selected = new EventEmitter<MenuItem>();
  @Output() openStatusChanged = new EventEmitter<boolean>();
  @Output() onResizeMenu = new EventEmitter<number>();

  navContainerheight: number = 0;
  currentWindowScrollY: number = 0;
  setTimeout$ = null;

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event && event.target) this.currentWindowScrollY = event.target.scrollY;
    if (!this.setTimeout$) {
      this.setTimeout$ = setTimeout(() => {
        this.navContainerheight =
          this.navContainer?.nativeElement?.clientHeight || 0;
        this.onResizeMenu.emit(this.navContainerheight);
        clearTimeout(this.setTimeout$);
        this.setTimeout$ = null;
      }, 500);
    }
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.navContainerheight = this.navContainer.nativeElement.clientHeight || 0;
    this.currentWindowScrollY = 0;
    this.onResizeMenu.emit(this.navContainerheight);
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
}
