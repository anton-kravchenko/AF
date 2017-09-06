let bool: boolean = false;
let num: number = 123;
let str:string = '123';
let template: string = `123 ${str}`;

let nums:number[] = [1,2,3];
let list:Array<number> = [1,2,3];

let tuple:[number, string] = [123, "123"];
tuple[2] = 123;
// tuple[3] = true; error, should be number | string

enum Color {red = 0, green = 1, blue = 2 }
enum Color1 {red, green, blue}

let red: Color = Color.red;

let unusable: void = undefined;

function error(message:string): never {
    throw Error(message)
}

function infinite(): never{
    for(;;){

    }
}

// type assertion: to imulate cast
let someVal: any = "string";
let len: number = (<string>someVal).length;
let len1: number = (someVal as string).length;

// desctructuring function parameters 
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1,2]);

let [first, ...rest] = [1, 2, 3, 4];

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

let { a:string, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

function destructing_with_type():void{
    let { a, b }: { a: string, b: number } = o;
}

// default values
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

// defining type
type C = { a: string, b?: number }
function f1({ a, b }: C): void {}

// destructing with renaming
let { a: newName1, b: newName2 } = o;


function f123({ a, b } = { a: "", b: 0 }): void {}
f123(); // ok, default to { a: "", b: 0 }

//+default properties
function f4({ a, b = 0 } = { a: "" }): void {
    // ...
}
f4({ a: "yes" }); // ok, default b = 0
f4(); // ok, default to { a: "" }, which then defaults b = 0

// spread operator
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

// later assignments will overwrite previous one
let defaults1 = { food: "spicy", price: "$$", ambiance: "noisy" };
let search1 = { food: "rich", ...defaults1 };

// spread copy only fields, methods will be loosed
class C123 {
    p = 12;
    m() {
    }
  }
  let c = new C123();
  let clone = { ...c };