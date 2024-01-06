//In this module we will be learning functions in javascript.
function hello(){
    console.log("hello world....");
}
// hello();

function frame(str, squareNumber){
    console.log(`${str} this is to make you understand the concept of return value in a function.`);
    return squareNumber*squareNumber;
}
// console.log(frame("Sushil", 6));

function userLoggedIn(name){
    if(!name){
        console.log(`Kindly pass proper argument.`)
        return;
    }
    console.log(`Hello ${name}, you have just logged in.`);
    return;
}

// userLoggedIn("Sushil");
// userLoggedIn();
// let varible;
// console.log(Boolean(varible))

//How to pass multiple parameters in a function

function multiArg(value1, ...multi){
    console.log(`Your first argument is ${value1}}`);
    console.log(typeof(multi));
    return multi;
}

// console.log(multiArg("Sushil", "Vivek", 50, 4, 9));
// console.log(typeof(multiArg));

//passing objects and arraya as a parameter in a function

const myObj = {
    name: "Sushil",
    age: 25,
    lickedCatagory:"caucasian"
}

function objectParameter(objpara){
    console.log(`Your name is ${objpara.name} and your age is ${objpara["age"]}`);
    return
}
objectParameter({
    name: "maharana",
    age: 100
});

const myNewArr = ["karn", "sushil", "rana", "vikram", "krishna"];

function arrayParameter(arrpara){
    return arrpara[3];
}
//  console.log(arrayParameter(myNewArr));

