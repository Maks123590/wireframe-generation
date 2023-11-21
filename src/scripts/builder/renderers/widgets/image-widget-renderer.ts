import { ICommonStyles } from "../../data/common-styles";
import { IImageWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class ImageWidgetRenderer {

    static render(data: IImageWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType);
    
        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");
    
        widgetContent.style.background = data.color ?? "#D9D9D9"; // add icon
        widgetContent.style.height = `${data.height}px`;

        widgetContent.innerHTML = `<svg width="50%" height="50%" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3153 1.57885C14.4476 1.3549 14.7785 1.3549 14.9108 1.57886L21.953 13.4961C22.0853 13.72 21.9199 14 21.6552 14H7.5709C7.30622 14 7.1408 13.72 7.27314 13.4961L14.3153 1.57885Z" fill="#A8A8A8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.62873 10.975C7.69015 10.8711 7.69015 10.743 7.62873 10.6391L4.9746 6.14758C4.84226 5.92363 4.51141 5.92363 4.37907 6.14758L0.0465774 13.4793C-0.0857627 13.7033 0.0796624 13.9832 0.344343 13.9832H5.65261C5.77545 13.9832 5.88895 13.9192 5.95037 13.8152L7.62873 10.975Z" fill="#A8A8A8"/>
        <path d="M8.78518 1.69646C8.78518 2.63339 8.0078 3.39292 7.04884 3.39292C6.08989 3.39292 5.3125 2.63339 5.3125 1.69646C5.3125 0.759531 6.08989 0 7.04884 0C8.0078 0 8.78518 0.759531 8.78518 1.69646Z" fill="#A8A8A8"/>
        </svg>`;

        if (data.fitType === "fit") {
            widget.style.display = "flex";
            widgetContent.style.width = data.width;
            widget.style.justifyContent = data.align == "left"
            ? "flex-start"
            : data.align == "right"
                ? "flex-end"
                : "center";
        } else {
            widgetContent.style.width = "auto";
        }
    
        CommonRenderer.renderBorderRadius(widgetContent, data.borderRadius);
    
        widget.append(widgetContent);
        return widget;
    }

}