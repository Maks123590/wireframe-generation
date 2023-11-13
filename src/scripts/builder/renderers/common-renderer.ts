import { IBorderRadiusData } from "../data/section-data";

export class CommonRenderer {
    public static renderBorderRadius(element: HTMLElement, data: IBorderRadiusData): void {
        element.style.borderTopLeftRadius = `${data.topLeftPx}px`;
        element.style.borderTopRightRadius = `${data.topRightPx}px`;
        element.style.borderBottomRightRadius = `${data.bottomRightPx}px`;
        element.style.borderBottomLeftRadius = `${data.bottomLeftPx}px`;
    }

    public static renderBackground(element: HTMLElement, background: string): void {
        element.style.background = background === "image" ? "#D9D9D9" : background;
    }
}