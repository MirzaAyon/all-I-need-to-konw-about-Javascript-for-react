storage5.html: 66 Live reload enabled.
    localStorage.setItem('friends', [12, 34, 45])
undefined
localStorage.setItem('friends', [12, 34, 45])
undefined
localStorage.setItem('friends', [12, 34, 45])
undefined
localStorage.setItem('friends', [12, 34, 45]) //egula dile array show hbe na 
undefined
localStorage.setItem('friends', JSON.stringify(23, 45, 67) //evabe dileo hbe na just 1 ta show hbe  
VM232: 1 Uncaught SyntaxError: missing) after argument list
localStorage.setItem('friends', JSON.stringify(23, 45, 67)
VM237: 1 Uncaught SyntaxError: missing) after argument list
localStorage.setItem('friends', JSON.stringify(23, 45, 67))
undefined
localStorage.setItem('friends', JSON.stringify([23, 45, 67])) //array show korate hole evabe json stringify dite hbe
undefined
//array ba object rakhte hole evabe dibo
//r ei full kaj ta storage5 korar por inspact e giye krbo


//abr object er jnno
const pen = { price: 10, color: "black" }
undefined
localStorage.setItem('pen', pen)
undefined
// evabe dile  local e sudhu [Object,object] show hbe


localStorage.setItem('pen', JSON.stringify(pen))
undefined
//tai evabe dibo


//ekhn ami jodi chai local sto theke niye eshe use krbo tahole console e dibo
const storedPen = localStorage.getItem('pen')
undefined
storedPen
'{"price":10,"color":"black"}' //ja json er ekta string
//ekhn eke obj te convert korar jnno
//json.perseobj dibo

const penObj = JSON.parse(storedPen)
undefined
penObj
{ price: 10, color: 'black' }
//tokhn evabe ekta obj ashbe

// price change korar jnno
// pen.price = 50; //dibo
// pen //dibo
// localStorage.setItem('pen', JSON.stringify(pen))
// dibo
// enter dile local e 10 theke 50 hye jabe