import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectBoxModule } from '@annuadvent/ngx-common-ui/multi-select-box';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';
import { ElementStylesComponent } from './components/element-styles/element-styles.component';

@NgModule({
  declarations: [ElementStylesComponent],
  imports: [CommonModule, MultiSelectBoxModule, CollapsibleModule],
  exports: [ElementStylesComponent],
})
export class ElementStylesModule {}
