//templete string
var name = "hero alom";
var lname = "Uganda";
//আমরা  যদি  সাধারণ  ভাবে  করি  তাহলে এভাবে  করতে   পারি
console.log("Hello " + name + " Welcome to " + lname);

//এবং  খুব  সহজে  টেমপ্লেট স্ট্রিং  বাববার  করে  যে  কোনো  জায়গায়  ডাইনামিক  ভ্যালু  ব্যবহার  করতে   পারি
console.log(`Hello, ${name}!Welcome to ${lname}`);



// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// spread operator for destructuring.
let animal = {
    name2: "dog",
    color: "brown",
    age: 7,
};
const { name2 } = animal;
console.log(name2);
let { age, ...rest } = animal; //rest parameter er use
//age er bade baki guka jabe
console.log(age, rest)
console.log(rest) //ei method ke bole rest parenter
//rest mane oboshistho tai eta use hoy
//rest er bodole jekono name dewa jabe
//obj er khetre rest use krbo 

//function
const sum = (animal) => {
    console.log(animal);
}
sum();


//nested objct