
const greet = (name, greeting, cb) => {
    // console.log(`Hi, ${name}`);
    cb(greeting);
}

const sayGreeting = (greetMessage) => {
    // console.log(greetMessage);
}

greet('utsho', 'good night', sayGreeting)



// Array opeta
const arr = [12, 13, 5, 10, 20, 30, 40, 50, 70];
for (const ar of arr) {
    // console.log(ar);
}

// arr.forEach((ar) => console.log(ar));

// Map method
const updatedArr = arr.map((ar) => ar + 5);
// console.log(updatedArr);

//filter
const adultStudent = arr.filter((ar) => ar >= 20)
// console.log(adultStudent);


//find
const findFirst = arr.find((ar) => ar > 30)
// console.log(findFirst);


// reduce 
// const arr = [12, 13, 5, 10, 20, 30, 40, 50, 70];
const summation = arr.reduce((accumulator, current) => {
    return accumulator + current;
})
console.log(summation);


