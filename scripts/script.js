(function () {
    window.__truSites = window.__truSites || { };

    window.__truSites.init = () => {
        const generateBtn = document.querySelector("#generate-btn");
        const clearBtn = document.querySelector("#clear-btn");

        generateBtn.onclick = () => {
            const textArea = document.querySelector("#input");

            window.__truSites.generate(textArea.value);
        };

        clearBtn.onclick = () => {
            const textArea = document.querySelector("#input");
            const resultBlock = document.querySelector("#result-view");

            textArea.value = "";
            resultBlock.innerHTML = "";
        };
    }
    
    window.__truSites.generate = (input) => {
        const resultBlock = document.querySelector("#result-view");
        resultBlock.innerHTML = "";

        let sections = [];

        try {
            sections = JSON.parse(input);
        } catch(error) {
            const errorAlert = document.createElement("p");
            errorAlert.classList.add("error-alert");
            errorAlert.innerText = "INVALID FORMAT";

            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.innerText = error;

            resultBlock.append(errorAlert);
            resultBlock.append(errorMessage);
            return;
        }


        sections.forEach(sectionData => {
            const section = document.createElement("section");
            
            section.style.background = sectionData["background-color"];

            const label = window.__truSites.generateElementLabel(sectionData["section-type"]);

            const grid = document.createElement("div");
            grid.classList.add("mesh");
            grid.style.width = sectionData.grid.width;


            sectionData.grid.rows.forEach(rowData => {
                const row = document.createElement("div");
                row.classList.add("mesh-row");

                rowData.columns.forEach(columnData => {
                    const column = document.createElement("div");
                    column.classList.add("col");
                    column.classList.add(`col-${columnData.size}`);

                    columnData.widgets.forEach(widgetData => {
                        const widget = document.createElement("div");
                        widget.classList.add("widget", widgetData["element-type"]);
                        widget.style.background = widgetData["element-color"];

                        const label = window.__truSites.generateElementLabel(widgetData["element-type"]);

                        widget.append(label);
                        column.append(widget);
                    })

                    row.append(column);
                })

                grid.append(row);
            });


            section.append(grid);
            section.append(label);

            resultBlock.appendChild(section);
        });
    }

    window.__truSites.generateElementLabel = (elementType) => {
        const typeLabel = document.createElement("div");
        typeLabel.classList.add("type-label");

        const span = document.createElement("span");
        span.innerHTML = elementType;

        typeLabel.append(span);
        return typeLabel;
    }


    window.__truSites.generate


    window.__truSites.init();

})();

/* format

[
    {
        "section-type": "header",
        "background-color": "#F5F5F5",
        "grid": {
            "width": "80%",
            "rows": [
                {
                    "columns": [
                        {  
                            "size": 8,
                            "widgets": [
                                {
                                    "element-type": "image",
                                    "element-color": "#FBCEB1"
                                },
                                {
                                    "element-type": "button",
                                    "element-color": "#78DBE2"
                                }
                            ]
                        },
                        {  
                            "size": 4,
                            "widgets": [
                                {
                                    "element-type": "form",
                                    "element-color": "#BDECB6"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    }
]

<ELEMENT TYPES>
"heading-text",
"text"
"text-link"
"image",
"search-box",
"navigation-menu",
"form",
"button",
"map",
"social-links",
"blog-roll",
"blog-post.
</ELEMENT TYPES>

*/