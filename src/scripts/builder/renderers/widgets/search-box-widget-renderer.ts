import { ICommonStyles } from "../../data/common-styles";
import { ISearchWidgetData, ISpacerWidgetData } from "../../data/widget-data";

export class SearchBoxWidgetRenderer {

    static render(data: ISearchWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        const searchField = this.renderSearchField(data, commonStylesData);

        widgetContent.append(searchField);
        widget.append(widgetContent);
        return widget;
    }

    private static renderSearchField(data: ISearchWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const field = document.createElement("div");
        field.classList.add("search-field");

        field.style.background = data.color;
        
        const placeholder = document.createElement("span");
        placeholder.classList.add("placeholder");

        placeholder.textContent = "Search";

        placeholder.style.fontSize = commonStylesData.normalTextStyles?.fontSize;
        placeholder.style.fontFamily = commonStylesData.normalTextStyles.fontFamily ?? "Roboto";
        placeholder.style.color = "#626F86";

        const icon = document.createElement("span");
        placeholder.classList.add("search-icon");

        icon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#626F86" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#626F86" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

        field.append(placeholder);
        field.append(icon);

        return field;
    }

}