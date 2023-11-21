import { ICommonStyles } from "../../data/common-styles";
import { ILogoWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class LogoWidgetRenderer {

    static render(data: ILogoWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        widgetContent.textContent = "Company Logo";

        CommonRenderer.renderFont(widgetContent, data.fontData, commonStylesData.normalTextStyles);

        widget.append(widgetContent);
        return widget;
    }

}