//Strings are primitive data type in javascript.
const myName= "Sushil";
const myAge = 21;
//This is new practice in coding community regarding how we merge strings in sentences .
console.log(`My name is ${myName} and i am ${myAge} years old.`);
 
const decString = new String("Sushilky");

// console.log(decString.length);

// console.log(decString[5]);

//when we use touppercase function of string, it doesn't change the original string as we have already covred that only copy of primitive data are passed and changed not the original one.

// console.log(decString.toUpperCase());

// console.log(decString.replace('s','h'));
console.log(`the value of character at index number 5 is ${decString.at(5)}.`);