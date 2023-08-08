import { SocialMediaShareButton, SocialMediaButton } from "../interfaces/social-media.interface";
import { SOCIAL_MEDIA_ICONS } from "./social-media-icons.constants";

export const SOCIAL_MEDIA_SHARE_BUTTONS: Array<SocialMediaShareButton> = [
    {
        type: 'facebook',
        text: 'Facebook',
        ariaLabel: 'Share on Facebook',
        icon: SOCIAL_MEDIA_ICONS.facebook,
        color: '#4267B2',
        share: {
            desktop: 'https://www.facebook.com/sharer/sharer.php?'
        },
        params: {
            url: 'u'
        }
    },
    {
        type: 'twitter',
        text: 'Twitter',
        ariaLabel: 'Share on Twitter',
        icon: SOCIAL_MEDIA_ICONS.twitter,
        color: '#00acee',
        share: {
            desktop: 'https://twitter.com/intent/tweet?'
        },
        params: {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        }
    },
    {
        type: 'linkedin',
        text: 'LinkedIn',
        ariaLabel: 'Share on LinkedIn',
        icon: SOCIAL_MEDIA_ICONS.linkedin,
        color: '#006fa6',
        share: {
            desktop: 'https://www.linkedin.com/shareArticle?'
        },
        params: {
            url: 'url',
            title: 'title',
            description: 'summary'
        }
    },
    {
        type: 'pinterest',
        text: 'Pinterest',
        ariaLabel: 'Share on Pinterest',
        icon: SOCIAL_MEDIA_ICONS.pintrest,
        color: '#BD091D',
        share: {
            desktop: 'https://pinterest.com/pin/create/button/?'
        },
        params: {
            url: 'url',
            description: 'description',
            image: 'media'
        }
    },
    {
        type: 'telegram',
        text: 'Telegram',
        ariaLabel: 'Share on Telegram',
        icon: SOCIAL_MEDIA_ICONS.telegram,
        color: '#0088cc',
        share: {
            desktop: 'https://telegram.me/share/url?'
        },
        params: {
            url: 'url',
            description: 'text'
        }
    },
    {
        type: 'messenger',
        text: 'Messenger',
        ariaLabel: 'Share on Messenger',
        icon: SOCIAL_MEDIA_ICONS.messenger,
        color: '#0080FF',
        share: {
            desktop: 'https://www.facebook.com/dialog/send?',
            android: 'fb-messenger://share/?',
            ios: 'fb-messenger://share/?'
        },
        params: {
            url: 'link',
            appId: 'app_id',
            redirectUrl: 'redirect_uri'
        }
    },
    {
        type: 'whatsapp',
        text: 'WhatsApp',
        ariaLabel: 'Share on WhatsApp',
        icon: SOCIAL_MEDIA_ICONS.whatsapp,
        color: '#25D366',
        share: {
            desktop: 'https://api.whatsapp.com/send?',
            android: 'whatsapp://send?',
            ios: 'https://api.whatsapp.com/send?'
        },
        params: {
            url: 'link',
            description: 'text'
        },
    },
    {
        type: 'email',
        text: 'Email',
        ariaLabel: 'Share link via email',
        icon: SOCIAL_MEDIA_ICONS.email,
        color: '#FF961C',
        share: {
            desktop: 'mailto:?'
        },
        params: {
            title: 'subject',
            description: 'body'
        },
    },
];

export const SOCIAL_MEDIA_BUTTONS: Array<SocialMediaButton> = [
    {
        id: 'facebook',
        label: 'facebook',
        url: '',
        icon: SOCIAL_MEDIA_ICONS.facebook,

    },
    {
        id: 'twitter',
        label: 'twitter',
        url: '',
        icon: SOCIAL_MEDIA_ICONS.twitter,

    },
    {
        id: 'linkedin',
        label: 'linkedin',
        url: '',
        icon: SOCIAL_MEDIA_ICONS.linkedin,

    },
    {
        id: 'instagram',
        label: 'instagram',
        url: '',
        icon: SOCIAL_MEDIA_ICONS.instagram,

    }
]