export interface PaletteColor {
    name: string;
    hsl: string;
    h?: number;
    s?: number;
    l?: number;
}
export interface ColorPalette {
    name: string;
    hue: number;
    saturation: number;
    colors: Array<PaletteColor>;
}
