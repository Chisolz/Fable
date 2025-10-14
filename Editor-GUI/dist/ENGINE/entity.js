import { Vector2 } from "./data-types/Vector2.js";
export class Entity {
    constructor() {
        this.position = Vector2.ZERO;
        this.components = [];
        this.children = [];
        this.parent = null;
        this.id = 0;
        this.name = '';
    }
    createID() {
        this.id = Entity.currentID++;
    }
    update(deltaTime) {
        if (this.components.length > 0) {
            this.components.forEach(component => {
                component.update(deltaTime);
            });
        }
    }
    draw() {
        if (this.components.length > 0) {
            this.components.forEach(component => {
                component.draw();
            });
        }
    }
}
Entity.currentID = 0;
