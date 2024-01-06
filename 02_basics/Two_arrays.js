//In this part we are going to learn merging of two or more arrays and also will see some of the most used methods .

const classMates = ["ayush", "arun", "abhishek", "hemant","atharva"];

const colluges = ["sumit", "rohan", "himanshu", "sushil"];
// method One 
// In this method when we push the another array it gets merge as an array element
// classMates.push(colluges);
// classMates.push("hello");

console.log(typeof(classMates[4]));

// Method second (concat) returns new array
//  const newArr = classMates.concat(colluges);
//  console.log(newArr);
  // Method third (spread) "just like we drop a glass and it gets all spread out ...

  const newArr = [...classMates, ...colluges]
  console.log(newArr);



