import { Tab } from "@annuadvent/ngx-common-ui/tabs";
import { ColorPalette } from "../interfaces/color-palette.interface";
import { Typography } from "@annuadvent/ngx-common-ui/typography";

export const TABS = [
  {
    name: "overview",
    title: "Overview",
    active: true,
  } as Tab,
  {
    name: "palettes",
    title: "Colors",
  } as Tab,
  {
    name: "typography",
    title: "Typography",
  } as Tab,
  {
    name: "json",
    title: "JSON",
  } as Tab,
];

export const COLOR_PALETTES = [
  {
    name: "primary",
    hue: 54,
    saturation: 80,
    colors: [],
  } as ColorPalette,
  {
    name: "secondary",
    hue: 9,
    saturation: 100,
    colors: [],
  } as ColorPalette,
  {
    name: "accent",
    hue: 0,
    saturation: 0,
    colors: [],
  } as ColorPalette,
];

export const TYPOGRAPHY: Array<Typography> = [
  {
    name: "fontFamily",
    value: "Arial",
  } as Typography,
  {
    name: "fontSize",
    value: "14px",
  } as Typography,
  {
    name: "spacing",
    value: "1rem",
  } as Typography,
  {
    name: "borderRadius",
    value: "0.5rem",
  } as Typography,
  {
    name: "siteWidth",
    value: "1080px",
  } as Typography,
  {
    name: "lineHeight",
    value: "2",
  } as Typography,
  {
    name: "letterSpacing",
    value: "0.05rem",
  } as Typography,
];

export const DEFAULT_THEME_JSON = {
  name: "default",
  title: "Default Theme",
  description: "Default theme description",
  colorPalettes: COLOR_PALETTES.map((cp) => ({ ...cp })),
  typography: TYPOGRAPHY.map((tp) => ({ ...tp })),
};
