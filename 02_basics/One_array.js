//In this part we are going to learn about basic operations on array and then we will move on some application based operation.

//There are two different ways to declare an array. First one is:
const myArr = [ 0, 1, 2, 3, 4, 5, 64, 34, 66];
//console.log(myArr[4]);//this is how we access an element of an array
//Now second way to declare an array is:
const myNewArr = new Array(6, 7, 8, 9, 10); //Here we declare array with an help of object.
// console.log(myNewArr[3]);

//Lets see some of operations that can be performed on arrays 
// myArr.push(8);
// myArr.pop();
// myArr.unshift(77);
// myArr.shift();
//console.log(myArr.includes(66));
const strArr = myArr.join();
// console.log(strArr);

// console.log(typeof(myArr));

// Now concept of slice and splice
console.log(myArr.slice(1, 4));
myArr.toSpliced(1, 4); //not working, dont know why?

console.log(myArr);
//already practiced flat method 


