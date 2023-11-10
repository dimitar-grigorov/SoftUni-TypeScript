// cd "$(git rev-parse --show-toplevel)/02-OOP/Demo"
// tsc && node dist/app.js

// Procedural programming
const baseSalary = 30000;
const overtime = 10;

function getWage(baseSalary: number, overtime: number) {
    return baseSalary + overtime * 1.5;
}
console.log("Procedural programming", getWage(baseSalary, overtime));

// Object-oriented way
const employee = {
    baseSalary: 30000,
    overtime: 10,
    getWage: function (): number {
        return this.baseSalary + this.overtime * 1.5;
    },
};
console.log("OOP", employee.getWage());

// const car = {
//     speedLimit: 120,
//     suspension: "air",
//     color: "green",
//     getColorSuspenssionAndLimit: function (): string {
//         return this.color + " " + this.suspension + " " + this.speedLimit;
//     },
// }

interface Details {
    getDetails: () => void;
}

class Computer implements Details {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    public getDetails(): void {
        console.log(`Hello, my color is ${this.color} coilor!`);
    }
}

const comp = new Computer("red");
comp.getDetails();


class Person {
    // properties
    fistName: string;
    age: number;
    static count: number = 0;

    constructor(fistName: string, age: number) {
        this.fistName = fistName;
        this.age = age;
    }
    static greetingIncrementor(): number {
        Person.count++;
        return Person.count;
    }

    greeting(): string {
        return `Hello, my name is ${this.fistName} and I am ${this.age} years old! Id number: ${Person.greetingIncrementor()}`;
    }
}

const personMaria = new Person("Maria", 25);
console.log(personMaria.greeting());
//personMaria.count = 2; // error
console.log(Person.greetingIncrementor());

const personIvan = new Person("Ivan", 30);
console.log(personIvan.greeting());

// Getters and Setters
class Employee {
    private _firstName: string;

    constructor(firstName: string) {
        this._firstName = firstName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(newFirstName: string) {
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
    public name: string;
    readonly age: number; // Set only in constructor

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getDetails(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
    }

    public modifyAge(): void {
        //this.age = 30; // error
    }
}

const mitkoPerson = new Person2("Mitko", 25);
console.log(mitkoPerson.name);
mitkoPerson.getDetails();

class Employee2 extends Person2 {
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    public getDetails(): void {
        super.getDetails();
        console.log(`My salary is ${this.salary}`);
    }
}

// Design patterns
// Singleton

class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Composition
// Component 1
class Engine {
    public startEngine(): void {
        console.log("Engine started!");
    }
}

// Component 2
class Wheels {
    public roll(): void {
        console.log("Wheel rolling!");
    }
}

// Component 3
class GPS {
    public navigate(destination: string): void {
        console.log(`Navigating to ${destination}`);

    }
}

//Car class composed of Engine, Wheel and GPS
class Car {
    private engine: Engine;
    private wheel: Wheels;
    private gps: GPS;

    constructor(engine: Engine, wheel: Wheels, gps: GPS) {
        this.engine = engine;
        this.wheel = wheel;
        this.gps = gps;
    }

    public drive(destination: string): void {
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

