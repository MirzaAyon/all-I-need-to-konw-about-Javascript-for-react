const friends = ["hero", "broo", "china", "angel"];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    // console.log(element);
}

for (const friend of friends) {
    // console.log(friend);
}


// loop for in loop

const object = { a: 1, b: 2, c: 3 };
console.log(object["a"]);



for (const property in object) {
    console.log(property);
}



for (const property in object) {
    console.log(object);
}


for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}


// ম্যাপ কি ?  কিভাবে  কাজ করে ?

// ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে
//  ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে।
// ৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরে
// ৪) সেই এরেকে রিটার্ব করবে

//without array
// const numbers = [1, 2, 4, 6, 5, 10];
// for (const element of numbers) {
//     const square = element * element;
//     console.log(square)
// }
//with array
// const numbers = [1, 2, 4, 6, 5, 10];
// const temp = [];
// for (const element of numbers) {
//     const square = element * element;
//     temp.push(square);

// }
// console.log(temp);

//with func
// const numbers = [1, 2, 4, 6, 5, 10];
// const temp = [];
// const sum = (num) => {
//     return num * num;
// };
// for (const element of numbers) {
//     const square = sum(element);
//     temp.push(square);

// }
// console.log(temp);
//with func
// function sum(numbers) {
//     ;

//     for (const number of numbers) {
//         let temp = []
//         let ans = number * number;
//         temp.push(ans);

//     }
//     return ans;



// }
// const result = [1, 2, 4, 6, 5, 10]
// console.log(result)
// console.log(temp)



//again

// function result(numbers) {
//     const temp = [];
//     for (const element of numbers) {
//         const square = element * element;
//         temp.push(square);
//         console.log(temp)


//     }
// }
// console.log(temp);
// const numbers = [1, 2, 4, 6, 5, 10];
// console.log(result(numbers))
//again

// function result(numbers) {
//     const temp = [];
//     for (const element of numbers) {
//         const square = element * element;
//         temp.push(square);
//         console.log(temp)


//     }
// }
// // console.log(temp);
// const numbers = [1, 2, 4, 6, 5, 10];
// console.log(result(numbers))


//shortcut
const numbers = [1, 2, 4, 6, 5, 10];
const result = numbers.map((x) => x * x);
const result2 = numbers.map((x) => {
    return x * x

});//double line hole evabe return keyword likhte hy
console.log(result)
console.log(result2)