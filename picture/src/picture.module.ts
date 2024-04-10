import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './components/picture/picture.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';

@NgModule({
  declarations: [PictureComponent],
  imports: [CommonModule, FormsModule, SpinnerModule],
  exports: [PictureComponent]
})
export class PictureModule {}
