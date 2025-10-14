import { Component } from "./component.js";
import { Vector2 } from "../data-types/Vector2.js";

export class ImageRenderer extends Component {
    scale: Vector2 = Vector2.ONE;
    source: string = '';

    constructor() {
        super()
    }
}