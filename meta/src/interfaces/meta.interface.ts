export interface MetaInfo {
    title?: string;
    description?: string;
    keywords?: string;
    robots?: string;
    'Content-Type'?: string;
    language?: string;
    'revisit-after'?: string;
    author?: string;
    type?: string;
    image?: string;     // social media image url
    url?: string;       // page url, may be canonical url
    card?: string;      // twitter card
    site_name?: string;  // Main site name
    audio?: string;     // audio url
    video?: string;     // video url
    'article:published_time'?: string;      // creation date, ISO format yyyy-mm-dd hh:mm:ss
    'article:author'?: string;              // Author profile url / name
    'article:section'?: string;             // article Category name
    'article:tag'?: string;                 // article keywords or tags
}

export interface MetaPropertyType {
    type: string;
    subType?: string;
}
export interface MetaPropValue {
    name: string;
    label: string;
}

export interface MetaProp {
    name: string;
    types: Array<MetaPropertyType>;
    required?: boolean,
    label?: string;
    min?: number;
    max?: number;
    allowedValues?: Array<MetaPropValue>;
    defaultValue?: string;
    error?: string;
    isAdditionalProp?: boolean;
}
