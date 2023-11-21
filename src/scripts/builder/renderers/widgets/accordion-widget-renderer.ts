import { ICommonStyles } from "../../data/common-styles";
import { IAccordionWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class AccordionWidgetRenderer {

    static render(data: IAccordionWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        const ul = document.createElement("ul");
        ul.classList.add("accordion-items");

        for (let index = 0; index < data.itemsCount; index++) {
            const li = document.createElement("li");
            li.classList.add("accordion-item");

            const text = document.createElement("div");
            const icon = document.createElement("div");

            text.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed";
            icon.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8125 6.79688V9.51562H0.21875V6.79688H15.8125ZM9.46875 0.15625V16.7188H6.57812V0.15625H9.46875Z" fill="#202020"/>
            </svg>
            `;

            li.append(text);
            li.append(icon);
            ul.append(li);
        }

        widgetContent.append(ul);

        CommonRenderer.renderFont(widgetContent, undefined, commonStylesData.normalTextStyles);

        widget.append(widgetContent);
        return widget;
    }

}