import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@annuadvent/ngx-core/utils';

@NgModule({
  declarations: [FormErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, UtilsModule],
  exports: [FormErrorComponent],
})
export class ReactiveFormModule {}
