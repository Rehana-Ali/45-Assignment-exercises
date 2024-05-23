"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests Equality  and Inequality 
const string1 = "Apple";
const string2 = "orange";
console.log(string1 === string2);
console.log(string1 !== string2);
// Tests using the lowercase function
const mixedCaseString = "HelloWorld";
console.log(mixedCaseString.toLowerCase() === "helloworld");
console.log(mixedCaseString.toLowerCase() !== "helloworld");
//  • Numerical tests involving equality and inequality 
const num1 = 12;
const num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//  • Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
// • Test whether an item is in a array
// • Test whether an item is not in a array
const stationary = ["Pencil", "Scale", "Shopner", "Eraser"];
console.log(stationary.includes("Eraser"));
console.log(stationary.includes("eraser"));
