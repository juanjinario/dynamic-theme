import { Component } from '@angular/core';
import { IColor } from './core/interfaces/color.interface';
import Utils from './shared/utils/theme-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dynamic-theme';
  primaryColor = '#0073bb';
  secondaryColor = "#00913f";
  primaryColorPalette: IColor[] = [];
  accentColorPalette: IColor[] = [];

  constructor() {
    this.savePrimaryColor();
    this.saveAccentColor();
  }

  savePrimaryColor() {
    this.primaryColorPalette = Utils.computeColors(this.primaryColor);

    for (const color of this.primaryColorPalette) {
      const key1 = `--primary-color-${color.name}`;
      const value1 = color.hex;
      const key2 = `--primary-color-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

  saveAccentColor(){
    this.accentColorPalette = Utils.computeColors(this.secondaryColor);

    for (const color of this.accentColorPalette) {
      const key1 = `--accent-color-${color.name}`;
      const value1 = color.hex;
      const key2 = `--accent-color-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }
}
