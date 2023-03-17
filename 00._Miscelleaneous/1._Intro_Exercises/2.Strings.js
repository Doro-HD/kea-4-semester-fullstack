// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const ex1Result = Number(numberOne) + Number(numberTwo)
console.log(ex1Result)

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const ex2Result = Number(anotherNumberOne) + Number(anotherNumberTwo)
const ex2ResultFixed = ex2Result.toFixed(2)

console.log(ex2ResultFixed)
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const ex3Result = (one + two + three) / 3
console.log(ex3Result)
// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const ex4Result = letters[0]

console.log(ex4Result)
// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const ex5Result = fact.replace('j', 'J')

console.log(ex5Result)

// --------------------------------------



