import { IBackgroundData, IBorderRadiusData } from "./common-data";
import { IGridData } from "./grid-data";

export interface ISectionData {
    sectionType: string,
    background: IBackgroundData,
    sectionContent: {
        contentType: SectionContentType;
        borderRadius: IBorderRadiusData;
        background: IBackgroundData;
        width: string; // in percent
        marginTop: string;
        marginBottom: string;
        grids: IGridData[];
    }
}

export type SectionContentType = "single" | "slider";

export interface IAlignableData {
    fitType: "fit" | "fill";
    align: "left" | "right" | "center";
    width: string; // in percent
}
