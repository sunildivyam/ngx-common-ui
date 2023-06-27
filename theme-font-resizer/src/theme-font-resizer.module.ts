import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeFontResizerComponent } from './components/theme-font-resizer/theme-font-resizer.component';
import { ThemeModule } from '@annuadvent/ngx-common-ui/theme';


@NgModule({
  declarations: [
    ThemeFontResizerComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [
    ThemeFontResizerComponent
  ]
})
export class ThemeFontResizerModule { }
