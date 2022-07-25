// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
//js object ke js object notation e convert krbo
const studentJSON = JSON.stringify(student);
// console.log(student); //normal obj show hbe 
// console.log(studentJSON); //shob kichu json akare show hbe and shob property te double quation thakbe 

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);
//json object ke normal object e convert korte pari

//2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));



//ekhane direct console o kora jae othoba onno ekta func keo console kora jae
//fetch er kaj async await diye kora jae
//abr raw xml http request eo convert korte pari



// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);
//array er modhe loop chalale ekhn theke most of the case e amra numbers.foreach use korbo
//jodi return pete na chai tahole foreach
//r jodi return pete chai tahole map use korbo



// for of on array like object
// loop on an object using for in 

// array like object er jnno for of use korbo jemon: get elements by class name, query selector all 
//but ekhn theke for each e beshi use hbe 






// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
//eta ekta array of objects

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
//push/pop na kore
const newProducts = [...products, newProduct];


// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);