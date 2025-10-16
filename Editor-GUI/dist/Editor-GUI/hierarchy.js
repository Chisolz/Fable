import { engine } from "./main.js";
const entityButton = document.getElementById("add-entity");
const template = document.getElementById("hierarchyTemplate");
const hierarchy = document.getElementById("in-hierarchy");
const sceneName = document.getElementById("scene-name");
// Create entity button in hierarchy
entityButton === null || entityButton === void 0 ? void 0 : entityButton.addEventListener("click", () => {
    let entityDiv = template === null || template === void 0 ? void 0 : template.cloneNode(true);
    if (entityDiv && entityDiv instanceof HTMLElement) {
        entityDiv.style.display = 'block';
        document.dispatchEvent(new CustomEvent("create-entity", { detail: { container: entityDiv } }));
        hierarchy === null || hierarchy === void 0 ? void 0 : hierarchy.appendChild(entityDiv);
    }
});
// Create entity in selected scene
document.addEventListener("create-entity", (event) => {
    if (!engine.currentScene)
        return;
    const entity = engine.currentScene.createEntity();
    const customEvent = event;
    customEvent.detail.container.id = `${entity.id}`;
});
// Add event listener to entity buttons
hierarchy === null || hierarchy === void 0 ? void 0 : hierarchy.addEventListener("click", (event) => {
    const button = event.target;
    if (button && button.matches(".entity-button"))
        button.addEventListener("click", () => {
            document.dispatchEvent(new CustomEvent("update-inspector", { detail: { id: +button.id } }));
        });
});
sceneName === null || sceneName === void 0 ? void 0 : sceneName.addEventListener("change", (e) => {
    let input = sceneName;
    console.log(input === null || input === void 0 ? void 0 : input.value);
});
