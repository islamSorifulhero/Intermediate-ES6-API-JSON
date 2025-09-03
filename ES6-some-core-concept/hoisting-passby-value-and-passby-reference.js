// Hoisting is a JavaScript behavior in which variable and function declarations are moved ("hoisted") to the top of their containing scope during the compilation phase — before the code is executed

//var is hoisted, but only the declaration, not the value assignment
console.log(test);
var test = "Hey";


// let and const are also hoisted, but not initialization. They are in a "Temporal Dead Zone" from the start of the block until the declaration line.

console.log(demo);
let demo = 5;



// Pass by value (pass by Primitive data type )
const name = "Utsho";
const myFunc = (value) => {
  value = "Habib";
  console.log("inside func: ", value);
};

// myFunc(name);
// console.log("After func call: ", name);

// Pass by reference (pass by non primitive or referential data type )
const obj = {
  name: "Utsho",
  age: 25,
};
const myFunc2 = (param) => {
  param.name = "Habib";
  console.log("inside func: ", param);
};

myFunc2(obj);
console.log("After func call: ", obj);