import { Component } from "./component.js";
import { Vector2 } from "../data-types/Vector2.js";
export class ImageRenderer extends Component {
    constructor() {
        super();
        this.scale = Vector2.ONE;
        this.source = '';
    }
}
