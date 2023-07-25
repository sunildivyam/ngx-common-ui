
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { SearchBoxModule } from '@annuadvent/ngx-common-ui/search-box';
import { ImageBrowserComponent } from './components/image-browser/image-browser.component';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';



@NgModule({
  declarations: [ImageBrowserComponent],
  imports: [
    CommonModule,
    CardModule,
    SearchBoxModule,
    ErrorModule,
    SpinnerModule
  ],
  exports: [ImageBrowserComponent],
})
export class ImageBrowserModule { }
