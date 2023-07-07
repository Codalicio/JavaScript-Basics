// undefined

let firstName;
console.log(typeof firstName);

firstName = "Harshit";
console.log(typeof firstName, firstName);

// null

let myVar = null;
console.log(typeof myVar, myVar);
myVar = "Monu";
console.log(typeof myVar, myVar);


// BigInt


let myNumber = BigInt(12);
let sameMyNumber = 123n;

console.log(myNumber);
console.log(sameMyNumber);
console.log(myNumber + sameMyNumber);

console.log(Number.MAX_SAFE_INTEGER);
