//tsc && node ./dist/solution.js

type OperatorFunction = (a: number, b: number) => number;

type CalcType = {
  [key: string]: OperatorFunction;
};

const operatorFunctions: CalcType = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function calculator(
  firstNumber: number,
  operator: string,
  secondNumber: number
): void {
  if (operatorFunctions[operator]) {
    let result = operatorFunctions[operator](firstNumber, secondNumber);
    console.log(result.toFixed(2));
  } else {
    throw new Error("Invalid operator");
  }
}

calculator(5, "+", 10); // 15.00
calculator(25.5, "-", 3); // 22.50
calculator(9, "/", 2); // 4.50
calculator(7, "*", 5); // 35.00
