// Implement override method that can retrieve day, month(as number as text format) and year and return Date object
// Override this method for retrieve array of such parameters and retrieve array with dates.
type DateArgs = [string, string | number, string];
function generateDate(day: string, month: string | number, year: string): Date;
function generateDate(dates: DateArgs []): Date [];
function generateDate(...data: any []): any {
    return 3 === data.length ?
        new Date(Number(data[2]), Number(data[1]), Number(data[0])) :
        data[0].map((item: any []) => new Date(Number(item[2]), Number(item[1]), Number(item[0])));
}

// Implements to string method. Retrieve different type of object returns string
function toString(data: string | number | boolean | object): string;
function toString(data: any): string {
    if (Array.isArray(data)) {
        return data.join("");
    }
    if (false === isNaN(data) || "object" === typeof data || "boolean" === typeof data) {
        return data.toString();
    }
    if ("string" === typeof data) {
        return data;
    }
}

// Implements valueOf method. Retrieve different type of objects returns true/false.
function valueOf(data: string | number | boolean | object): boolean;
function valueOf(data: any): boolean {
    if (Array.isArray(data)) {
        return 0 !== data.length;
    }
    if (false === isNaN(data)) {
        return 0 < data;
    }
    if ("string" === typeof data) {
        return 0 !== data.length;
    }
    if ("object" === typeof data) {
        return true;
    }
    if ("boolean" === typeof data) {
        return data;
    }
}

export {
    generateDate,
    toString,
    valueOf,
};
