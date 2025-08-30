function sum(num1, num2 = 10) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}
// sum(390)
// sum(20, 10)

function multiple (num1 = 2, num2 = 2){
    const result = num1 * num2
    console.log(result);
}
multiple(20, 2);
multiple(20);
multiple();


function fullName (first, last = 'alom'){
    const name = first + ' ' + last;
    // console.log(name);
}
// fullName('hero', 'islam')
fullName('hero')

// sum / add, subtraction --> ০
// multiple ---> 1
//string ---> ''
//array ---> []
//object ---> {}