import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UtilsService } from '@annuadvent/ngx-core/utils';

import {
  LAYOUT_STYLE_ITEMS,
  ALIGNMENT_STYLE_ITEMS,
  SHADOW_STYLE_ITEMS,
} from '../../constants/element-styles.constants';
import {
  COLOR_PALETTES,
  PALETTE_SHADES,
} from '@annuadvent/ngx-common-ui/theme/src/constants/theme.constants';

/**
 * ElementStylesComponent component allows to choose style classes from a list.
 * These style classes can be applied to any element using [ngClass].
 *
 */
@Component({
  selector: 'anu-element-styles',
  templateUrl: './element-styles.component.html',
  styleUrls: ['./element-styles.component.scss'],
})
export class ElementStylesComponent implements OnInit, OnChanges {
  @Input() selectedStyles: Array<string> = [];

  @Output() changed = new EventEmitter<Array<string>>();

  layoutItems = [];
  alignmentItems = [];
  bgItems = [];
  bgGradItems = [];
  textColorItems = [];
  shadowItems = [];

  selectedItems = [];
  idKey = 'id';
  labelKey = 'label';

  constructor(private utilsService: UtilsService) {
    this.initItems();
  }

  private initItems() {
    this.layoutItems = this.utilsService.deepCopy(LAYOUT_STYLE_ITEMS);
    this.alignmentItems = this.utilsService.deepCopy(ALIGNMENT_STYLE_ITEMS);
    this.shadowItems = this.utilsService.deepCopy(SHADOW_STYLE_ITEMS);
    this.bgItems = this.getColorItems('bg');
    this.bgGradItems = this.getColorItems('grad');
    this.textColorItems = this.getColorItems();
  }

  private getColorItems(postFix: string = ''): Array<any> {
    const items = [];
    COLOR_PALETTES.forEach((cp) => {
      PALETTE_SHADES.forEach((ps) => {
        items.push({
          id: `${cp.name}${this.utilsService.camelCaseToDashCase(
            ps
          )}-${postFix}`,
          label: `${cp.name} ${ps}`,
        });
      });
    });

    return items;
  }

  ngOnInit(): void {
    this.selectedItems = this.selectedStyles.map((itm) => ({
      id: itm,
    }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItems = this.selectedStyles.map((itm) => ({
      id: itm,
    }));
  }

  public onChange(selectedItems: Array<any>): void {
    const selectedClasses = selectedItems.map((itm) => itm.id);
    this.changed.emit(selectedClasses);
  }
}
