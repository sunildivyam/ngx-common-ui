import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { ToggleModule } from '@annuadvent/ngx-common-ui/toggle';
import { ThemeModule } from '@annuadvent/ngx-common-ui/theme';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToggleModule,
    ThemeModule,
  ],
  exports: [ThemePickerComponent],
})
export class ThemePickerModule { }
