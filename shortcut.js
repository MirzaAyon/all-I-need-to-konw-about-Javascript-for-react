//falsy //// '', 0, false, null, undefined
//truthy // // 'almas', 5, true, {}, []


let myVar = 5;
// check any truthy 
//myvar jodi truthy hoy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}



//again
let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {
    console.log(10);
} else {
    console.log(20);
}



//new example
const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);



// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum); 


// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
//evabe shorto shapekkhe func keo call kora jae 
//false hole hideuser ashto


//another shortcut 
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();
// toggle boolean
isActive = !isActive;