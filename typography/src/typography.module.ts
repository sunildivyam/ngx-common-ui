import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypographyComponent } from './components/typography/typography.component';



@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TypographyComponent]
})
export class TypographyModule { }
