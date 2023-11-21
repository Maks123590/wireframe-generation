import { ISectionData } from "./data/section-data";
import { IWireframeData } from "./data/wireframe-data";
import { SectionRenderer } from "./renderers/section-renderer";

export class WireframeBuilder {
  
    public generate(input: any) {
        const resultBlock = document.querySelector("#result-view") as HTMLElement;
        resultBlock.innerHTML = "";
  
        let wireframeData: IWireframeData;
  
        try {
            wireframeData = JSON.parse(input);
        } catch(error: any) {
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
            const section = SectionRenderer.render(sectionData, wireframeData.commonStyles);
            resultBlock.appendChild(section);
        });
    }
  
  }