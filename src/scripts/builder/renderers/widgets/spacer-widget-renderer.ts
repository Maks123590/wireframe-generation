import { ICommonStyles } from "../../data/common-styles";
import { ISpacerWidgetData } from "../../data/widget-data";

export class SpacerWidgetRenderer {

    static render(data: ISpacerWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        widgetContent.style.height = data.height;

        widget.append(widgetContent);
        return widget;
    }

}