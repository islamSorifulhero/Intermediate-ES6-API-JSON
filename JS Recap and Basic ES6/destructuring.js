const product = { name: 'shirt', price: 500, quantity: 7 }


// const discount = product.price * 20 / 100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7 / 100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);

const price = product.price;
const discount = price * 20 / 100;
const yourPay = price - discount;
const vatAmount = price * 7 / 100;
const totalAmount = yourPay + vatAmount;
// console.log(totalAmount);


// const { price, quantity, Tax = 4 } = { name: 'shirt', price: 500, quantity: 7 }
// console.log(price, quantity, Tax);



const numbers = [33, 53, 52, 13, 99];
const [first, second]  = numbers
const [math, physics] = [98, 100]
console.log(physics);

