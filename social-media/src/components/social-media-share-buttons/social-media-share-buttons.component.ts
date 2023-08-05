import { Component } from '@angular/core';
import { SocialMediaShareButton } from '../../interfaces/social-media.interface';
import { SOCIAL_MEDIA_SHARE_BUTTONS } from '../../constants/social-media.constants';

@Component({
  selector: 'anu-social-media-share-buttons',
  templateUrl: './social-media-share-buttons.component.html',
  styleUrls: ['./social-media-share-buttons.component.scss']
})
export class SocialMediaShareButtonsComponent {
  buttons: Array<SocialMediaShareButton> = SOCIAL_MEDIA_SHARE_BUTTONS;
}
