export interface SocialMediaButton {
    id: string;
    label: string;
    url: string;
    icon: string;
};

export interface SocialMediaShareButton {
    type: string,
    text: string,
    ariaLabel: string,
    icon: string,
    color: string,
    share: {
        desktop: string;
        android?: string;
        ios?: string;
    },
    params: SocialMediaShareButtonParams
}

export interface SocialMediaShareButtonParams {
    [key: string]: string;
}
