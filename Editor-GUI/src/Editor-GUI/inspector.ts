import { engine } from "../Editor-GUI/main.js";
import { Entity } from "../ENGINE/entity";

const inspectorTab = document.getElementById("in-inspector");

let entityId = 0;
let entity: Entity | null = null;

document.addEventListener("update-inspector", (e) => {
    const event = e as CustomEvent;

    entityId = event.detail.id;

    entity = engine.currentScene?.getEntityById(entityId) ?? null;
});

// Reload inspector tab when new entity clicked
function loadInspector() {
    if (!inspectorTab) return;

    inspectorTab.innerHTML = '';
    
}
