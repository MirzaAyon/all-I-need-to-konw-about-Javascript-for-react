// 1. How to declare a variable using let and const
const fatherName = 'Arnold'; //changeable na
let season = 'rainy'; //changeable
season = 'winter';
//var matha theke jhere felbo



// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >=
// multiple conditions: &&, ||

// 3. array declare
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 56;
//aro method gulao dekhbo


// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    confirm.log(number);
}
//while loop ta dekhte hbe 


// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);


// / 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}


const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable