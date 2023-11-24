import { ICommonStyles } from "../../data/common-styles";
import { IMenuWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class MenuWidgetRenderer {

    static render(data: IMenuWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.type ?? "horizontal");

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        const ul = document.createElement("ul");
        ul.classList.add("items-list");

        data.items.forEach((menuItem: string) => {
            const li = document.createElement("li");
            li.classList.add("menu-item");

            li.textContent = menuItem;

            ul.append(li);
        });

        widgetContent.append(ul);

        CommonRenderer.renderFont(widgetContent, data.fontData, commonStylesData.normalTextStyles);

        widget.append(widgetContent);
        return widget;
    }

}