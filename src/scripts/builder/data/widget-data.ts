import { IAlignableData, IBorderRadiusData } from "./section-data";

export interface ITextWidgetData {
    elementType: TextWidgetType;
    charsCount: number;
}

export interface IImageWidgetData extends IAlignableData {
    readonly elementType: "image";
    borderRadius: IBorderRadiusData;
    type: "primary" | "secondary"
}

export interface IFormWidgetData {
    readonly elementType: "form";
    type: "vertical | horizontal";
}

export interface ISocialLinksWidgetData {
    readonly elementType: "form";
    linksCount: 3
}

export type IWidgetData = ITextWidgetData | IImageWidgetData | IFormWidgetData | ISocialLinksWidgetData;

export type TextWidgetType = "heading1-text" | "heading2-text" | "text";

export type WidgetType = TextWidgetType | "menu" | "image" | "button" | "form" | "social-links"

