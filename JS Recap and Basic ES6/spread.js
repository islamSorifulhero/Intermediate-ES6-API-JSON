const numbers = [439, 4390, 243, 4];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(344, 4324, 445, 32, 90);
// console.log(max);

const first = [1, 2, 3, 4, 5]
const second = [...first]
const third = [0, ...first, 49, 94, 88]
second.push(111);
// console.log(first);
// console.log(second);
// console.log(third);

let num = [3, 4, 5];
let allNum = [6, 7, 8, ...num, 9, 10, 11]
console.log(allNum);