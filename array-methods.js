//array of objects
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
//brand er naam gulake niye arekta array banate chai
const brands = products.map(product => product.brand);
//prottek ta product er modhe brank namok property ke return korte chai
console.log(brands);
//orthath kono ekta array of object theke amra jodi kono property ke niye ba property gulake niye amra jodi arekta array banate chai tokhn map use hbe

const prices = products.map(product => product.price);
console.log(prices);
//loop chalabo + return korbo tahole map use hbe 


//foreach
//foreach e var declare kora lagena karon ekhane kono kichu return hyna
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))
//color er khetre array dibe na shob element dibe

//multiline er kaj korar jnno
//multiline arrow function er kaj korar jnno
products.forEach(product => {

})
//map and for each er diffreenece holo map je jinish ta newar oi jinish ta niye amk ekta array return korbe r foreach kichu return korbe na jehetu return korbe na tai baam pashe variable na likhleo hbe , likhlei undefined pabo

// 3. filter
//filter array return korbe shorto onujai
//ei shorto jara jara fullfill korbe tader ke return kore amk dao
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
//name er modhe n include kore kina
console.log(specificName);



//4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);

//filter and file er modhe diff holo find e condition onujai jegula match korbe tar thik prothom ta diye dbe

//filter condition onujai shob gular ekta array kore dibe
//r find condition onujai first item tar ekta object ber kore dibe mane sudhu item take dibe kno array banabe na 

