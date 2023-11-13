export class WireframeBuilder {

    constructor() {
    }
  
  
    public generate(input: any) {
        const resultBlock = document.querySelector("#result-view") as HTMLElement;
        resultBlock.innerHTML = "";
  
        let sections = [];
  
        try {
            sections = JSON.parse(input);
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
  
        sections.forEach((sectionData: any) => {
            const section = document.createElement("section");
          
            section.style.background = sectionData["background-color"];
  
            const label = this.generateElementLabel(sectionData["section-type"]);
  
            const grid = document.createElement("div");
            grid.classList.add("mesh");
            grid.style.width = sectionData.grid.width;
  
  
            sectionData.grid.rows.forEach((rowData: any) => {
                const row = document.createElement("div");
                row.classList.add("mesh-row");
  
                rowData.columns.forEach((columnData: any) => {
                    const column = document.createElement("div");
                    column.classList.add("col");
                    column.classList.add(`col-${columnData.size}`);
  
                    columnData.widgets.forEach((widgetData: any) => {
                        const widget = document.createElement("div");
                        widget.classList.add("widget", widgetData["element-type"].split(' ').join('-'));
                        widget.style.background = widgetData["element-color"];
  
                        const label = this.generateElementLabel(widgetData["element-type"]);
  
                        widget.append(label);
                        column.append(widget);
                    });
  
                    row.append(column);
                });
  
                grid.append(row);
            });
  
  
            section.append(grid);
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