"use strict";
// cd "$(git rev-parse --show-toplevel)/02-OOP/Demo"
// tsc && node dist/app.js
// Procedural programming
const baseSalary = 30000;
const overtime = 10;
function getWage(baseSalary, overtime) {
    return baseSalary + overtime * 1.5;
}
console.log("Procedural programming", getWage(baseSalary, overtime));
// Object-oriented way
const employee = {
    baseSalary: 30000,
    overtime: 10,
    getWage: function () {
        return this.baseSalary + this.overtime * 1.5;
    },
};
console.log("OOP", employee.getWage());
class Computer {
    constructor(color) {
        this.color = color;
    }
    getDetails() {
        console.log(`Hello, my color is ${this.color} coilor!`);
    }
}
const comp = new Computer("red");
comp.getDetails();
class Person {
    constructor(fistName, age) {
        this.fistName = fistName;
        this.age = age;
    }
    static greetingIncrementor() {
        Person.count++;
        return Person.count;
    }
    greeting() {
        return `Hello, my name is ${this.fistName} and I am ${this.age} years old! Id number: ${Person.greetingIncrementor()}`;
    }
}
Person.count = 0;
const personMaria = new Person("Maria", 25);
console.log(personMaria.greeting());
//personMaria.count = 2; // error
console.log(Person.greetingIncrementor());
const personIvan = new Person("Ivan", 30);
console.log(personIvan.greeting());
// Getters and Setters
class Employee {
    constructor(firstName) {
        this._firstName = firstName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(newFirstName) {
        if (newFirstName.length < 4) {
            throw new Error("Name is too short");
        }
        this._firstName = newFirstName;
    }
}
const employeeIvan = new Employee("Ivan");
console.log("fistName", employeeIvan.firstName);
//employeeIvan.firstName = "Iv"; // throw error
employeeIvan.firstName = "Ivan1";
// Access modifiers
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
    }
    modifyAge() {
        //this.age = 30; // error
    }
}
const mitkoPerson = new Person2("Mitko", 25);
console.log(mitkoPerson.name);
mitkoPerson.getDetails();
class Employee2 extends Person2 {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    getDetails() {
        super.getDetails();
        console.log(`My salary is ${this.salary}`);
    }
}
// Design patterns
// Singleton
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
// Composition
// Component 1
class Engine {
    startEngine() {
        console.log("Engine started!");
    }
}
// Component 2
class Wheels {
    roll() {
        console.log("Wheel rolling!");
    }
}
// Component 3
class GPS {
    navigate(destination) {
        console.log(`Navigating to ${destination}`);
    }
}
//Car class composed of Engine, Wheel and GPS
class Car {
    constructor(engine, wheel, gps) {
        this.engine = engine;
        this.wheel = wheel;
        this.gps = gps;
    }
    drive(destination) {
        this.engine.startEngine();
        this.wheel.roll();
        this.gps.navigate(destination);
    }
}
// Example usage
const myEngine = new Engine();
const myWheels = new Wheels();
const myGPS = new GPS();
const myCar = new Car(myEngine, myWheels, myGPS);
myCar.drive("Sofia");
