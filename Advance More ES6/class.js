class Player  {
    constructor(name, age){
        this.name = name;
        this.age  = age;
        this.location = 'Bangladesh'
        // console.log('calling the constructor method', name);
    }
    goal(){
        // console.log('score a goal');
    }
    getTeamName(){
        // return 'Borsa'
        // console.log('okk good');
    }
}


const player1 = new Player('Tom Brady', 33)
const player2 = new Player('o shanto', 11)

console.log(player1);
console.log(player1 instanceof Player);
console.log(player2);


// player1.goal()
// player1.getTeamName()
// console.log(player1);


