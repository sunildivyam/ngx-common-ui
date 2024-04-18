import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HelpersFormsModule } from '@annuadvent/ngx-core/helpers-forms';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';
import { ImageUploadModule } from '@annuadvent/ngx-common-ui/image-upload';

@NgModule({
  declarations: [FormErrorComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UtilsModule,
    HelpersFormsModule,
    SpinnerModule,
    CollapsibleModule,
    ImageUploadModule
  ],
  exports: [FormErrorComponent, DynamicFormComponent]
})
export class ReactiveFormModule {}
