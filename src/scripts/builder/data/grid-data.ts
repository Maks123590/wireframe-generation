import { IWidgetData } from "./widget-data";

export interface IGridData {
    width: string, // in percent
    rows: IRowData[]
}

export interface IRowData {
    columns: IColumnData[]
}

export interface IColumnData {
    size: number // from 1 to 12
    widgets: IWidgetData[]
}