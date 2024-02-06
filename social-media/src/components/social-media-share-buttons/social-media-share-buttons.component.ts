import { Component, EventEmitter, HostBinding, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SocialMediaShareButton } from '../../interfaces/social-media.interface';
import { SOCIAL_MEDIA_SHARE_BUTTONS } from '../../constants/social-media.constants';
import { SocialMediaButtonsEnum } from '../../enums/social-media.enums';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { SOCIAL_MEDIA_ICONS } from '../../constants/social-media-icons.constants';

@Component({
  selector: 'anu-social-media-share-buttons',
  templateUrl: './social-media-share-buttons.component.html',
  styleUrls: ['./social-media-share-buttons.component.scss']
})
export class SocialMediaShareButtonsComponent implements OnInit, OnChanges {
  @Input() enabledButtons: Array<SocialMediaButtonsEnum> = null;
  @Input() fullscreenMode: boolean = false;
  @HostBinding('class.fullscreen-mode') get isOpenMethod() { return this.fullscreenMode; }
  @HostBinding('class.expanded') get isExpandedMethod() { return this.expanded; }

  @Output() clicked = new EventEmitter<SocialMediaShareButton>();

  buttons: Array<SocialMediaShareButton> = [];
  expanded: boolean = false;
  shareImage = SOCIAL_MEDIA_ICONS.share;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private utilsService: UtilsService,
    private appConfigService: AppConfigService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.filterButtons();
      }
    })
  }


  ngOnInit(): void {
    this.filterButtons();
  }

  ngOnChanges(): void {
    this.filterButtons();
  }

  private filterButtons(): void {
    if (this.enabledButtons?.length) {
      this.buttons = SOCIAL_MEDIA_SHARE_BUTTONS.filter(btn => this.enabledButtons.includes(btn.type as SocialMediaButtonsEnum));
    } else {
      this.buttons = this.utilsService.deepCopy(SOCIAL_MEDIA_SHARE_BUTTONS);
    }

    setTimeout(() => this.updateShareButtonUrls(), 1000);
  }


  public btnClicked(btn: SocialMediaShareButton): void {
    this.clicked.emit(btn);
  }

  public updateShareButtonUrls(): void {
    const url = this.document.head.querySelector('link[rel="canonical"]').getAttribute('href') ||
      this.appConfigService.config.apiBaseUrl + this.router.url;
    const title = this.document.head.querySelector('meta[name="title"]').getAttribute('content') || url;
    const description = this.document.head.querySelector('meta[name="description"]').getAttribute('content') || url;
    const imageUrl = this.document.head.querySelector('meta[property="og:image"]').getAttribute('content') || '';
    const siteName = this.document.head.querySelector('meta[property="og:site_name"]').getAttribute('content') || '';

    this.buttons = this.buttons.map(shareBtn => {
      let paramsStr = '';
      const btn = this.utilsService.deepCopy(SOCIAL_MEDIA_SHARE_BUTTONS.find(bt => bt.type === shareBtn.type));

      switch (btn.type) {
        case SocialMediaButtonsEnum.facebook:
          btn.share.desktop += `u=${url}`;
          break;
        case SocialMediaButtonsEnum.twitter:
          btn.share.desktop += `url=${url}&text=${description}&hastags=&via=`;
          break;
        case SocialMediaButtonsEnum.linkedin:
          btn.share.desktop += `url=${url}&title=${title}&summary=${description}`;
          break;
        case SocialMediaButtonsEnum.pintrest:
          btn.share.desktop += `url=${url}&description=${description}&media=${imageUrl}`;
          break;
        case SocialMediaButtonsEnum.telegram:
          btn.share.desktop += `url=${url}&text=${description}`;
          break;
        case SocialMediaButtonsEnum.messenger:
          paramsStr = `link=${url}&app_id=${siteName}&=redirect_url=`;
          btn.share.desktop += paramsStr;
          btn.share.android += paramsStr;
          btn.share.ios += paramsStr;
          break;
        case SocialMediaButtonsEnum.whatsapp:
          paramsStr = `link=${url}&text=${description}`;
          btn.share.desktop += paramsStr;
          btn.share.android += paramsStr;
          btn.share.ios += paramsStr;
          break;
        case SocialMediaButtonsEnum.email:
          btn.share.desktop += `u=${url}`;
          break;
        case SocialMediaButtonsEnum.facebook:
          const emailBody = `
            Welcome to ${siteName}!,
            <h1><a href="${url}">${title}</a></h1>
            <p>${description}</p>
            <p>Read <a href="${url}">Full Story</a></p>
          `;
          btn.share.desktop += `subject=${title}&body${emailBody}`;
          break;
      }

      return btn;
    });
  }
}
