import { IColumnData, IGridData, IRowData } from "./data/grid-data";
import { ISectionData } from "./data/section-data";
import { IWidgetData } from "./data/widget-data";
import { IWireframeData } from "./data/wireframe-data";
import { WidgetRenderer } from "./renderers/widget-renderer";

export class WireframeBuilder {

    constructor() {
    }
  
    public generate(input: any) {
        const resultBlock = document.querySelector("#result-view") as HTMLElement;
        resultBlock.innerHTML = "";
  
        let wireframeData: IWireframeData;
  
        try {
            wireframeData = JSON.parse(input);
        } catch(error) {
            const errorAlert = document.createElement("p");
            errorAlert.classList.add("error-alert");
            errorAlert.innerText = "INVALID FORMAT";
  
            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.innerText = error;
  
            resultBlock.append(errorAlert);
            resultBlock.append(errorMessage);
            return;
        }

        console.warn(wireframeData);
  
        wireframeData.sections.forEach((sectionData: ISectionData) => {
            const section = document.createElement("section");
          
            section.style.background = sectionData.background === "image" ? "#D9D9D9" : sectionData.background;
  
            const label = this.generateElementLabel(sectionData.sectionType);
  
            const sectionContent = document.createElement("div");
            sectionContent.classList.add("sectionContent");

  
            sectionData.sectionContent.grids.forEach((gridData: IGridData) => {

                const grid = document.createElement("div");
                grid.classList.add("mesh");
                grid.style.width = sectionData.sectionContent.grids[0].width;

                gridData.rows.forEach((rowData: IRowData) => {
                    const row = document.createElement("div");
                    row.classList.add("mesh-row");
      
                    rowData.columns.forEach((columnData: IColumnData) => {
                        const column = document.createElement("div");
                        column.classList.add("col");
                        column.classList.add(`col-${columnData.size}`);
      
                        columnData.widgets.forEach((widgetData: IWidgetData) => {
                            const widgetElement = WidgetRenderer.render(widgetData, wireframeData.commonStyles);
                            column.append(widgetElement);
                        });
      
                        row.append(column);
                    });
      
                    grid.append(row);
                });
                
                sectionContent.append(grid);
            })

  
            section.append(sectionContent);
            section.append(label);
  
            resultBlock.appendChild(section);
        });
    }
  
    private generateElementLabel(elementType: any) {
          const typeLabel = document.createElement("div");
          typeLabel.classList.add("type-label");
  
          const span = document.createElement("span");
          span.innerHTML = elementType;
  
          typeLabel.append(span);
          return typeLabel;
      }
  
  }