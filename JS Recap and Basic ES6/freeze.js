const employee  = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}


Object.freeze(employee)

// delete employee.experience
// delete employee.age
// delete employee.salary

employee.salary = employee.salary + 5000;
employee.loction = 'Dhaka'
console.log(employee);