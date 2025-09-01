// function changeValue(num) {
//     num = 100;
// }

// let a = 50;
// changeValue(a);
// console.log(a);


function changeValue(arr) {
    arr.push(4);
}

let numbers = [1, 2, 3];
changeValue(numbers);
// console.log(numbers);


function greet (name){
    console.log(name);
}
// greet('kalam');


function greet (name = 'jamal'){
    console.log('Hello', name);
}
greet();