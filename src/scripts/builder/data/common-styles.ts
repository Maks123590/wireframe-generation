import { IBorderRadiusData } from "./section-data";

export interface ICommonStyles {
    primaryButtonColor: string, // hex
    secondaryButtonColor: string, // hex
    buttonBorderRadius: IBorderRadiusData,   // px

    heading1Styles: IFontData,
    heading2Styles: IFontData,
    heading3Styles: IFontData,
    heading4Styles: IFontData,
    subheadingStyles: IFontData,
    normalTextStyles: IFontData
}


export interface IFontData {
    color: string;
    fontSize: string;
    fontFamily: string;
}
