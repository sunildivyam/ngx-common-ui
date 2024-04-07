import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

@Component({
  selector: 'anu-categories-tree',
  templateUrl: './categories-tree.component.html',
  styleUrls: ['./categories-tree.component.scss']
})
export class CategoriesTreeComponent implements OnInit, OnChanges {
  @Input() value: Array<Category> = [];
  @Input() levels: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  public getNextCats(level, cat = null): Array<Category> {
    if (!cat) {
      return this.value.filter((c) => c.level === level);
    } else {
      return this.value.filter(
        (c) => c.level === level && c.parents?.includes(cat?.id)
      );
    }
  }
}
