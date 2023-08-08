
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaButtonsComponent } from './components/social-media-buttons/social-media-buttons.component';
import { SocialMediaShareButtonsComponent } from './components/social-media-share-buttons/social-media-share-buttons.component';



@NgModule({
  declarations: [
    SocialMediaButtonsComponent,
    SocialMediaShareButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialMediaButtonsComponent,
    SocialMediaShareButtonsComponent
  ],
})
export class SocialMediaModule { }
