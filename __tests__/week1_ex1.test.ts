import {
    generateDate,
    toString,
    valueOf,
} from "../src/week1_ex1/app";

describe("test generateDate function", () => {
    test("should return Date", () => {
        expect(generateDate("06", "08", "2017")).toEqual(new Date(2017, 8, 6));
        expect(generateDate("05", 7, "2016")).toEqual(new Date(2016, 7, 5));
    });

    test("should return array of dates", () => {
        let input = [
            ["05", 7, "2016"],
            ["04", 6, "2015"],
            ["03", 5, "2014"],
        ];

        let expected = [
            new Date(2016, 7, 5),
            new Date(2015, 6, 4),
            new Date(2014, 5, 3),
        ];

        expect(generateDate(input)).toEqual(expected);

        input = [["05", 7, "2016"]];
        expected = [new Date(2016, 7, 5)];
        expect(generateDate(input)).toEqual(expected);
    });
});

describe("test toString function", () => {
    test("test usage with array", () => {
        expect(toString([1, 2, 3])).toBe("123");
        expect(toString([])).toBe("");
    });

    test("test usage with object", () => {
        expect(toString({})).toBe("[object Object]");
    });

    test("test usage with number", () => {
        expect(toString(123)).toBe("123");
    });

    test("test usage with string", () => {
        expect(toString("123")).toBe("123");
    });

    test("test usage with boolean", () => {
        expect(toString("true")).toBe("true");
        expect(toString("false")).toBe("false");
        expect(toString(true)).toBe("true");
        expect(toString(false)).toBe("false");
    });
});

describe("test valueOf function", () => {
    test("should return true if array not empty and false othewise", () => {
        expect(valueOf([1, 2, 3])).toBe(true);
        expect(valueOf([])).toBe(false);
    });

    test("test usage with object(always return true)", () => {
        expect(valueOf({})).toBe(true);
    });

    test("test usage with number(return true if number is bigger than 0)", () => {
        expect(valueOf(123)).toBe(true);
        expect(valueOf(0)).toBe(false);
    });

    test("test usage with string(return true if string length is bigger than 0)", () => {
        expect(valueOf("123")).toBe(true);
        expect(valueOf("")).toBe(false);
    });

    test("test usage with boolean", () => {
        expect(valueOf(true)).toBe(true);
        expect(valueOf(false)).toBe(false);
    });
});
