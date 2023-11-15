"use strict";
// cd "$(git rev-parse --show-toplevel)/04-Namespaces-and-Modules/Lab/02-Deliveries"
// tsc && node dist/Courier.js
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const existingCustomer = this.placesToVisit.find((customer) => customer.customerName === customerName);
        if (existingCustomer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        console.log(`${customerName} just became your client.`);
    }
    visitCustomer(customerName) {
        const customer = this.placesToVisit.find((customer) => customer.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer.`);
        }
        customer.visited = true;
        return `${customerName} -> ${customer.visited}`;
    }
    showCustomers() {
        let result = "";
        this.placesToVisit.forEach((customer) => {
            result += `${customer.customerName} -> ${customer.visited}\n`;
        });
        return result;
    }
}
// Example usage
let courier = new Courier([{ customerName: "DHL", visited: false }]);
courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");
courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");
console.log(courier.showCustomers());
