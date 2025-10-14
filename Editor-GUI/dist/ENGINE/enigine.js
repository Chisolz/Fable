import { Scene } from "../ENGINE/scene.js";
export var States;
(function (States) {
    States[States["Running"] = 0] = "Running";
    States[States["Paused"] = 1] = "Paused";
    States[States["Stopped"] = 2] = "Stopped";
})(States || (States = {}));
export class Engine {
    constructor(canvas) {
        this.engineState = States.Stopped;
        // Scene management
        this.scenes = [];
        this.currentScene = null;
        // Time management
        this.lastTime = 0;
        this.loopId = null;
        this.gameLoop = (time) => {
            const deltaTime = (time - this.lastTime) / 1000;
            this.lastTime = time;
            if (this.currentScene) {
                this.clearScreen();
                this.currentScene.update(deltaTime);
                this.currentScene.draw(this.context);
            }
            this.engineState = States.Running;
            this.loopId = requestAnimationFrame(this.gameLoop);
        };
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error("Could not get 2D rendering context from canvas.");
        }
        this.context = ctx;
    }
    init() {
        let scene = this.createScene();
        scene.createID();
        this.currentScene = scene;
    }
    createScene() {
        let scene = new Scene();
        scene.createID();
        this.scenes.push(scene);
        return scene;
    }
    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    stopGameLoop() {
        if (this.loopId)
            cancelAnimationFrame(this.loopId);
    }
}
