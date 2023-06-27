import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';



@NgModule({
  declarations: [FooterNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterNavComponent]
})
export class FooterNavModule { }
