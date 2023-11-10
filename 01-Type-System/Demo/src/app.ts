// cd "$(git rev-parse --show-toplevel)/01-Type-System/Demo"
// tsc && node dist/app.js

//01. String and number
let greetingsMessage: string = "Hello";
greetingsMessage = "Ok";
greetingsMessage = `Ok (Update) ${123}`;
// greetingsMessage = 123; // Error
console.log(greetingsMessage);
let numberOfHouses: number = 4;
let decimal: number = 11;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let float: number = 3.14;
let big: bigint = 100n;
// decimal = `Hello`; // Error
console.log("number", decimal, hex, binary, float, big);

//02. Boolean
let isDog: boolean = true;
isDog = 3 > 2;
isDog = [1, 2, 3, 4].includes(2);
isDog = [1, 2, 3, 4].some((e) => e === 2);
// isDog = 1; // 1 and 0 is not mapped to true and false
console.log("boolean", isDog);

//03. Symbol
let uniqueSymbol: Symbol = Symbol("myUniqueSymbol");
let anotherUniqueSymbol: Symbol = Symbol("myUniqueSymbol");
const areEqual = uniqueSymbol === anotherUniqueSymbol;
console.log("symbol - areEqual", areEqual);

//04. Undefined and null
let person: undefined;
// person = 123; // Error
console.log(typeof person);
// let dogs: null = undefined; // Error
let dogs: null = null;
// dogs = 123; // Error
// console.log("null", dogs);

//05. Array
const arrOfNumbers: number[] = [1, 2, 3, 4];
console.log("Array of numbers", arrOfNumbers);
const arrOfRandomStrings: string[] = ["Pesho", "Gosho", "Stamat"]; // "Pesho".split("")
console.log("Array of strings", arrOfRandomStrings);
const arrOfBools: boolean[] = [true, false, true];
console.log("Array of booleans", arrOfBools);

//06. Tuple
type Person = {
  name: string;
  age: number;
};
const arrOfObj: Person[] = [
  { name: "Pesho", age: 12 },
  { name: "Gosho", age: 13 },
];
console.log("Array of objects", arrOfObj);

let numAndStrTuples: [number, string] = [1, "Pesho"];
numAndStrTuples = [1, "Mitko"];
console.log("Tuple", numAndStrTuples);

//07. Enum
enum DaysOfWorkWeek {
  Monday = 0,
  Tuesday = "Kuche",
  Wednesday = 300,
  Thursday = 4,
  Friday = 5,
}
console.log("Enum", DaysOfWorkWeek);
console.log("Enum", DaysOfWorkWeek.Monday);

//08. Any and unknown
let a: any = 5;
a = "Poker";
a = { name: "Gosho" };
a = [{ name: "Gosho" }, { name: "Pesho" }];
a = null;
console.log("any", a);

let b: unknown = 5;
b = "Poker";
b = { name: "Gosho" };
b = [{ name: "Gosho" }, { name: "Pesho" }];
b = null;
console.log("unknown", b);

function greetings(name: string): void {
  console.log(`Hello, ${name} This is 'void' example in TS`);
}
greetings("Pesho");

// 09 Optional parameters
function printPersonDetail(name: string, age?: number): string {
  if (typeof age != "undefined") {
    return `Hello, ${name}! Your are ${age} years old!`;
  }
  return "Hello " + name;
}
console.log(printPersonDetail("Mitko"));
console.log(printPersonDetail("Pesho", 18));

// 10. Union types
let personsArray: string[] | null = null;
function fetchPersons(): string[] {
  return ["Pesho", "Gosho", "Kiro"];
}
console.log("personArray before", personsArray);
personsArray = fetchPersons();
console.log("personArray after", personsArray);

let test: number | number[] = 5;
test = [1, 2, 3, 4];
console.log(test);

// 11. Intersection types
// Aliases
type Dog = { name: string };
type Dog2 = { fullName: string };
const obj: Dog & Dog2 = { name: "Pesho", fullName: "Pesho Todorov" };
console.log("Intersection", obj);

// 12. Literal types
let statusMsg: "success" | "error";
statusMsg = "success";
// statusMsg = "krushi"; // Error
// console.log("literal msg", statusMsg);

// 13. Type aliases
type Age = number;
type Cat = {
  breed: string;
  weigth: number;
  name: string;
  age: Age;
};
const catPesho: Cat = { breed: "Persian", weigth: 5, name: "Pesho", age: 3 }; // as Cat;
console.log("Aliases", catPesho);

// 14. Keyof
type Point = { x: number; y: number };
type PointKeys = keyof Point;

const point: Point = { x: 1, y: 2 };
const newPoint = {} as Point;
Object.keys(point).forEach((key) => {
  newPoint[key as PointKeys] = point[key as PointKeys] * 10;
});
console.log("Keyword keyof", newPoint);

// 15. Mapped types

// 16. Recursive types
interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}
