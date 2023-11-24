import { IBackgroundData, IBorderRadiusData } from "../data/common-data";
import { IFontData } from "../data/common-styles";
import { IAlignableData } from "../data/section-data";

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

    public static renderAlignment(widget: HTMLElement, widgetContent: HTMLElement, data?: IAlignableData): void {
        if (data?.fitType === "fit") {
            widget.style.display = "flex";
            widgetContent.style.width = data.width;
            widget.style.justifyContent = data.align == "left"
            ? "flex-start"
            : data.align == "right"
                ? "flex-end"
                : "center";
        } else {
            widgetContent.style.width = "auto";
        }
    }

    public static renderFont(element: HTMLElement, data: IFontData | undefined, commonData: IFontData): void {
        element.style.fontSize = data?.fontSize ?? commonData.fontSize;
        element.style.fontFamily = data?.fontFamily ?? commonData.fontFamily ?? "Roboto";
        element.style.color = data?.color ?? commonData.color;
        element.style.textAlign = data?.textAlign ?? commonData.textAlign ?? "left"
    }

    public static renderBackground(element: HTMLElement, background: IBackgroundData): void {
        if (!background) {
            return;
        }
        
        element.classList.add(`backgroundt-type-${background.type}`);

        element.style.background = background.color;
    }
}