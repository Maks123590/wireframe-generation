import { ICommonStyles, IFontData } from "../../data/common-styles";
import { ITextWidgetData } from "../../data/widget-data";
import { CommonRenderer } from "../common-renderer";

export class TextWidgetRenderer {

    static render(data: ITextWidgetData, commonStylesData: ICommonStyles): HTMLElement {
        const widget = document.createElement("div");
        widget.classList.add("widget", data.elementType);

        const widgetContent = document.createElement("div");
        widgetContent.classList.add("widget-content");

        widgetContent.textContent = this.loremIpsum.substring(0, data.charsCount);

        let commonFontSettings = commonStylesData.normalTextStyles;

        switch (data.textType) {
            case "heading1":
                commonFontSettings = commonStylesData.heading1Styles;
                break;
            case "heading2":
                commonFontSettings = commonStylesData.heading2Styles;
                break;
            case "heading3":
                commonFontSettings = commonStylesData.heading3Styles;
                break;
            case "heading4":
                commonFontSettings = commonStylesData.heading4Styles;
                break;
            case "subheading":
                commonFontSettings = commonStylesData.subheadingStyles;
                break;
            case "normal":
                commonFontSettings = commonStylesData.normalTextStyles;
                break;
        }

        CommonRenderer.renderFont(widgetContent, data.fontData, commonFontSettings);

        widget.append(widgetContent);
        return widget;
    }

    private static loremIpsum = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est. Ac felis donec et odio. Morbi tempus iaculis urna id volutpat. Neque viverra justo nec ultrices. Tortor posuere ac ut consequat. Turpis massa tincidunt dui ut ornare lectus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Eget mauris pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae congue mauris."
}