import { CommonRenderer } from "./common-renderer";
import { ICommonStyles } from "../data/common-styles";
import { IWidgetData } from "../data/widget-data";
import { TextWidgetRenderer } from "./widgets/text-widget-renderer";
import { FormWidgetRenderer } from "./widgets/form-widget-renderer";
import { ButtonWidgetRenderer } from "./widgets/button-widget-renderer";
import { ImageWidgetRenderer } from "./widgets/image-widget-renderer";
import { LogoWidgetRenderer } from "./widgets/logo-widget-renderer";
import { SpacerWidgetRenderer } from "./widgets/spacer-widget-renderer";
import { MenuWidgetRenderer } from "./widgets/menu-widget-renderer";
import { AccordionWidgetRenderer } from "./widgets/accordion-widget-renderer";

export class WidgetRenderer {
    
    static render(data: IWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        switch (data.elementType) {
            case "text": return TextWidgetRenderer.render(data, commonStylesData);
            case "button": return ButtonWidgetRenderer.render(data, commonStylesData);
            case "form": return FormWidgetRenderer.render(data, commonStylesData);
            case "image": return ImageWidgetRenderer.render(data, commonStylesData);
            case "logo": return LogoWidgetRenderer.render(data, commonStylesData);
            case "spacer": return SpacerWidgetRenderer.render(data, commonStylesData);
            case "menu": return MenuWidgetRenderer.render(data, commonStylesData);
            case "accordion": return AccordionWidgetRenderer.render(data, commonStylesData);
            case "social-links":
            case "box":
            case "divider":
            case "search-box":
            case "login":
            case "cart":
                return this.renderDefaultPlug(data);
        }

        return this.renderDefaultPlug(data);
    }

    private static renderDefaultPlug(data: IWidgetData): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType.split(' ').join('-'));

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        const span = document.createElement("span");

        widgetContent.style.display = "flex";
        widgetContent.style.justifyContent = "center";
        widgetContent.style.alignItems = "center";

        widgetContent.style.background = "#D9D9D9";
        widgetContent.style.height = "32px";

        CommonRenderer.renderBorderRadius(widgetContent, {
            topLeftPx: 24,
            topRightPx: 24,
            bottomLeftPx: 24,
            bottomRightPx: 24
        });

        span.innerText = data.elementType;

        widgetContent.append(span);
        widget.append(widgetContent);
        return widget;
    }

}
