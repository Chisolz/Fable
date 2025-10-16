import { engine } from "./main.js";

const entityButton = document.getElementById("add-entity");
const template = document.getElementById("hierarchyTemplate");
const hierarchy = document.getElementById("in-hierarchy");
const sceneName = document.getElementById("scene-name");

// Create entity button in hierarchy
entityButton?.addEventListener("click", () => {
    let entityDiv = template?.cloneNode(true);
    if (entityDiv && entityDiv instanceof HTMLElement) {
        entityDiv.style.display = 'block';
        
        document.dispatchEvent(new CustomEvent("create-entity", {detail: {container: entityDiv}}));

        hierarchy?.appendChild(entityDiv);
    }
});

// Create entity in selected scene
document.addEventListener("create-entity", (event) => {
    if (!engine.currentScene) return;

    const entity = engine.currentScene.createEntity();
    const customEvent = event as CustomEvent;
    
    customEvent.detail.container.id = `${entity.id}`;
});

// Add event listener to entity buttons
hierarchy?.addEventListener("click", (event) => {
    const button = event.target as HTMLElement;
    if (button && button.matches(".entity-button")) button.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("update-inspector", {detail: {id: +button.id}}));
    });
});

sceneName?.addEventListener("change", (e) => {
    let input = sceneName as HTMLInputElement;
    if (engine.currentScene) engine.currentScene.sceneName = input?.value;
})