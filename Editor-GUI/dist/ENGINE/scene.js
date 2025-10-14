import { Entity } from "./entity.js";
export class Scene {
    constructor() {
        this.entities = [];
        this.sceneName = 'New Scene';
        this.sceneID = 0;
    }
    createID() {
        this.sceneID = Scene.currentID++;
    }
    createEntity() {
        const entity = new Entity();
        entity.createID();
        this.entities.push(entity);
        return entity;
    }
    update(deltaTime) {
        if (this.entities.length < 0)
            return;
        this.entities.forEach(entity => {
            entity.update(deltaTime);
        });
    }
    draw(contex) {
        if (this.entities.length < 0)
            return;
        this.entities.forEach(entity => {
            entity.draw();
        });
    }
}
Scene.currentID = 0;
