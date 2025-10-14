import { Scene } from "../ENGINE/scene.js"

export enum States {
    Running,
    Paused,
    Stopped
}

export class Engine {
    engineState = States.Stopped;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    // Scene management
    scenes: Scene[] = []
    currentScene: Scene | null = null;

    // Time management
    private lastTime = 0;
    private loopId: number | null = null;

    constructor(canvas: HTMLCanvasElement) {
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

    private createScene() : Scene {
        let scene = new Scene();
        scene.createID();
        this.scenes.push(scene);
        return scene;
    }

    private gameLoop = (time: number) => {
        const deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;

        if (this.currentScene) {
            this.clearScreen();
            this.currentScene.update(deltaTime);
            this.currentScene.draw(this.context);
        }

        this.engineState = States.Running;
        this.loopId = requestAnimationFrame(this.gameLoop);
    }

    private clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    stopGameLoop() : void {
        if (this.loopId) cancelAnimationFrame(this.loopId);
    }
}

