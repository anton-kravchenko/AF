// Create Circle class.
// It contains three properties x, y and radius.
// Create method calculate circle square.
// Create method calculate circle length.
// If radius will be more that 100 and less than 0 throw exception.

class Circle {
    public x: number;
    public y: number;
    public radius: number;

    constructor(x: number, y: number, radius: number) {
        if (radius > 0 && radius < 100) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        } else {
            throw Error(`Invalid radius ${radius}`);
        }
    }

    public calcPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    public calcSquare(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export default Circle;
