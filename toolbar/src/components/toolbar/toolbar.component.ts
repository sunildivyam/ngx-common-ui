import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolbarItem } from '../../interfaces/toolbar.interface';

@Component({
  selector: 'anu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() items: Array<ToolbarItem> = [];
  @Input() isVertical: boolean = false;
  /**
   * Allowed sizes of toolbar items
   * <code>size-sm</code>, <code>size-md</code>, and <code>size-lg</code>
   * Default size is <code>size-sm</code>
   */
  @Input() size: string = 'size-sm';

  @Output() changed = new EventEmitter<ToolbarItem>();

  constructor() {}

  ngOnInit(): void {}

  public itemClicked(event: any, item: ToolbarItem): void {
    if (!item.href) {
      event.preventDefault();
    }

    this.changed.emit(item);
  }
}
