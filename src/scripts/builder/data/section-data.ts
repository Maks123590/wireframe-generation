import { IGridData } from "./grid-data";

export interface ISectionData {
    sectionType: string,
    background: string, //hex for color or image for image stub
    sectionContent: {
        contentType: SectionContentType,
        background: string, //hex for color or image for image stub
        borderRadiusData: IBorderRadiusData,
        grids: IGridData[],

    }
}


export type SectionContentType = "single" | "slider";


export interface IBorderRadiusData {
    topLeftPx: number;
    topRightPx: number;
    bottomLeftPx: number;
    bottomRightPx: number;
}

export interface IAlignableData {
    fitType: "fit" | "fill",
    align: "left" | "right" | "center",
    width: string // in percent
}