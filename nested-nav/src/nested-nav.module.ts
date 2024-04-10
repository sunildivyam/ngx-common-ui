import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedNavComponent } from './components/nested-nav/nested-nav.component';
import { RouterModule } from '@angular/router';
import { HamburgerModule } from '@annuadvent/ngx-common-ui/hamburger';

@NgModule({
  declarations: [NestedNavComponent],
  imports: [CommonModule, RouterModule, HamburgerModule],
  exports: [NestedNavComponent]
})
export class NestedNavModule {}
