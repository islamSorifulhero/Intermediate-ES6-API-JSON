const numbers = [1, 2, 3, 4, 5, 35, 6];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

const nums = [4, 5, 6, 7, 12, 15];

let sum1 = 0;
for(const num of nums){
    sum1 = sum1 + num
}

// const total = nums.reduce((acc, curr) => acc + curr, 0)

const total = nums.reduce((acc, curr) => acc * curr, 1)
console.log(total);