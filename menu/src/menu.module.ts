import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HamburgerModule } from '@annuadvent/ngx-common-ui/hamburger';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HamburgerModule,
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
