// function counter() {
//     let count = 0;
//     function innerFunction (){
//         console.log('Hello');
//     }
//     return innerFunction;
// }
// const innerFunc = counter()
// innerFunc()
// innerFunc()
// innerFunc()
// innerFunc()
// const output = counter();
// console.log(output);




function counter (){
    let count = 10;
    return function(user){
        count = count + 1;
        console.log(user , count);
    }
}
const rahimCounter = counter();
rahimCounter('rahim')
rahimCounter('rahim')
rahimCounter('rahim')
rahimCounter('rahim')
console.log('--------------');
const korimCounter = counter();
korimCounter('korim')
korimCounter('korim')
korimCounter('korim')
korimCounter('korim')

const jabbarCounter = counter();
jabbarCounter('steve')
jabbarCounter('steve')
korimCounter('korim')
rahimCounter('rahim')