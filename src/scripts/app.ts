import { WireframeBuilder } from "./builder/wireframe-builder";

export class App {

  private container: HTMLElement = document.body;

  constructor() {
  }

  public run() {
      const generateBtn = this.container.querySelector("#generate-btn") as HTMLElement;
      const clearBtn = this.container.querySelector("#clear-btn") as HTMLElement;

      const builder = new WireframeBuilder();

      generateBtn.onclick = () => {
          const textArea = document.querySelector("#input") as any;

          builder.generate(textArea.value);
      };

      clearBtn.onclick = () => {
          const textArea = document.querySelector("#input") as any;
          const resultBlock = document.querySelector("#result-view") as any;

          textArea.value = "";
          resultBlock.innerHTML = "";
      };
  }

}