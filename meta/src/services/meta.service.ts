import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { META_PROPS } from '../constants/meta.constants';
import { MetaInfo, MetaProp, MetaPropertyType } from '../interfaces/meta.interface';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private apiBaseUrl: string = '';

  constructor(
    private meta: Meta,
    private title: Title,
    private utilsSvc: UtilsService,
    private appConfigService: AppConfigService,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.apiBaseUrl = this.appConfigService.config.apiBaseUrl;
  }

  private getMetaInfoWithBaseUrlAdded(metaInfo: MetaInfo): MetaInfo {
    return {
      ...metaInfo,
      url: this.utilsSvc.getCanonicalUrl(metaInfo.url || '', '', this.apiBaseUrl || ''),
      image: this.utilsSvc.getImageUrl(metaInfo.image || '', '', this.apiBaseUrl || ''),
    } as MetaInfo;
  }

  private getTagAsString(metaDefinition: MetaDefinition): string {
    let keyName = '';
    if (metaDefinition.property) {
      keyName = 'property';
    } else if (metaDefinition.httpEquiv) {
      keyName = 'http-equiv';
    } else {
      keyName = 'name';
    }

    return `<meta ${keyName}="${metaDefinition[keyName === 'http-equiv' ? 'httpEquiv' : keyName]}" content="${metaDefinition.content}">`;
  }

  private generateAllMetaDefinitions(pageMeta: MetaInfo = {}): Array<MetaDefinition> {
    const metaDefinitions: Array<MetaDefinition> = [];
    const metaProps = META_PROPS.map(p => ({ ...p }));

    metaProps.forEach((p: MetaProp) => {
      const content = pageMeta[p.name];
      if (content) {
        p.types.forEach((t: MetaPropertyType) => {
          const metaDefinition: MetaDefinition = {};
          metaDefinition[t.type] = t.subType ? `${t.subType}:${p.name}` : p.name;
          metaDefinition.content = content;
          metaDefinitions.push(metaDefinition);
        })
      }
    });

    return metaDefinitions;
  }

  private removeExistingMetaTags(): void {
    const metaProps = META_PROPS.map(p => ({ ...p }));
    // remove canonical link tag
    this.removeCanonicalLinkTag();

    //remove all other meta tags
    metaProps.forEach((p: MetaProp) => {
      p.types.forEach((t: MetaPropertyType) => {
        const attrValue = t.subType ? `${t.subType}:${p.name}` : p.name;
        const attr = `${t.type === 'httpEquiv' ? 'http-equiv' : t.type}="${attrValue}"`;
        this.meta.removeTag(attr);
      })
    });
  }

  public getTagsAsString(pageMeta: MetaInfo): Array<string> {
    let metaInfo = this.getMetaInfoWithBaseUrlAdded(pageMeta);

    const metaDefinitions = this.generateAllMetaDefinitions(metaInfo);

    const tagsAsString: Array<string> = metaDefinitions.map(m => this.getTagAsString(m));
    if (metaInfo.url) {
      tagsAsString.push(`<link rel="canonical" href="${metaInfo.url}"/>`);
    }

    return tagsAsString;
  }

  public setPageMeta(pageMeta: MetaInfo): Array<HTMLMetaElement> {
    let metaInfo = this.getMetaInfoWithBaseUrlAdded(pageMeta);

    const metaDefinitions = this.generateAllMetaDefinitions(metaInfo);
    const addedMetaElements: Array<HTMLMetaElement> = [];
    // remove all existing meta tags, before adding new ones.
    this.removeExistingMetaTags();

    // sets title
    this.title.setTitle(metaInfo?.title || '');

    // sets canonical url link tag
    this.setCanonicalLinkTag(metaInfo);

    // sets all other meta tags.
    for (let metaDef of metaDefinitions) {
      const metaEl = this.meta.addTag(metaDef, false);
      metaEl && addedMetaElements.push(metaEl);
    }

    return addedMetaElements;
  }

  public setCanonicalLinkTag(metaInfo: MetaInfo): void {
    if (metaInfo.url) {
      const linkEl = this.document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      linkEl.setAttribute('href', metaInfo.url);
      this.document.head.appendChild(linkEl);
    }
  }

  public getCanonicalLinkTags(): NodeListOf<Element> {
    const canonicalLinks = this.document.head.querySelectorAll('link[rel="canonical"]');
    return canonicalLinks;
  }

  public removeCanonicalLinkTag(): void {
    const canonicalLinks = this.getCanonicalLinkTags();
    if (canonicalLinks && canonicalLinks.length) {
      canonicalLinks.forEach(link => this.document.head.removeChild(link));
    }
  }
}
