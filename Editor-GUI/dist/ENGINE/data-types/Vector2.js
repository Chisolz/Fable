export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    // Clone this vector
    clone() {
        return new Vector2(this.x, this.y);
    }
    // Set both coordinates
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    // Add another vector
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    // Subtract another vector
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    // Multiply by scalar
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    // Divide by scalar
    divide(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        return this;
    }
    // Magnitude / length of the vector
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    // Normalize (make it unit length)
    normalize() {
        const len = this.magnitude;
        if (len !== 0) {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }
    // Dot product
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    // Distance to another vector
    distanceTo(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    // Static helpers
    static add(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
    static subtract(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }
    static multiply(a, scalar) {
        return new Vector2(a.x * scalar, a.y * scalar);
    }
    // Debug output
    toString() {
        return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
}
Vector2.ZERO = new Vector2(0, 0);
Vector2.ONE = new Vector2(1, 1);
Vector2.UP = new Vector2(0, -1);
Vector2.DOWN = new Vector2(0, 1);
Vector2.LEFT = new Vector2(-1, 0);
Vector2.RIGHT = new Vector2(1, 0);
