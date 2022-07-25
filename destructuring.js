// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// same kajer destructuring method dekhbo niche


// const [x, y] = [42, 65];
// console.log(x, y);

//3rd method
const [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const ans = boxify(10, 20);
console.log(ans);

// const [first, second] = [90, 34]
// console.log(first, second);

const [first, second] = boxify(100, 35)
console.log(first, second);

//daan pashe shorashori array thake tahole ami eke destructuring korte pari
//daan pashe shorashori variable thake tahole ami eke destructuring korte pari
//daan pashe shorashori function thake tahole ami eke destructuring korte pari


// another example
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// const [firstMovie, secondMovie] = ['king khan', 'Dhakar Mastan']
const [firstMovie, secondMovie] = student.movies;

//orthath daan pashe jodi kono jinish thake sheta jdi kono rkm ekta array hoy tahole eke baam pashe array er moto kore diye destructuring korte parbo


//object destructuring
//destructuring er khetre daane obje er moto thakle obj er moto krbo r daane array er moto thakle array er moto krbo


const person = { name: 'alu', age: 14 };
// const  = { name: 'alu', age: 14 };

const { name, age } = { name: 'alu', age: 14 };
//sudhu name ke dorkar hole sudhu name o likha jabe 

//another example
// const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };
//serial kono matter na, array er khetre serial imp karon index check kore 


//another complex example
const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

//employee theke amr sudhu machine and id lagbe
const { machine, ide } = employee;
//tai daane employee dilei enough

const { weight, address } = employee.specification;
//weight, address onno obj er modhe ache tai shetake daane dite hbe

// const [lan1, lan2] = employee.languages
// console.log(lan1, lan2)
const [lan1, lan2, lan3] = employee.languages
console.log(lan1, lan2, lan3)

// const { brand } = employee.specification.watch;
//kono karone specification na thakle optional chaining er ei option ta boshae dbo niche
const { brand } = employee?.specification?.watch;
//kono coder ekta option ved kore erekta option e jete hole optional chaining 
//like specification na thakle normally error dibe but optional chaining dile error dibe na 
