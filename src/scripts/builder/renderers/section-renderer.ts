import { ICommonStyles } from "../data/common-styles";
import { IGridData } from "../data/grid-data";
import { ISectionData } from "../data/section-data";
import { CommonRenderer } from "./common-renderer";
import { GridRenderer } from "./grid-renderer";

export class SectionRenderer {
    
    static render(data: ISectionData, commonStylesData: ICommonStyles): HTMLElement {
        const section = document.createElement("section");
  
        CommonRenderer.renderBackground(section, data.background);
        
        const label = this.generateElementLabel(data.sectionType);

        const sectionContent = document.createElement("div");
        sectionContent.classList.add("sectionContent");

        sectionContent.style.width = data.sectionContent.width;
        sectionContent.style.marginTop = data.sectionContent.marginTop;
        sectionContent.style.marginBottom = data.sectionContent.marginBottom;

        CommonRenderer.renderBackground(sectionContent, data.sectionContent.background ?? data.background);
        CommonRenderer.renderBorderRadius(sectionContent, data.sectionContent.borderRadius);

        data.sectionContent.grids.forEach((gridData: IGridData) => {
            const grid = GridRenderer.render(gridData, commonStylesData);
            sectionContent.append(grid);
        });

        section.append(sectionContent);
        section.append(label);

        return section;
    }

    private static generateElementLabel(elementType: any) {
        const typeLabel = document.createElement("div");
        typeLabel.classList.add("type-label");

        const span = document.createElement("span");
        span.innerHTML = elementType;

        typeLabel.append(span);
        return typeLabel;
    }

}
