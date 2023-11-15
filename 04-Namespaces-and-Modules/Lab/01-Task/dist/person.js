"use strict";
// cd "$(git rev-parse --show-toplevel)/04-Namespaces-and-Modules/Lab/01-Task"
// tsc && node dist/person.js
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(name) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}
// Example of usage
let p = new Person("Ivan Ivanov", 25);
console.log(p.introduction());
console.log(p.sayGoodbye("Petar Petrov"));
