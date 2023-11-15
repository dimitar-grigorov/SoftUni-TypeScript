"use strict";
// cd "$(git rev-parse --show-toplevel)/03-Generics/Lab"
// tsc && node dist/solutions.js
//01. Generic Box of String
class Box {
    constructor(data) {
        this._data = data;
    }
    toString() {
        return `${this._data} is a ${typeof this._data}`;
    }
}
let box1 = new Box(["test"]);
let box2 = new Box(20);
let box3 = new Box("Hello");
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
//02. Generic Compare Elements
class CompareElements {
    constructor(data) {
        this._data = data;
    }
    compare(comparator) {
        let count = 0;
        this._data.forEach((element) => {
            if (comparator == element) {
                count++;
            }
        });
        return count;
    }
}
let c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);
console.log(c.compare("b")); // 2
let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(d.compare(1));
class CarDealership {
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
        let details = `${this.dealershipName}:\n`;
        for (const dealerID in this.modelsSold) {
            details += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
        }
        return details;
    }
}
let dealership = new CarDealership("SilverStar");
dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
//04. Bank Transactions
class CreateAccount {
    constructor(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}
class PersonalAccount extends CreateAccount {
    constructor(bankName, bankID, ownerName) {
        super(bankName, bankID);
        this.money = 0;
        this.recentTransactions = {};
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money >= amount) {
            // Check if expenseType already exists in recentTransactions
            if (this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] += amount;
            }
            else {
                this.recentTransactions[expenseType] = amount;
            }
            // Deduct amount from money
            this.money -= amount;
        }
        else {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }
    showDetails() {
        // Calculate total money spent on expenses
        const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce((total, amount) => total + amount, 0);
        // Return details in the required format
        return `
Bank name: ${this.bankName}
Bank ID: ${this.bankID}
Owner name: ${this.ownerName}
Money: ${this.money}
Money spent: ${totalMoneySpentOnExpenses}
`;
    }
}
// Examples
let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");
account.deposit(1000);
account.deposit(1000);
account.expense(700, "Buy new phone");
account.expense(400, "Book a vacation");
account.expense(400, "Book a vacation");
account.expense(100, "Buy food");
console.log(account.showDetails());
let account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
