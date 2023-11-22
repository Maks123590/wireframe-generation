import { ICommonStyles } from "../../data/common-styles";
import { ISocialLinksWidgetData } from "../../data/widget-data";

export class SocialLinksWidgetRenderer {

    static render(data: ISocialLinksWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType, data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        widget.style.display = "flex";
        widget.style.justifyContent = data.align == "left"
        ? "flex-start"
        : data.align == "right"
            ? "flex-end"
            : "center";

        for (let index = 0; index < data.linksCount; index++) {
            const link = document.createElement("div");
            link.classList.add("social-link");

            widgetContent.append(link);
        }

        widget.append(widgetContent);
        return widget;
    }

}