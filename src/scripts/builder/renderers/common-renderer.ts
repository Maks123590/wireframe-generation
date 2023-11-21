import { IBackgroundData, IBorderRadiusData } from "../data/common-data";
import { IFontData } from "../data/common-styles";

export class CommonRenderer {
    public static renderBorderRadius(element: HTMLElement, data?: IBorderRadiusData): void {
        if (!data) {
            return;
        }

        element.style.borderTopLeftRadius = `${data.topLeftPx}px`;
        element.style.borderTopRightRadius = `${data.topRightPx}px`;
        element.style.borderBottomRightRadius = `${data.bottomRightPx}px`;
        element.style.borderBottomLeftRadius = `${data.bottomLeftPx}px`;
    }


    public static renderFont(element: HTMLElement, data: IFontData | undefined, commonData: IFontData): void {
        element.style.fontSize = data?.fontSize ?? commonData.fontSize;
        element.style.fontFamily = data?.fontFamily ?? commonData.fontFamily;
        element.style.color = data?.color ?? commonData.color;
    }

    public static renderBackground(element: HTMLElement, background: IBackgroundData): void {
        element.style.background = background.type === "image" ? "#D9D9D9" : background.color;
    }
}