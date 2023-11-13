import { IAlignableData, IBorderRadiusData } from "./section-data";

export interface ITextWidgetData {
    elementType: TextWidgetType;
    charsCount: number;
}

export interface IImageWidgetData extends IAlignableData {
    readonly elementType: "image";
    height: number, // number in px
    borderRadius: IBorderRadiusData;
}

export interface IButtonWidgetData extends IAlignableData {
    readonly elementType: "button";
    borderRadius: IBorderRadiusData;
    type: "primary" | "secondary"
}

export interface IFormWidgetData {
    readonly elementType: "form";
    type: "vertical" | "horizontal";
}

export interface ISocialLinksWidgetData {
    readonly elementType: "social-links";
    linksCount: 3
}

export type IWidgetData = ITextWidgetData | IImageWidgetData | IButtonWidgetData | IFormWidgetData | ISocialLinksWidgetData;

export type TextWidgetType = "heading1-text" | "heading2-text" | "text";

export type WidgetType = TextWidgetType | "menu" | "image" | "button" | "form" | "social-links"

