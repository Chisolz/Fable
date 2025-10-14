import { Vector2 } from "./data-types/Vector2.js"
import { Component } from "./components/component.js";

export class Entity {
    position: Vector2 = Vector2.ZERO;
    components: Component[] = [];
    children: Entity[] = [];
    parent: Entity | null;
    name: string;

    // ID Counter
    id: number;
    static currentID: number = 0;
    
    constructor() {
        this.parent = null;
        this.id = 0;
        this.name = '';
    }

    createID() : void {
        this.id = Entity.currentID++;
    }

    update(deltaTime: number) : void {
        if (this.components.length > 0) {
            this.components.forEach(component => {
                component.update(deltaTime);
            });
        } 
    }

    draw() : void {
        if (this.components.length > 0) {
            this.components.forEach(component => {
                component.draw();
            });
        }
    }
}