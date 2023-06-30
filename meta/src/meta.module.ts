import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MetaService } from './services/meta.service';
import { MetaFormComponent } from './components/meta-form/meta-form.component';
import { ModalModule } from '@annuadvent/ngx-common-ui/modal';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';



@NgModule({
  declarations: [
    MetaFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    CollapsibleModule,
  ],
  exports: [MetaFormComponent],
  providers: [Meta, MetaService],
})
export class MetaModule { }
