import { Vector2 } from "./Vector2.js";

type numExport = {
    type: "number";
    value: number;
}

type boolExport = {
    type: "boolean";
    value: boolean;
}

type stringExport = {
    type: "string";
    value: string;
}

type vec2Export = {
    type: "vec2";
    value: {x: number, y: number};
}

type arrayExport = {
    type: "array";
    value: exports[];
}

export type exports = numExport | boolExport | stringExport | vec2Export | arrayExport;