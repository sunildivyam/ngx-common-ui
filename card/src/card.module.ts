import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';

@NgModule({
  declarations: [CardComponent, CardTitleComponent, CardImageComponent, CardBodyComponent, CardFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardTitleComponent, CardImageComponent, CardBodyComponent, CardFooterComponent]
})
export class CardModule { }
