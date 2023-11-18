"use strict";
//tsc && node ./dist/solution.js
const operatorFunctions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};
function calculator(firstNumber, operator, secondNumber) {
    if (operatorFunctions[operator]) {
        let result = operatorFunctions[operator](firstNumber, secondNumber);
        console.log(result.toFixed(2));
    }
    else {
        throw new Error("Invalid operator");
    }
}
calculator(5, "+", 10); // 15.00
calculator(25.5, "-", 3); // 22.50
calculator(9, "/", 2); // 4.50
calculator(7, "*", 5); // 35.00
