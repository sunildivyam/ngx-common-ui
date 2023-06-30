import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { MultiSelectBoxModule } from '@annuadvent/ngx-common-ui/multi-select-box';
import { ToggleModule } from '@annuadvent/ngx-common-ui/toggle';



@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectBoxModule,
    ToggleModule,
  ],
  exports: [
    FiltersComponent
  ],
})
export class FiltersModule { }
