"use strict";
// cd "$(git rev-parse --show-toplevel)/02-OOP/Lab"
// tsc && node dist/solutions.js
// 01. Car Info
class Car {
    constructor(brand, model, horsePower) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get horsePower() {
        return this._horsePower;
    }
    set horsePower(value) {
        this._horsePower = value;
    }
    getInfo() {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
    }
}
let testInput1 = "Chevrolet Impala 390";
const [brand, model, horsePower] = testInput1.split(" ");
const car = new Car(brand, model, Number(horsePower));
console.log(car.getInfo());
let testInput2 = "Skoda Karoq 150";
const [brand2, model2, horsePower2] = testInput2.split(" ");
const car2 = new Car(brand2, model2, Number(horsePower2));
console.log(car2.getInfo());
// 02. Opinion Poll
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const person1 = new Person("Peter", 12);
console.log(person1.getInfo());
const person2 = new Person("Sofia", 33);
console.log(person2.getInfo());
// 03. Bank Account
class BankAccount {
    constructor() {
        this._balance = 0;
        BankAccount._id++;
    }
    static setInterestRate(value) {
        BankAccount._interestRate = value;
    }
    getInterest(years) {
        return BankAccount._interestRate * this._balance * years;
    }
    deposit(amount) {
        this._balance += amount;
    }
    get id() {
        return BankAccount._id;
    }
}
BankAccount._id = 0;
BankAccount._interestRate = 0.02;
function processBankCommands(commands) {
    const accountList = {};
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
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing...");
    }
}
const dog = new Dog();
dog.eat();
dog.bark();
const cat = new Cat();
cat.eat();
cat.meow();
