import { ICommonStyles } from "../../data/common-styles";
import { IFormWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class FormWidgetRenderer {

    static render(data: IFormWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.type);
    
        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");
    
        const form = document.createElement("form");

        const fieldsCount = data.fieldsCount ?? 2;

        for (let index = 0; index < fieldsCount - 1; index++) {
            form.append(this.renderField("input", commonStylesData));
        }

        form.append(this.renderField("textarea", commonStylesData));
        
        const submitButton = this.renderSubmitButton(commonStylesData);
    
        form.append(submitButton);

        widgetContent.append(form);
        widget.append(widgetContent);
        return widget;
    }

    private static renderField(type: "input" | "textarea", commonStylesData: ICommonStyles): HTMLElement {
        const field = document.createElement("div");
        field.classList.add("form-field", type);
    
        const placeholder = document.createElement("span");
        placeholder.classList.add("placeholder");

        placeholder.textContent = "Enter your data";

        placeholder.style.fontSize = commonStylesData.normalTextStyles?.fontSize;
        placeholder.style.fontFamily = commonStylesData.normalTextStyles.fontFamily ?? "Roboto";
        placeholder.style.color = "#626F86";

        field.append(placeholder);

        return field;
    }

    private static renderSubmitButton(commonStylesData: ICommonStyles): HTMLElement {
        const submitButton = document.createElement("div");
        submitButton.classList.add("submit");

        submitButton.style.background = commonStylesData.primaryButtonColor;
        CommonRenderer.renderBorderRadius(submitButton, commonStylesData.buttonBorderRadius);
    
        return submitButton;
    }

}