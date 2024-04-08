import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NestedNavItem } from '../../interfaces/nested-nav.interface';
import { NestedNavService } from '../../services/nested-nav.service';

@Component({
  selector: 'anu-nested-nav',
  templateUrl: './nested-nav.component.html',
  styleUrls: ['./nested-nav.component.scss'],
  providers: [NestedNavService]
})
export class NestedNavComponent {
  @Input() items: Array<NestedNavItem> = [];
  @Output() itemClicked = new EventEmitter<NestedNavItem>();

  constructor() {}
}
