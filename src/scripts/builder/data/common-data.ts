export interface IBorderRadiusData {
    topLeftPx: number;
    topRightPx: number;
    bottomLeftPx: number;
    bottomRightPx: number;
}

export interface IBackgroundData {
    type: "color" | "image";
    color: string;
}