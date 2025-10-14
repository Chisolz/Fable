import { Entity } from "./entity.js";

export class Scene {
    sceneName: string;
    entities: Entity[] = [];

    // ID Counter
    sceneID: number;
    static currentID: number = 0;

    constructor() {
        this.sceneName = 'New Scene';
        this.sceneID = 0;
    }

    createID() : void {
        this.sceneID = Scene.currentID++;
    }

    createEntity() : Entity {
        const entity = new Entity();
        entity.createID();

        this.entities.push(entity);
        return entity;
    }


    update(deltaTime: number) : void {
        if (this.entities.length < 0) return;

        this.entities.forEach(entity => {
            entity.update(deltaTime);
        });
    }

    draw(contex: CanvasRenderingContext2D) {
        if (this.entities.length < 0) return;

        this.entities.forEach(entity => {
            entity.draw();
        });
    }
}