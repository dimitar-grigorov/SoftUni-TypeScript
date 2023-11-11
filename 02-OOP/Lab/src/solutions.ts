// cd "$(git rev-parse --show-toplevel)/02-OOP/Lab"
// tsc && node dist/solutions.js

// 01. Car Info

class Car {
    private _brand: string;
    private _model: string;
    private _horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }

    public get brand(): string {
        return this._brand;
    }

    public set brand(value: string) {
        this._brand = value;
    }

    public get model(): string {
        return this._model;
    }

    public set model(value: string) {
        this._model = value;
    }

    public get horsePower(): number {
        return this._horsePower;
    }

    public set horsePower(value: number) {
        this._horsePower = value;
    }

    public getInfo(): string {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
    }
}

let testInput1 = "Chevrolet Impala 390"
const [brand, model, horsePower] = testInput1.split(" ");
const car = new Car(brand, model, Number(horsePower));
console.log(car.getInfo());
let testInput2 = "Skoda Karoq 150"
const [brand2, model2, horsePower2] = testInput2.split(" ");
const car2 = new Car(brand2, model2, Number(horsePower2));
console.log(car2.getInfo());

// 02. Opinion Poll
class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getInfo(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

const person1 = new Person("Peter", 12);
console.log(person1.getInfo());
const person2 = new Person("Sofia", 33);
console.log(person2.getInfo());

// 03. Bank Account
class BankAccount {
    private static _id: number = 0;
    private _balance: number = 0;
    private static _interestRate: number = 0.02;

    constructor() {
        BankAccount._id++;
    }

    public static setInterestRate(value: number): void {
        BankAccount._interestRate = value;
    }

    public getInterest(years: number): number {
        return BankAccount._interestRate * this._balance * years;
    }

    public deposit(amount: number): void {
        this._balance += amount;
    }

    public get id(): number {
        return BankAccount._id;
    }
}

function processBankCommands(commands: string[]): void {

    const accountList: { [id: number]: BankAccount } = {};

    for (const command of commands) {
        const parts = command.split(' ');
        const action = parts[0];

        switch (action) {
            case 'Create':
                const account = new BankAccount();
                accountList[account.id] = account;
                console.log(`Account ID${account.id} created`);
                break;

            case 'Deposit':
                const accountId = parseInt(parts[1], 10);
                const amount = parseFloat(parts[2]);

                if (!accountList[accountId]) {
                    console.log('Account does not exist');
                    break;
                }
                accountList[accountId].deposit(amount);
                console.log(`Deposited ${amount} to ID${accountId}`);
                break;

            case 'SetInterest':
                const newInterestRate = parseFloat(parts[1]);
                BankAccount.setInterestRate(newInterestRate);
                break;

            case 'GetInterest':
                const accId = parseInt(parts[1], 10);

                if (!accountList[accId]) {
                    console.log('Account does not exist');
                    break;
                }
                const numYears = parseInt(parts[2], 10);
                const interest = accountList[accId].getInterest(numYears);
                console.log(interest.toFixed(2));
                break;

            case 'End':
                return;

            default:
                console.log(`Invalid command: ${action}`);
        }
    }
}

// Test 1
const bankCommands = [
    'Create',
    'Deposit 1 20',
    'GetInterest 1 10',
    'End'
];
//processBankCommands(bankCommands);

// Test 2
const bankCommands2 = [
    'Create',
    'Create',
    'Deposit 1 20',
    'Deposit 3 20',
    'Deposit 2 10',
    'SetInterest 1.5',
    'GetInterest 1 1',
    'GetInterest 2 1',
    'GetInterest 3 1',
    'End',
];
processBankCommands(bankCommands2);


// 04 Hierarchical Inheritance
class Animal {
    eat(): void {
        console.log("eating...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("barking...");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("meowing...");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();

const cat = new Cat();
cat.eat();
cat.meow();




