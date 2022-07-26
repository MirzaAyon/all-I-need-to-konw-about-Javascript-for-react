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
// console.log(dreamGirl);
//dreamgirl er friend list e koyjon ache ta check krbo
// console.log(dreamGirl[0]);
// console.log(dreamGirl[0].dream1.family);
// console.log(dreamGirl[0].dream1.contactInfo[0]);
// console.log(dreamGirl[0].dream1.contactInfo[0].facebook);
// console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
// console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList[2]);
// console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList[2]);
//ekta variable e rekhe console log krbo
// const friends = console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
const friends = console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
console.log(friends);
// for (let friend of friends) {
//     console.log(friend);
// }
//eta amr task iteration kore dekhate hbe 