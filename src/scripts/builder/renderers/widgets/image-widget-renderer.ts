import { ICommonStyles } from "../../data/common-styles";
import { IImageWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class ImageWidgetRenderer {

    static render(data: IImageWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType);
    
        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");
    
        widgetContent.style.background = "#D9D9D9"; // add icon
        widgetContent.style.height = `${data.height}px`;
    
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
    
        CommonRenderer.renderBorderRadius(widgetContent, data.borderRadius);
    
        widget.append(widgetContent);
        return widget;
    }

}