import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HamburgerModule } from '@annuadvent/ngx-common-ui/hamburger';
import { DrawerModule } from '@annuadvent/ngx-common-ui/drawer';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { AsideNavItemComponent } from './components/aside-nav-item/aside-nav-item.component';
import { AsideNavHeaderComponent } from './components/aside-nav-header/aside-nav-header.component';



@NgModule({
  declarations: [AsideNavComponent, AsideNavItemComponent, AsideNavHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HamburgerModule,
    DrawerModule,
  ],
  exports: [AsideNavComponent, AsideNavItemComponent, AsideNavHeaderComponent]
})
export class AsideNavModule { }
