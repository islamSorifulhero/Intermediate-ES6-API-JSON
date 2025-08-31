const student = {
    name: 'safwan',
    age: 1,
    12: 90,
    'home-address': 'shibganj',
    family:{
        title:'islam',
        mother: {
            name: 'safina',
            age: '29',
            profeson: 'house wife'
        }
    }
}
console.log(student.name);  //dot notation
console.log(student.age);  //dot notation
console.log(student[12]);  //bracket notation
console.log(student['home-address']);

console.log(student.family.mother.name);
console.log(student.family.mother?.name);



for(const key in student){
    const value = student[key]
}

const propName = 'marks'
// console.log(student[propName]);
// console.log(propName);

