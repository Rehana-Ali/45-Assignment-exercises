//  Tests Equality  and Inequality 
const string1:string = "Apple";
const string2:string = "orange";

console.log(string1 === string2);
console.log(string1 !== string2);

// Tests using the lowercase function
const mixedCaseString:string = "HelloWorld";
console.log(mixedCaseString.toLowerCase() ==="helloworld");
console.log(mixedCaseString.toLowerCase() !=="helloworld");


//  • Numerical tests involving equality and inequality 
const num1:number = 12;
const num2:number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);



//  • Tests using "and" and "or" operators
const condition1:boolean = true;
const condition2:boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// • Test whether an item is in a array
// • Test whether an item is not in a array
const stationary:string [] = ["Pencil", "Scale", "Shopner", "Eraser"];
console.log(stationary.includes("Eraser"));
console.log(stationary.includes("eraser"));