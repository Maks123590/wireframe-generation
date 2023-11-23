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
        sectionContent.classList.add("section-content");

        sectionContent.style.width = data.sectionContent.width;
        sectionContent.style.marginTop = data.sectionContent.marginTop;
        sectionContent.style.marginBottom = data.sectionContent.marginBottom;

        CommonRenderer.renderBackground(sectionContent, data.sectionContent.background ?? data.background);
        CommonRenderer.renderBorderRadius(sectionContent, data.sectionContent.borderRadius);

        if (data.sectionContent.contentType === "slider") {
            const sliderMarkWrapper = document.createElement("div");
            sliderMarkWrapper.classList.add("slider-mark-wrapper");

            for (let index = 0; index < 3; index++) {
                const sliderMark = document.createElement("div");
            sliderMark.classList.add("slider-mark");

            sliderMark.innerHTML =
            `<svg width="54" height="4" viewBox="0 0 54 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="54" height="4" rx="2" fill="#DCDFE4"/>
            </svg>
            `;

            sliderMarkWrapper.append(sliderMark);
                
            }

            
            section.append(sliderMarkWrapper);
        }

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
