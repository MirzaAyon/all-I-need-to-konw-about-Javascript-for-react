let animal = {
    name2: "dog",
    color: "brown",
    age: 7,
};
// const sum = (info) => {
//     console.log(info)
// }
// sum(animal);

// const sum = ({ name2, age }) => {
//     console.log(name2);
//     console.log(age);
// }
// sum(animal);


// const sum = (info) => {
//     console.log(info?.name2);
//     console.log(info?.age);
// }
// sum(animal);


// spread operator as rest operator

function sum({ name2, ...rest }) {
    console.log(rest);
    console.log(name2);
}

sum(animal);


// spread operator for merging arrays or objects
const numList1 = [1, 2, 3];
const numList2 = {
    name: "hero",
    Age: 18,
};
let numLists = [...numList1, numList2];
console.log(numLists);

let animalWithBreed = {
    ...animal,
    breed: "",
};

console.log(animalWithBreed);


//নেস্টেড  অবজেক্ট  অফ  এরে

const dreamGirl = [
    {
        dream1: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [
                            { name: "rofik" },
                            { name: "jobbar" },
                            { name: "salam" },
                            { name: "borkot" },
                            undefined,
                        ],
                    },
                },
                { instagram: "https://www.instagram.com/" },
                { twitter: "https://twitter.com/" },
                { github: "https://github.com/" },
                { phone: ["01254823212", "02152457"] },
            ],
        },
    },
];
console.log(dreamGirl);
//dreamgirl er friend list e koyjon ache ta check krbo
console.log(dreamGirl[0]);