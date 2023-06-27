import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './components/hamburger/hamburger.component';



@NgModule({
  declarations: [HamburgerComponent],
  imports: [
    CommonModule
  ],
  exports: [HamburgerComponent]
})
export class HamburgerModule { }
