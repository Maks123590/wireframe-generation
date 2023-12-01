import { ICommonStyles } from "../../data/common-styles";
import { IBoxWidgetData, ILogoWidgetData, IWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";
import { WidgetRenderer } from "../widget-renderer";

export class BoxWidgetRenderer {

    static render(data: IBoxWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        CommonRenderer.renderBackground(widgetContent, data.background);
        CommonRenderer.renderBorderRadius(widgetContent, data.borderRadius);
        
        widget.classList.add(data.type ?? "vertical");

        data.widgets?.forEach((widgetData: IWidgetData) => {
            const widget = WidgetRenderer.render(widgetData, commonStylesData);
            widgetContent.append(widget);
        });

        widget.append(widgetContent);
        return widget;
    }

}