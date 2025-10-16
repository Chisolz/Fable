import { exports } from "../data-types/export_types";

type exp = Record<string, exports>
export class Component {
    _exports: exp;

    constructor() {
        this._exports = {};
    }

    getExport(name: string) : any {
        if (name in this._exports) return this._exports[name].value;
        return null;
    }

    update(deltaTime: number) : void {}

    draw() : void {}
}