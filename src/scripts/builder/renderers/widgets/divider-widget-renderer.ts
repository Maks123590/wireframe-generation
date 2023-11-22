import { ICommonStyles } from "../../data/common-styles";
import { IDividerWidgetData } from "../../data/widget-data";

export class DividerWidgetRenderer {

    static render(data: IDividerWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        const hr = document.createElement("hr");
        hr.style.height = "1px";
        hr.style.backgroundColor = data.color;
        hr.style.border = "none";

        widgetContent.append(hr);
        widget.append(widgetContent);
        return widget;
    }

}