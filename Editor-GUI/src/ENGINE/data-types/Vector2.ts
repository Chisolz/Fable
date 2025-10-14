export class Vector2 {
    
    static ZERO: Vector2 = new Vector2(0, 0);
    static ONE: Vector2 = new Vector2(1, 1);
    static UP: Vector2 = new Vector2(0, -1);
    static DOWN: Vector2 = new Vector2(0, 1);
    static LEFT: Vector2 = new Vector2(-1, 0);
    static RIGHT: Vector2 = new Vector2(1, 0);

    constructor(public x: number = 0, public y: number = 0) {}

    // Clone this vector
    clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    // Set both coordinates
    set(x: number, y: number): this {
        this.x = x;
        this.y = y;
        return this;
    }

    // Add another vector
    add(v: Vector2): this {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    // Subtract another vector
    subtract(v: Vector2): this {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    // Multiply by scalar
    multiply(scalar: number): this {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    // Divide by scalar
    divide(scalar: number): this {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        return this;
    }

    // Magnitude / length of the vector
    get magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // Normalize (make it unit length)
    normalize(): this {
        const len = this.magnitude;
        if (len !== 0) {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }

    // Dot product
    dot(v: Vector2): number {
        return this.x * v.x + this.y * v.y;
    }

    // Distance to another vector
    distanceTo(v: Vector2): number {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Static helpers
    static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static subtract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static multiply(a: Vector2, scalar: number): Vector2 {
        return new Vector2(a.x * scalar, a.y * scalar);
    }

    // Debug output
    toString(): string {
        return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
}
