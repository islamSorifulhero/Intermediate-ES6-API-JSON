const numbers = [4, 5, 6, 7, 8];

// const doubled = []

// for(const number of numbers){
//     const num = number * 2
//     doubled.push(num)
// }
// console.log(doubled);


const doubledIt = x => x*3;
// const doubled = numbers.map(doubledIt)

// const squared = numbers.map(num => num * num);

const doubled = numbers.map(num => num * 2);

const friends = ['Zaveda', 'Parvez-ali', 'Nobel', 'Kodbel', 'jatu']
const nameLength = friends.map(name => name.length)
const firstLetters = friends.map(name => name[0].toLocaleLowerCase())

const result = numbers.map((num, index) => {
    console.log(num * index);
    return index;
})
console.log(firstLetters);
