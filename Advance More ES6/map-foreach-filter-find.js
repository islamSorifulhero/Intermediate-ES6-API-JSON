const numbers = [1, 5, 60, 10, 45, 202, 70];
// numbers.forEach(x => console.log(x))

//forEach
numbers.forEach(num => {
    const doubled = num * 2;
    // console.log(doubled);
})

//filter
const greaterThan10 = numbers.filter(x => x > 10)
const eventNumbers = numbers.filter(num => num % 2 === 0)
// console.log(greaterThan10);
// console.log(eventNumbers);

//find
const firstEven = numbers.find(x => x % 2 === 0)
// console.log(firstEven);

const greaterThan50 = numbers.find(num => num > 50)
const greaterThan4 = numbers.find(num => num > 4)
// console.log(greaterThan50);
// console.log(greaterThan4);

const students = [
    { id: 1, name: 'abul', marks: 50 },
    { id: 2, name: 'nabul', marks: 85 },
    { id: 3, name: 'kabul', marks: 95 },
    { id: 4, name: 'dabul', marks: 15 }
]

const names = students.map(stud => stud.marks * 0.75)
// console.log(names);

const goodStudents = students.filter(std => std.marks > 80)
console.log(goodStudents);


const goodStudentFirst = students.find(std => std.marks > 80)
console.log(goodStudentFirst);