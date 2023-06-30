import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageFormComponent } from './components/image-form/image-form.component';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';
import { UtilsModule } from '@annuadvent/ngx-core/utils';



@NgModule({
  declarations: [ImageFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ErrorModule,
    CollapsibleModule,
    UtilsModule,
  ],
  exports: [ImageFormComponent],
})
export class ImageFormModule { }
