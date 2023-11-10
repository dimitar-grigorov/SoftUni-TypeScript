// cd "$(git rev-parse --show-toplevel)/01-Type-System/Lab"
// tsc && node dist/app.js

// 01. Hello World
console.log("01.Hello World");
function helloWorld() {
    console.log("Hello World");
}
helloWorld();

// 02. Numbers 1 to 10
console.log("02. Numbers 1 to 10");
function numbersOneToTen() {
    for (let i: number = 1; i <= 10; i++) {
        console.log(i);
    }
}
numbersOneToTen();

// 03. Calculate Rectangle Area
console.log("03. Calculate Rectangle Area");
function calculateRectangleArea(width: number, height: number) {
    return width * height;
}
console.log(calculateRectangleArea(5, 7));
console.log(calculateRectangleArea(6, 8));

//04. Convertor Inches to Centimeters
console.log("04. Convertor Inches to Centimeters");
function convertorInchesToCentimeters(inches: number) {
    return inches * 2.54;
}
console.log(convertorInchesToCentimeters(5));
console.log(convertorInchesToCentimeters(7));

//05. Calculate Circle Area
console.log("05. Calculate Circle Area");
function calculateCircleArea(radius: number) {
    //format the result to the 2nd decimal place
    return (radius * radius * Math.PI).toFixed(2);
}
console.log(calculateCircleArea(5));

//06. String Length
console.log("06. String Length");
function stringLenth(input: string) {
    return input.length;
}
console.log(stringLenth("chocolate"));
console.log(stringLenth("pasta"));

//07. Largest Number
console.log("07. Largest Number");
function largestNumber(num1: number, num2: number, num3: number): string {
    return `The largest number is ${Math.max(num1, num2, num3)}.`;
}
console.log(largestNumber(5, -3, 16));
console.log(largestNumber(-3, -5, -22.5));

//8. Sum of Numbers N…M
console.log("08. Sum of Numbers N…M");
function sumOfNumbersNToM(num1: string, num2: string): number {
    let sum: number = 0;
    for (let i: number = Number(num1); i <= Number(num2); i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbersNToM("1", "5"));
console.log(sumOfNumbersNToM("-8", "20"));

//09. Day of Week
console.log("09. Day of Week");
function dayOfWeek(day: string): string {
    switch (day) {
        case "Monday":
            return "1";
        case "Tuesday":
            return "2";
        case "Wednesday":
            return "3";
        case "Thursday":
            return "4";
        case "Friday":
            return "5";
        case "Saturday":
            return "6";
        case "Sunday":
            return "7";
        default:
            return "error";
    }
}
console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Friday"));
console.log(dayOfWeek("Invalid"));

