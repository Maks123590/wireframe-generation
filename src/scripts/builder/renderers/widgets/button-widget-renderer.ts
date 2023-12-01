import { ICommonStyles } from "../../data/common-styles";
import { IButtonWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class ButtonWidgetRenderer {

    static render(data: IButtonWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.buttonType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        CommonRenderer.renderAlignment(widget, widgetContent, data);
        CommonRenderer.renderBorderRadius(widgetContent, commonStylesData.buttonBorderRadius);

        if (data.buttonType === "primary") {
            widgetContent.style.background = commonStylesData.primaryButtonColor;
        }

        if (data.buttonType === "secondary") {
            widgetContent.style.background = commonStylesData.secondaryButtonColor;
        }

        widget.append(widgetContent);
        return widget;
    }

}