import { Tab } from '@annuadvent/ngx-common-ui/tabs';
import { ColorPalette } from '../interfaces/color-palette.interface';
import { Typography } from '@annuadvent/ngx-common-ui/typography';
export declare const DEFAULT_THEME = "default";
export declare const PALETTE_COLOR_COUNT = 8;
export declare const PALETTE_LIGHTNESS_START = 10;
export declare const PALETTE_SHADES: string[];
export declare const CSS_VARIABLES_PREFIX = "--anu-";
export declare const TABS: Tab[];
export declare const COLOR_PALETTES: ColorPalette[];
export declare const TYPOGRAPHY: Array<Typography>;
export declare const DEFAULT_THEME_JSON: {
    name: string;
    title: string;
    description: string;
    colorPalettes: {
        name: string;
        hue: number;
        saturation: number;
        colors: import("../interfaces/color-palette.interface").PaletteColor[];
    }[];
    typography: {
        name: string;
        value: string;
    }[];
};
