// var hoisted.(bad practice)
// let and const hoisted but in temporal dead zone.


// scope (গন্ডি) global scope, block scope, and function or local scope
// var maintain only function scope, but not block scope or global scope
// let and const maintain all scope


// arrow function 
// traditional function is histed, but arrow function is not

// function multiplication (a,b){
//     return a * b;
// }
// console.log(multiplication(5, 10));


// arrow function
const sum = (a, b) => a + b
// console.log(sum(5, 10));

const squar = (x) => x * x;
// console.log(squar(7));

function myFuncNormal(){
    console.log(this);
}
// myFuncNormal()

const myFuncArrow = () => {
    console.log(this);
};
// myFuncArrow();


const myFun = (name = 'utsho', age = 18) => {
    console.log(`My name is ${name}. My age is ${age}`);
    return age + 5;
}

console.log(myFun('Rahim', 22));


