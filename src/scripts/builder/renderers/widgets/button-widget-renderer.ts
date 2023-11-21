import { ICommonStyles } from "../../data/common-styles";
import { IButtonWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class ButtonWidgetRenderer {

    static render(data: IButtonWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.type);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        if (data.fitType === "fit") {
            widget.style.display = "flex";
            widgetContent.style.width = data.width;
            widget.style.justifyContent = data.align == "left"
            ? "flex-start"
            : data.align == "right"
                ? "flex-end"
                : "center";
        } else {
            widgetContent.style.width = "auto";
        }

        CommonRenderer.renderBorderRadius(widgetContent, commonStylesData.buttonBorderRadius);

        if (data.type === "primary") {
            widgetContent.style.background = commonStylesData.primaryButtonColor;
        }

        if (data.type === "secondary") {
            widgetContent.style.background = commonStylesData.secondaryButtonColor;
        }

        widget.append(widgetContent);
        return widget;
    }

}