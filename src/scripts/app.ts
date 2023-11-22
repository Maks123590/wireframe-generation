import { WireframeBuilder } from "./builder/wireframe-builder";

export class App {

    private container: HTMLElement = document.body;
    private editor: AceAjax.Editor | null = null;
    private builder: WireframeBuilder;

    constructor() {
        this.builder = new WireframeBuilder();
    }

    public run() {
        this.configureJSONEditor();
        this.setupListners();
    }

    private setupListners(): void {
        const samplesSelector = this.container.querySelector("#samples-selector") as HTMLSelectElement;
        const generateBtn = this.container.querySelector("#generate-btn") as HTMLElement;

        const clearBtn = this.container.querySelector("#clear-btn") as HTMLElement;
        const minimizeJsonBtn = this.container.querySelector("#remove-spaces-btn") as HTMLElement;
        const formatJsonBtn = this.container.querySelector("#format-btn") as HTMLElement;

        samplesSelector.onchange = () => {
            if (!samplesSelector.value) {
                this.clearEditor();
                return;
            }

            this.selectFileFromSamples(samplesSelector.value);
        }

        generateBtn.onclick = () => {
            this.builder.generate(this.editor?.getValue());
        };

        clearBtn.onclick = () => this.clearEditor();

        minimizeJsonBtn.onclick = () => {
            const editorValue = this.editor?.getValue();
            if (!editorValue) {
                return;
            }

            this.editor?.setValue(JSON.stringify(JSON.parse(editorValue ?? "")));
            this.editor?.clearSelection();
        };

        formatJsonBtn.onclick = () => {
            const editorValue = this.editor?.getValue();
            if (!editorValue) {
                return;
            }

            const editorJSONValue = JSON.parse(editorValue);
            this.editor?.setValue(JSON.stringify(editorJSONValue, null, "\t"));
            this.editor?.clearSelection();
        };
    }

    private clearEditor(): void {
        const resultBlock = document.querySelector("#result-view") as HTMLElement;

        this.editor?.setValue("");
        resultBlock.innerHTML = "";
    }

    private selectFileFromSamples(filePath: string): void {
        fetch(filePath)
        .then((response) => response.text())
        .then((json) => {
            this.editor?.setValue(json);
            this.editor?.clearSelection();
            this.builder.generate(this.editor?.getValue());
        });
    }

    private configureJSONEditor(): void {
        var options = {
            theme: "ace/theme/chrome",
            mode: "ace/mode/json",
            fontSize: "14px"
        }

        this.editor = ace.edit("editor");
        this.editor.setOptions(options);
    }

}