//function declaration
function add(num1, num2) {
    // console.log(num1 + num2);
    // return num1 + num2;
}
add(2, 5)


//function expression
const addition = function (num1, num2) {
    return num1 + num2
}


// arrow function
const add2 = (num1, num2) => num1 + num2;
const multiple = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e;
const isFirstBig = (x, y) => x > y;


// multi line arrow function
const doMath  =(x, y) =>{
    const makeDouble = x * 2;
    const result = x + y;
    return result;
}

const result = add(11, 23)
console.log(result);
const mul = multiple(5,3);
console.log(mul);