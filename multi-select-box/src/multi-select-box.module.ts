import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectBoxComponent } from './components/multi-select-box/multi-select-box.component';



@NgModule({
  declarations: [
    MultiSelectBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultiSelectBoxComponent
  ],
})
export class MultiSelectBoxModule { }
