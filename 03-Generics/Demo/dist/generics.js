"use strict";
// cd "$(git rev-parse --show-toplevel)/03-Generics/Demo"
// tsc && node dist/generics.js
// console.log(123);
const getTestGenerics = (paramId) => {
    return paramId;
};
const id1 = getTestGenerics(1);
const id2 = getTestGenerics("ZXacsadsa123");
const ids = getTestGenerics([1, 2, 3]);
const x = getTestGenerics({
    name: "Mitko",
    age: 12,
    address: "Sofia, Bulgaria",
    id: 1,
});
const y = getTestGenerics({
    name: "Mitko",
    age: 12,
    address: "Sofia, Bulgaria",
    id: "xyz123",
});
const generateAndAttachId = (obj) => {
    const objId = Math.random();
    return { ...obj, id: objId };
};
const person = { name: "Mitko", age: 21, city: "Lovech" };
const personWithId = generateAndAttachId(person);
console.log(personWithId);
const animal = {
    legsCount: 4,
    furColor: "blonde",
    name: "fluffy",
};
const animalWithId = generateAndAttachId(animal);
console.log(animalWithId);
function echo(arg) {
    console.log(typeof arg);
    return arg;
}
console.log("-------------------");
echo(1);
echo("string");
echo(true);
echo([1, 2, 3]);
const takeLast = (array) => {
    return array[array.length - 1];
};
console.log(takeLast([1, 2, 3, 4]));
console.log(takeLast(["a", "b", "c", "d"]));
console.log(takeLast([true, false, true]));
console.log(takeLast([{ a: 1 }, { a: 2 }, { a: 3 }]));
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj));
const makeTuples = (a, b) => {
    return [a, b];
};
console.log(makeTuples("a", true));
console.log(makeTuples(1, "a"));
// Kind of useless
const generateFn = (arg1, arg2) => {
    return [arg1, arg2];
};
const output = generateFn("Hello", 55);
console.log(output);
class Collection {
    constructor(...elements) {
        this.data = elements;
    }
    addElement(element) {
        this.data.push(element);
    }
    removeElement(element) {
        let index = this.data.indexOf(element);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
}
const numberCollection = new Collection(1, 2, 3, 4);
console.log(numberCollection.data);
numberCollection.addElement(99);
numberCollection.removeElement(2);
console.log(numberCollection.data);
const stringCollection = new Collection("a", "b", "c");
console.log(stringCollection.data);
stringCollection.addElement("d");
stringCollection.removeElement("b");
console.log(stringCollection.data);
class Test {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    getConcatinatedArguments() {
        return `My first param: ${this.first} and my second param: ${this.second}`;
    }
}
const test1 = new Test(1, "Gosho");
console.log(test1.getConcatinatedArguments());
const test2 = new Test("Zebra", { success: true });
console.log(test2.getConcatinatedArguments());
//--------------------------------------------
const person2 = {
    age: 33,
    addres: "Sofia, Bulgaria",
    firstName: "Pesho",
    lastName: "Ivanov",
};
function fullName(obj) {
    return `The full name of the user is ${obj.firstName} ${obj.lastName}!`;
}
console.log(fullName(person2));
const getSmth = (obj) => {
    return obj;
};
getSmth({ username: "123", password: "123", a: 1, b: 2, c: 3 });
