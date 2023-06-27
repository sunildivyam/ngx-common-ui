import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2, RendererStyleFlags2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PaletteColor, ColorPalette } from '../interfaces/color-palette.interface';
import { themes } from '../constants/themes';
import { Theme, CssVar } from '../interfaces/theme.interface';

const DEFAULT_THEME = 'default';
const PALETTE_COLOR_COUNT = 8;
const PALETTE_LIGHTNESS_START = 10;
const PALETTE_SHADES = ['DeepDark', 'Darkest', 'Darker', 'Dark', 'Normal', 'Light', 'Lighter', 'Lightest', 'DeepLight'];
const CSS_VARIABLES_PREFIX = '--anu-';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private selectedThemeName: BehaviorSubject<string>;
  private isBrowser: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object, private rendererFactory: RendererFactory2) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.selectedThemeName = new BehaviorSubject<string>('');
    this.selectedThemeName.subscribe(themeName => this.loadTheme(themeName));
  }

  // Replaces all upperCase letters to lowercase precided with '-' dash
  private camelCaseToDashCase(str: string): string {
    if (!str) return '';
    return str.split('').map(c => c === c.toUpperCase() ? `-${c.toLowerCase()}` : c).join('');
  }

  /*
  * get css var name and value.
  */
  private getCssVar(name: string, value: string = ''): CssVar | undefined {
    if (!name) {
      return undefined;
    }

    if (value) {

      name = CSS_VARIABLES_PREFIX + this.camelCaseToDashCase(name);
      return { name, value } as CssVar;
    }

    return undefined;
  }

  /*
  * write a css variable to DOM
  */
  public writeCssVarToDom(name: string, value: string = ''): void {
    const cssVar = this.getCssVar(name, value);
    if (cssVar) {
      this.renderer.setStyle(this.document.documentElement, cssVar.name, cssVar.value, RendererStyleFlags2.DashCase);
    }
  }

  /*
  * Loads the selected theme json from themes folder, and writes all css variables to DOM
  */
  private loadTheme(themeName: string): boolean {
    let theme = themes[themeName] as Theme;
    if (!theme) {
      return false;
    }
    // Write Color CSS variables to DOM
    theme.colorPalettes.forEach(cp => {
      cp.colors.forEach(c => {
        this.writeCssVarToDom(`${cp.name}${c.name}`, c.hsl)
      })
    })
    // Write Typography CSS variables to DOM
    theme.typography.forEach(tp => {
      this.writeCssVarToDom(tp.name, tp.value);
    })

    return true;
  }

  /*
   * returns a list of css vars as combined string of name and value
   */
  public getCssVars(theme: Theme): Array<string> {
    const cssVars: Array<string> = [];
    // get Color CSS variables
    theme.colorPalettes.forEach((cp: ColorPalette) => {
      cp.colors.forEach((c: PaletteColor) => {
        const cssVar = this.getCssVar(`${cp.name}${c.name}`, c.hsl);
        cssVars.push(`${cssVar?.name}: ${cssVar?.value}`);
      })
    })
    // get Typography CSS variables
    theme.typography.forEach(tp => {
      const cssVar = this.getCssVar(tp.name, tp.value);
      cssVars.push(`${cssVar?.name}: ${cssVar?.value}`);
    })
    return cssVars;
  }

  /*
  * returns the Available themes as an Array
  */
  public get themes(): Array<Theme> {
    return Object.values(themes);
  }

  public get theme(): string {
    return this.selectedThemeName.getValue();
  }

  public get paletteShades(): Array<string> {
    return PALETTE_SHADES;
  }

  /*
  * returns the primary Theme Color code. basically primaryNormal color code
  */
  public getThemeColor(theme: Theme): string {
    let themeColor: string;
    const primaryPalette: ColorPalette = theme.colorPalettes.find(cp => cp.name === 'primary') || {} as ColorPalette;
    const primaryNormal: PaletteColor = primaryPalette.colors.find((c: PaletteColor) => c.name === 'Normal')

    return primaryNormal.hsl;
  }

  public getTheme(): Observable<string> {
    return this.selectedThemeName.asObservable();
  }

  public setTheme(themeName: string = '', forced: boolean = true): void {

    if (!forced) {
      if (typeof window !== 'undefined') {
        themeName = window.localStorage.getItem('selectedThemeName') || themeName;
      }

      if (!themes[themeName]) {
        themeName = DEFAULT_THEME;
      }
    } else if (!themes[themeName]) {
      themeName = DEFAULT_THEME;
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('selectedThemeName', themeName);
    }

    this.selectedThemeName.next(themeName);
  }

  public toggleInvert(invert: boolean): void {
    if (invert === true) {
      this.document.documentElement.style.setProperty('filter', 'invert(1) brightness(0.6)');
    } else {
      this.document.documentElement.style.setProperty('filter', '');
    }
  }

  public getPaletteColors(hue: number, saturation: number): Array<PaletteColor> {
    /**
     * Hue 0 - 360 degree
     * Saturation - 0% - 100%
     * Lightness - 0% - 100%
     */
    const colors = [];

    const factoringNumer = (99 - PALETTE_LIGHTNESS_START) / PALETTE_COLOR_COUNT; // equal portions of 100%
    for (let i = 0; i <= PALETTE_COLOR_COUNT; i++) {
      const l = PALETTE_LIGHTNESS_START + (i * factoringNumer);
      const paletteColor: PaletteColor = {
        name: PALETTE_SHADES[i],
        hsl: `hsl(${hue}, ${saturation}%, ${l}%)`,
        h: hue,
        s: saturation,
        l
      }

      colors.push(paletteColor);
    }

    return colors;
  }
}
