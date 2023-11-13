/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _builder_wireframe_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/wireframe-builder */ "./src/scripts/builder/wireframe-builder.ts");

class App {
    constructor() {
        this.container = document.body;
    }
    run() {
        const generateBtn = this.container.querySelector("#generate-btn");
        const clearBtn = this.container.querySelector("#clear-btn");
        const builder = new _builder_wireframe_builder__WEBPACK_IMPORTED_MODULE_0__.WireframeBuilder();
        generateBtn.onclick = () => {
            const textArea = document.querySelector("#input");
            builder.generate(textArea.value);
        };
        clearBtn.onclick = () => {
            const textArea = document.querySelector("#input");
            const resultBlock = document.querySelector("#result-view");
            textArea.value = "";
            resultBlock.innerHTML = "";
        };
    }
}


/***/ }),

/***/ "./src/scripts/builder/wireframe-builder.ts":
/*!**************************************************!*\
  !*** ./src/scripts/builder/wireframe-builder.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WireframeBuilder: () => (/* binding */ WireframeBuilder)
/* harmony export */ });
class WireframeBuilder {
    constructor() {
    }
    generate(input) {
        const resultBlock = document.querySelector("#result-view");
        resultBlock.innerHTML = "";
        let sections = [];
        try {
            sections = JSON.parse(input);
        }
        catch (error) {
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
        sections.forEach((sectionData) => {
            const section = document.createElement("section");
            section.style.background = sectionData["background-color"];
            const label = this.generateElementLabel(sectionData["section-type"]);
            const grid = document.createElement("div");
            grid.classList.add("mesh");
            grid.style.width = sectionData.grid.width;
            sectionData.grid.rows.forEach((rowData) => {
                const row = document.createElement("div");
                row.classList.add("mesh-row");
                rowData.columns.forEach((columnData) => {
                    const column = document.createElement("div");
                    column.classList.add("col");
                    column.classList.add(`col-${columnData.size}`);
                    columnData.widgets.forEach((widgetData) => {
                        const widget = document.createElement("div");
                        widget.classList.add("widget", widgetData["element-type"].split(' ').join('-'));
                        widget.style.background = widgetData["element-color"];
                        const label = this.generateElementLabel(widgetData["element-type"]);
                        widget.append(label);
                        column.append(widget);
                    });
                    row.append(column);
                });
                grid.append(row);
            });
            section.append(grid);
            section.append(label);
            resultBlock.appendChild(section);
        });
    }
    generateElementLabel(elementType) {
        const typeLabel = document.createElement("div");
        typeLabel.classList.add("type-label");
        const span = document.createElement("span");
        span.innerHTML = elementType;
        typeLabel.append(span);
        return typeLabel;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/app */ "./src/scripts/app.ts");

const app = new _scripts_app__WEBPACK_IMPORTED_MODULE_0__.App();
app.run();

})();

/******/ })()
;
//# sourceMappingURL=wireframe-builder.js.map