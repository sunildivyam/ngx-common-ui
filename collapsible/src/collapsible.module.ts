import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { CollapsibleHeaderComponent } from './components/collapsible-header/collapsible-header.component';
import { CollapsibleContentComponent } from './components/collapsible-content/collapsible-content.component';
import { HamburgerModule } from '@annuadvent/ngx-common-ui/hamburger';
import { DrawerModule } from '@annuadvent/ngx-common-ui/drawer';



@NgModule({
  declarations: [
    CollapsibleComponent,
    CollapsibleHeaderComponent,
    CollapsibleContentComponent
  ],
  imports: [
    CommonModule,
    HamburgerModule,
    DrawerModule,
  ],
  exports: [
    CollapsibleComponent,
    CollapsibleHeaderComponent,
    CollapsibleContentComponent
  ],
})
export class CollapsibleModule { }
