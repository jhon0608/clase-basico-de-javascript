// null
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

// undefined
let name;
console.log(name);

// symbol
const uniquel = Symbol("id");
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2);

const ID = Symbol("id");
let user = {};
user[ID] = "1234";
console.log(user);

// bigInt
const bigNumber = 25523773878784859955562543143254795869n;
console.log(bigNumber);

const numberOfparticlesInTheUniverse = 100000000000000000000n;
console.log(numberOfparticlesInTheUniverse);
