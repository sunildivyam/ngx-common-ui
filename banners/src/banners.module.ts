import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './components/banners/banners.component';
import { SlideshowModule } from '@annuadvent/ngx-common-ui/slideshow';
import { PictureModule } from '@annuadvent/ngx-common-ui/picture';

@NgModule({
  declarations: [BannersComponent],
  imports: [CommonModule, SlideshowModule, PictureModule],
  exports: [BannersComponent]
})
export class BannersModule {}
