import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialMediaButton } from '../../interfaces/social-media.interface';
import { SOCIAL_MEDIA_BUTTONS } from '../../constants/social-media.constants';

@Component({
  selector: 'anu-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.scss']
})
export class SocialMediaButtonsComponent {
  @Input() buttons: Array<SocialMediaButton> = SOCIAL_MEDIA_BUTTONS;
  @Output() clicked = new EventEmitter<SocialMediaButton>();


  public btnClicked(btn: SocialMediaButton): void {
    this.clicked.emit(btn);
  }

}
