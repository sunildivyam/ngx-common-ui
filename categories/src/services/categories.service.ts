import { Injectable } from '@angular/core';
import { Tab } from '@annuadvent/ngx-common-ui/tabs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor() {}

  public getTabs(count: number): Array<Tab> {
    if (!count) count = 0;
    const tabs = [];
    for (let i = 0; i < count; i++) {
      tabs.push({
        name: `${i + 1}`,
        title: `L${i + 1} categroies`,
        active: i === 0 ? true : false
      } as Tab);
    }

    return tabs;
  }
}
