"use strict";
let greetingsMessage = "Hello";
greetingsMessage = "Ok";
greetingsMessage = `Ok (Update) ${123}`;
// greetingsMessage = 123; // Error
// console.log(greetingsMessage);
let numberOfHouses = 4;
let decimal = 11;
let hex = 0xf00d;
let binary = 0b1010;
let float = 3.14;
let big = 100n;
// decimal = `Hello`; // Error
// console.log("number", decimal, hex, binary, float, big);
let isDog = true;
isDog = 3 > 2;
isDog = [1, 2, 3, 4].includes(2);
isDog = [1, 2, 3, 4].some((e) => e === 2);
// isDog = 1; // 1 and 0 is not mapped to true and false
// console.log("boolean", isDog);
let uniqueSymbol = Symbol("myUniqueSymbol");
let anotherUniqueSymbol = Symbol("myUniqueSymbol");
const areEqual = uniqueSymbol === anotherUniqueSymbol;
// console.log("symbol - areEqual", areEqual);
let person;
// person = 123; // Error
console.log(typeof person);
// let dogs: null = undefined; // Error
let dogs = null;
// dogs = 123; // Error
// console.log("null", dogs);
const arrOfNumbers = [1, 2, 3, 4];
// console.log("Array of numbers", arrOfNumbers);
const arrOfRandomStrings = ["Pesho", "Gosho", "Stamat"]; // "Pesho".split("")
// console.log("Array of strings", arrOfRandomStrings);
const arrOfBools = [true, false, true];
const arrOfObj = [
    { name: "Pesho", age: 12 },
    { name: "Gosho", age: 13 },
];
// console.log("Array of objects", arrOfObj);
let numAndStrTuples = [1, "Pesho"];
numAndStrTuples = [1, "Mitko"];
// console.log("Tuple", numAndStrTuples);
var DaysOfWorkWeek;
(function (DaysOfWorkWeek) {
    DaysOfWorkWeek[DaysOfWorkWeek["Monday"] = 0] = "Monday";
    DaysOfWorkWeek["Tuesday"] = "Kuche";
    DaysOfWorkWeek[DaysOfWorkWeek["Wednesday"] = 300] = "Wednesday";
    DaysOfWorkWeek[DaysOfWorkWeek["Thursday"] = 4] = "Thursday";
    DaysOfWorkWeek[DaysOfWorkWeek["Friday"] = 5] = "Friday";
})(DaysOfWorkWeek || (DaysOfWorkWeek = {}));
// console.log("Enum", DaysOfWorkWeek);
// console.log("Enum", DaysOfWorkWeek.Monday);
let a = 5;
a = "Poker";
a = { name: "Gosho" };
a = [{ name: "Gosho" }, { name: "Pesho" }];
a = null;
// console.log("any", a);
let b = 5;
b = "Poker";
b = { name: "Gosho" };
b = [{ name: "Gosho" }, { name: "Pesho" }];
b = null;
// console.log("unknown", b);
function greetings(name) {
    console.log(`Hello, ${name} This is 'void' example in TS`);
}
greetings("Pesho");
function printPersonDetail(name, age) {
    if (typeof age != "undefined") {
        return `Hello, ${name}! Your are ${age} years old!`;
    }
    return "Hello " + name;
}
// console.log(printPersonDetail("Mitko"));
// console.log(printPersonDetail("Pesho", 18));
let personsArray = null;
function fetchPersons() {
    return ["Pesho", "Gosho", "Kiro"];
}
// console.log("personArray before", personsArray);
// personsArray = fetchPersons();
// console.log("personArray after", personsArray);
let test = 5;
test = [1, 2, 3, 4];
const obj = { name: "Pesho", fullName: "Pesho Todorov" };
// console.log("Intersection", obj);
// Literal types
let statusMsg;
statusMsg = "success";
const catPesho = { breed: "Persian", weigth: 5, name: "Pesho", age: 3 }; // as Cat;
console.log("Aliases", catPesho);
const point = { x: 1, y: 2 };
const newPoint = {};
Object.keys(point).forEach((key) => {
    newPoint[key] = point[key] * 10;
});
console.log("Keyword keyof", newPoint);
//# sourceMappingURL=app.js.map