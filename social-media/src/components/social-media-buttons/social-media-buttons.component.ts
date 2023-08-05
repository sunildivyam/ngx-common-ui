import { Component } from '@angular/core';
import { SocialMediaButton } from '../../interfaces/social-media.interface';
import { SOCIAL_MEDIA_BUTTONS } from '../../constants/social-media.constants';

@Component({
  selector: 'anu-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.scss']
})
export class SocialMediaButtonsComponent {
  buttons: Array<SocialMediaButton> = SOCIAL_MEDIA_BUTTONS;
}
