import { IColor } from "src/app/core/interfaces/color.interface";

declare const tinycolor: any;

export default class Utils {
    static computeColors(hex: string): IColor[] {
        return [
            this.getColorObject(tinycolor(hex).lighten(52), '50'),
            this.getColorObject(tinycolor(hex).lighten(37), '100'),
            this.getColorObject(tinycolor(hex).lighten(26), '200'),
            this.getColorObject(tinycolor(hex).lighten(12), '300'),
            this.getColorObject(tinycolor(hex).lighten(6), '400'),
            this.getColorObject(tinycolor(hex), '500'),
            this.getColorObject(tinycolor(hex).darken(6), '600'),
            this.getColorObject(tinycolor(hex).darken(12), '700'),
            this.getColorObject(tinycolor(hex).darken(18), '800'),
            this.getColorObject(tinycolor(hex).darken(24), '900'),
            this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
            this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
            this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
            this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
        ];
    }

    static getColorObject(value: string, name: string): IColor {
        const c = tinycolor(value);
        return {
            name: name,
            hex: c.toHexString(),
            darkContrast: c.isLight()
        };
    }
}