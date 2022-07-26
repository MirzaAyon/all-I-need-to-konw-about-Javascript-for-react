const numbers = [1, 2, 4, 6, 5, 10];

// function sum(x) {
//     return x * x;
// }

const result = numbers.map(
    (x = function (x) {
        return x * x;
    })//ekhane normal func use hoise
);
console.log(result);