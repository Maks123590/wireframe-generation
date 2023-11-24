import { ICommonStyles } from "../../data/common-styles";
import { ILoginWidgetData } from "../../data/widget-data";

export class LoginWidgetRenderer {

    static render(data: ILoginWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType.split(' ').join('-'));

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        const icon = document.createElement("span");
        icon.classList.add("login-icon");

        icon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

        widgetContent.append(icon);
        widget.append(widgetContent);
        return widget;
    }

}