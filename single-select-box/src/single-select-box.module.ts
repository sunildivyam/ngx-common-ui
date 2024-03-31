import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSelectBoxComponent } from './components/single-select-box/single-select-box.component';

@NgModule({
  declarations: [SingleSelectBoxComponent],
  imports: [CommonModule],
  exports: [SingleSelectBoxComponent],
})
export class SingleSelectBoxModule {}
