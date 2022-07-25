let animal = undefined
// let { age, ...rest } = animal;


// console.log(rest); //error dibe 
//error theke bachar jnno

let { age, ...rest } = animal || {};
console.log(rest); //ekhn r error dibe na ba crash korbe na {} dibe 


