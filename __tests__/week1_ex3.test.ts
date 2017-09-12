import Circle from "../src/week1_ex3/circle";

describe("Test Circle class", () => {
    test("Test constructor. Should init class instance with proper values", () => {
        const x: number = 10;
        const y: number = 10;
        const radius: number = 15;
        const circle = new Circle(x, y, radius);

        expect(circle.x).toBe(x);
        expect(circle.y).toBe(y);
        expect(circle.radius).toBe(radius);
    });

    test("Test constructor. Should throw exceptions if radius < 0", () => {
        const x: number = 10;
        const y: number = 10;
        const radius: number = -15;

        expect(() => {
            const circle = new Circle(x, y, radius);
        }).toThrow("Invalid radius -15");
    });

    test("Test constructor. Should throw exceptions if radius > 100", () => {
        const x: number = 10;
        const y: number = 10;
        const radius: number = 101;

        expect(() => {
            const circle = new Circle(x, y, radius);
        }).toThrow("Invalid radius 101");
    });

    test("Test calcSquare method.", () => {
        const x: number = 10;
        const y: number = 10;
        const radius: number = 5;

        const circle = new Circle(x, y, radius);

        const expectedSquare = Math.PI * radius * radius;
        expect(circle.calcSquare()).toBe(expectedSquare);
    });

    test("Test calcPerimeter method.", () => {
        const x: number = 10;
        const y: number = 10;
        const radius: number = 5;

        const circle = new Circle(x, y, radius);

        const expectedPerimeter = 2 * Math.PI * radius;
        expect(circle.calcPerimeter()).toBe(expectedPerimeter);
    });

});
