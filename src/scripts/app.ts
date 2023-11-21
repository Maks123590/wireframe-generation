import { WireframeBuilder } from "./builder/wireframe-builder";

export class App {

    private container: HTMLElement = document.body;
    private editor: AceAjax.Editor | null = null;

    constructor() {
    }

    public run() {
        const generateBtn = this.container.querySelector("#generate-btn") as HTMLElement;
        const clearBtn = this.container.querySelector("#clear-btn") as HTMLElement;

        this.configureJSONEditor();

        const builder = new WireframeBuilder();

        generateBtn.onclick = () => {
            builder.generate(this.editor?.getValue());
        };

        clearBtn.onclick = () => {
            const resultBlock = document.querySelector("#result-view") as HTMLElement;

            this.editor?.setValue("");
            resultBlock.innerHTML = "";
        };
    }

    public configureJSONEditor(): void {
        var options = {
            theme: "ace/theme/chrome",
            mode: "ace/mode/json",
            fontSize: "14px"
        }

        this.editor = ace.edit("editor");
        this.editor.setOptions(options);
    }

}