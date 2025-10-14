import { Engine } from "../ENGINE/enigine.js";
const gameScreen = document.getElementById("screen");
if (!gameScreen) {
    throw new Error("Cannot find canvas element with id 'screen'");
}
export const engine = new Engine(gameScreen);
// Add Entites / Scenes tab
const addElementTab = document.getElementById("add-element");
// Add components button and tab
const componentsButton = document.getElementById("add-component");
const componentsTab = document.getElementById("add-component-tab");
let mouseX = 0;
let mouseY = 0;
export let pageX = 0;
export let pageY = 0;
document.addEventListener("mousemove", (event) => {
    // Track position of mouse
    mouseX = event.clientX;
    mouseY = event.clientY;
    pageX = event.pageX;
    pageY = event.pageY;
});
addElementTab === null || addElementTab === void 0 ? void 0 : addElementTab.addEventListener("mouseleave", () => {
    // Close scene / entity tab if mouse leaves
    if (addElementTab) {
        addElementTab.classList.remove("active");
    }
});
// Open components tab if components button clicked
componentsButton === null || componentsButton === void 0 ? void 0 : componentsButton.addEventListener("click", () => {
    if (componentsTab) {
        componentsTab.classList.add("active");
        const rect = componentsTab.getBoundingClientRect();
        const width = rect.width;
        componentsTab.style.left = `${mouseX - width / 2}px`;
        componentsTab.style.top = `${mouseY}px`;
    }
});
// Close components tab if mouse leaves
componentsTab === null || componentsTab === void 0 ? void 0 : componentsTab.addEventListener("mouseleave", () => {
    componentsTab === null || componentsTab === void 0 ? void 0 : componentsTab.classList.remove("active");
});
// Create a default scene when the body loads
function initEditor() {
    engine.init();
}
initEditor();
