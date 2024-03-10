import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Theme } from '../../interfaces/theme.interface';
import { Typography } from '@annuadvent/ngx-common-ui/typography';
import {
  ColorPalette,
  PaletteColor,
} from '../../interfaces/color-palette.interface';
import { Tab } from '@annuadvent/ngx-common-ui/tabs';
import {
  DEFAULT_THEME_JSON,
  TABS,
  TYPOGRAPHY,
} from '../../constants/theme.constants';

/**
 *
 */
@Component({
  selector: 'anu-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  theme: Theme = { ...DEFAULT_THEME_JSON };
  tabs: Array<Tab> = [...TABS];
  selectedTab: Tab = null;
  themeName: string = '';
  themeFromJson: string = '';
  isThemeFromJson: boolean = false;
  isJsonError: boolean = false;
  typography: Array<Typography> = [...TYPOGRAPHY];
  testAccentColors: Array<PaletteColor> = [];

  constructor(private themeService: ThemeService) {
    this.selectedTab = this.tabs.find((tb) => tb.active === true);

    this.testAccentColors =
      this.theme.colorPalettes.find((cp) => cp.name === 'accent')?.colors || [];
  }

  public tabChanged(tab: Tab): void {
    this.selectedTab = tab;
  }

  public paletteChanged = (colorPalette: ColorPalette): void => {
    this.theme.colorPalettes.forEach((cp) => {
      if (cp.name === colorPalette.name) cp = colorPalette;
    });

    if (colorPalette.name === 'accent') {
      setTimeout(() => (this.testAccentColors = colorPalette.colors));
    }
  };

  public getCssVars(theme: Theme) {
    return this.themeService.getCssVars(theme);
  }

  public loadThemeFromJson(): void {
    this.isJsonError = false;
    try {
      const parsedTheme = JSON.parse(this.themeFromJson);
      const { name, title, colorPalettes, typography } = parsedTheme;
      if (
        !name ||
        !title ||
        !(colorPalettes instanceof Array) ||
        !(typography instanceof Array)
      ) {
        this.isJsonError = true;
      } else {
        this.theme = parsedTheme;
        this.typography = this.theme.typography.map((t) => ({ ...t }));
        this.isThemeFromJson = false;
      }
    } catch (er) {
      this.isJsonError = true;
    }
  }

  public typographyChanged(typography: Array<Typography>) {
    // this.typography = typography;
    this.theme.typography = typography;
  }
}
