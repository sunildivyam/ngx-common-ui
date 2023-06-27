import { ColorPalette } from '../interfaces/color-palette.interface';
import { Typography } from '@annuadvent/ngx-common-ui/typography';

export interface CssVar {
  name: string;
  value: string;
}

export interface Theme {
  name: string;
  title?: string,
  description?: string;
  colorPalettes: Array<ColorPalette>;
  typography: Array<Typography>;
}
