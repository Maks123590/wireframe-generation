import { IBackgroundData, IBorderRadiusData } from "./common-data";
import { IFontData } from "./common-styles";
import { IAlignableData } from "./section-data";

export interface ITextWidgetData {
    readonly elementType: "text";
    textType: TextWidgetType;
    charsCount: number;
    fontData?: IFontData;
}

export interface IImageWidgetData extends IAlignableData {
    readonly elementType: "image";
    height: number; // number in px
    color: string;
    borderRadius: IBorderRadiusData;
}

export interface IButtonWidgetData extends IAlignableData {
    readonly elementType: "button";
    borderRadius: IBorderRadiusData;
    buttonType: "primary" | "secondary";
}

export interface IBoxWidgetData {
    readonly elementType: "box";
    type: "vertical" | "horizontal";
    widgets: IWidgetData[];
    background: IBackgroundData;
    borderRadius: IBorderRadiusData;
}

export interface ILogoWidgetData {
    readonly elementType: "logo";
    fontData: IFontData;
}

export interface IFormWidgetData {
    readonly elementType: "form";
    type: "vertical" | "horizontal";
    itemsCount: number;
    buttonType: "primary" | "secondary";
}

export interface ISearchWidgetData {
    readonly elementType: "search-box";
    color: string;
}

export interface ISpacerWidgetData {
    readonly elementType: "spacer";
    height: string; // px
}

export interface IDividerWidgetData {
    readonly elementType: "divider";
    color: string;
}

export interface IAccordionWidgetData {
    readonly elementType: "accordion";
    itemsCount: 3
}

export interface IMenuWidgetData {
    readonly elementType: "menu";
    items: string[];
    align: "left" | "center" | "right";
    type: "vertical" | "horizontal";
    fontData: IFontData;
}

export interface ILoginWidgetData {
    readonly elementType: "login";
    color: string;
}

export interface ICartWidgetData {
    readonly elementType: "cart";
    color: string;
}

export interface ISocialLinksWidgetData {
    readonly elementType: "social-links";
    itemsCount: 3;
    align: "left" | "right" | "center";
}

export type IWidgetData = 
ITextWidgetData |
IImageWidgetData |
IButtonWidgetData |
IBoxWidgetData |
ILogoWidgetData |
IFormWidgetData |
ISearchWidgetData |
ISpacerWidgetData |
IDividerWidgetData |
IAccordionWidgetData |
IMenuWidgetData |
ILoginWidgetData |
ICartWidgetData |
ISocialLinksWidgetData;

export type TextWidgetType = "heading1" | "heading2" | "heading3" | "heading4" | "subheading" | "normal" | "link";

export type WidgetType = 
"text"
| "menu"
| "image"
| "button"
| "form"
| "social-links"
| "logo"
| "box"
| "spacer"
| "divider"
| "accordion"
| "search-box"
| "login"
| "cart";
