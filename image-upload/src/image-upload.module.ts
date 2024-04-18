import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { FormsModule } from '@angular/forms';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';
import { SlideshowModule } from '@annuadvent/ngx-common-ui/slideshow';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    SpinnerModule,
    PictureModule,
    SlideshowModule
  ],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule {}
