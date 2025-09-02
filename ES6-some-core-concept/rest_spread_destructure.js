//spread operator
const arr = [1, 2, 3, 43, 4, 5, 6, 7];
// console.log(...arr);

// console.log(Math.max(...arr));


// rest operator
const findMax = (...rest) => {
    console.log(rest);
    const maxNumber = Math.max(...rest)
    // return maxNumber
}
// console.log(findMax(1, 2, 3, 4, 4, 4, 5, 6));

// object
const obj = {
    name: 'utsho',
    age: 25
};
const obj2 = (obj);
obj2.age = 30;
// console.log(obj);
// console.log(obj2);

// Array destructuring
const arr1 = [1, 2, 3, 43, 4, 5, 6, 7];
const [one, two, , , , , four] = arr1
// console.log(one, two ,four);

// Object destructuring
const person = {
    name: 'utsho',
    age: 25,
    roll: 29,
    address:{
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

//traditional approach
const name = person.name;
const age = person.age;
const country = person.address.country;

console.log(name, age, country);


