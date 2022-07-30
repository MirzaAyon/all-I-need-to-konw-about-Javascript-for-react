const products = [
    { id: 1, name: "apple", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 124, color: "black" },
    { id: 3, name: "samsung", price: 200, color: "black" },
    { id: 4, name: "samsung2", price: 200, color: "black" },
    { id: 5, name: "lenovo", price: 300, color: "pink" },
    { id: 6, name: "xiaomi", price: 100, color: "pink" },
    { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const output1 = products.filter((pd) => pd.name == "lenovo");
console.log(output1);

// এরে এর ভিতর থেকে  কিছু এলিমেন্ট কে বাদ দিয়ে  বাকি গুলা  কে নেওয়া
const output = products.filter((pd) => pd.color !== "pink");
console.log(output);
const output3 = products.filter((pd) => pd.id == 1);
console.log(output3);
const output4 = products.filter((pd) => pd.id != 1);
console.log(output4); // ekhane || && diye multiple cond dewa jabe 
//egula obj te kaj hbe na map,foreach,filter,find kono tai obj er upr hbe na 


// filter with three arguments

// const numbers2 = [1, 2, 3, 4, 5];
// const result2 = numbers2.filter(function (element, index, arr) {
//     console.log(index);
//     console.log(arr);
//     return element > 2;
// });
// console.log(result2);



const numbers2 = [1, 2, 3, 4, 5];
const result2 = numbers2.filter((element, index, arr) => {
    console.log(index);
    console.log(arr);
    return element > 2;
});
console.log(result2);



// ফিল্টার এর ছোট ভাই  ফাইন্ড find

// find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে,
// শুধু মাত্র প্রথম এলিমেন্ট কে  দিবে। না পাইলে আন্ডিফাইন দিবে

const output5 = products.find((pd) => pd.color == "black");
console.log(output5); //age array return korsilo but ebar obj return kortese
//karon sudhu first ta show hbe 

//filter e cond bhul hole empty arr return korbe 
//find e cond bhul dile undefined return krbe

//ebar same kaj ami forEach diye krbo


//new kore ekta map chalabo
const result = products.map((pd) => pd);
console.log(result);
const result8 = products.map((pd, index) => {
    console.log(index);
    console.log(pd);
    console.log(index + 1);
    //etake react e component rendering bole
    //egula ke cmnt kore kore dekhbo
    //cart upr chaile evabe serial dite parbo
});