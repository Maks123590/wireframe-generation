import { ICommonStyles } from "../data/common-styles";
import { IGridData, IRowData, IColumnData } from "../data/grid-data";
import { IWidgetData } from "../data/widget-data";
import { WidgetRenderer } from "./widget-renderer";

export class GridRenderer {
    
    static render(data: IGridData, commonStylesData: ICommonStyles): HTMLElement {
        const grid = document.createElement("div");
        grid.classList.add("mesh");
        grid.style.width = data.width;

        grid.style.marginTop = data.marginTop;
        grid.style.marginBottom = data.marginBottom;

        data.rows?.forEach((rowData: IRowData) => {
            const row = document.createElement("div");
            row.classList.add("mesh-row");

            rowData.columns?.forEach((columnData: IColumnData) => {
                const column = document.createElement("div");
                column.classList.add("col");
                column.classList.add(`col-${columnData.size}`);

                column.style.justifyContent = data.gridAlignment ?? "top";

                columnData.widgets?.forEach((widgetData: IWidgetData) => {
                    const widgetElement = WidgetRenderer.render(widgetData, commonStylesData);
                    column.append(widgetElement);
                });

                row.append(column);
            });

            grid.append(row);
        });

        return grid;
    }

}
