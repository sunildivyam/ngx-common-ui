import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeComponent } from './components/theme/theme.component';
import { TabsModule } from '@annuadvent/ngx-common-ui/tabs';
import { TypographyModule } from '@annuadvent/ngx-common-ui/typography';
import { CodeBlockModule } from '@annuadvent/ngx-common-ui/code-block';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';


@NgModule({
  declarations: [ThemeComponent, ColorPaletteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    TypographyModule,
    CodeBlockModule
  ],
  exports: [ThemeComponent, ColorPaletteComponent],
})
export class ThemeModule { }
