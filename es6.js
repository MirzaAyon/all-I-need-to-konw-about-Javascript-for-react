const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);


// 2. arrow function
//arrow func declare onk ta var declare er moto
const getFiftyFive = () => 55; //with no pm
const addSixtyFive = num => num + 65; //with one pm
const isEven = x => x % 2 == 0; //with one pm
const addThree = (x, y, z) => x + y + z; //multiple pm
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
} //multiline arrow func
//vitore onk line likhte chaile ba kaj korte chaile multiline pm dibo


// spread operator

// const newNumbers = numbers;
// numbers.push(99);
// numbers.push(99);
// numbers.push(99); numbers.push(99);
// numbers.push(99);
// console.log(newNumbers);
// console.log(numbers);

//2 khetrei 99 push hoise
//kintu majhe majhe emn hote pare je ami uporer array tar ekta copy banate chai but otar sathe kono relation rakhte chaina
//tai amk alada hote hbe 


const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(99);
numbers.push(99);
numbers.push(99);





console.log(numbers); //push add hbe 
console.log(newNumbers); //push add hbe na karon spread add kora hoise
console.log(currentNumbers); //newly spread operator er sathe new num add hbe 

//create a new new array from from an older array and add an element
const current = [...currentNumbers, 56];
console.log(current);

