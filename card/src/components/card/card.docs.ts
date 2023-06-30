import { CARD_TITLE } from '../card-title/card-title.docs';
import { CARD_IMAGE } from '../card-image/card-image.docs';
import { CARD_BODY } from '../card-body/card-body.docs';
import { CARD_FOOTER } from '../card-footer/card-footer.docs';

export const CardComponent: any = {
    projectionContent: '<anu-card-image>' + CARD_IMAGE + '</anu-card-image>' +
    '<anu-card-title>' + CARD_TITLE + '</anu-card-title>' +
    '<anu-card-body>' + CARD_BODY + '</anu-card-body>' +
    '<anu-card-footer>' + CARD_FOOTER + 'Footer content</anu-card-footer>',
    inputPropsValues: {}
}
