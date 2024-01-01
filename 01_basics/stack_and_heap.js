//Understanding the concept of stack and heap with the help of primitive and non primitive data type.....
// List of primitive data types : Number, Boolean, BigInt, Null, Undefine, Symbol and String.
//List of non-primitives data types : Function , Objects ,Arrays.
//NOTE: all the primitive data types are stored in stack while the non- primitive data types are stored in heap memory.
// NOTES: In case of primitive data type we get the copy of values in it... on the other hand while dealing with non- primitives we get the reference of the value stored in variables.
let statOne= "iamlearningjs";
let statTwo= statOne;
statTwo= "iamlearningdevops";
console.log(statOne);
console.log(statTwo);
//now working with reference example
let heapOne= {
    empId: "2200621",
    name: "arjun",
}

let heatTwo= heapOne;
 heapTwo= {
    empId: "220052",
    experiment: "itworked",
}

console.log(heapOne.empId);
console.log(heapTwo.empId);
console.log(heapOne.experiment);
console.log(heapTwo.experiment);
heapOne.experiment= "igotit";
console.log(heapOne.experiment);
