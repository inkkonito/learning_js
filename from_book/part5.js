// maths

// convert string into number

var chain = "17";
console.log(typeof chain);
console.log(typeof (parseInt(chain)));
console.log(parseInt(chain));

chain = "10Z1";
console.log(parseInt(chain)); // return 10

chain = "abc";
console.log(parseInt(chain));

// parse float

floater = "13.5";
console.log(typeof floater);
console.log(parseFloat(floater));
console.log(typeof parseFloat(floater));

// reste de division

var rest = 9%3;
console.log(rest); // return 0 because 9 can be divised by 3

rest = 10%3;
console.log(rest); // return 1 because 3*3+1 = 10

rest = 8%2;
console.log(rest) // return 0 because 8 is pair

// math object
console.log(Math.PI);

// random
var a = Math.random();
console.log(a);

// notation scientifique 

var c = 2e10;
console.log(c);

// tirage de dé

function getRandom(n) {
    return Math.floor(n * Math.random() +1);
}
console.log(getRandom(6));

// loi des grands nombres

console.time("boucle");
var resultats = new Array(0,0,0,0,0,0,0);
var nbTirage = 6e6; // ie. 6 000 000

for (var i = 0; i<nbTirage; i++) {
    var de = getRandom(6);
    resultats[de]++;
}
console.timeEnd("boucle");
console.log(resultats);

// get number of days before retirement

function daysBeforeRetirement(age) {
 const retirement = 64;
 var remainingDays = (retirement - age) * 365;
 return remainingDays;
}   
console.log(daysBeforeRetirement(40));

// international format

var intEuro = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR", currencyDisplay: "symbol"});
console.log(intEuro.format(2000));

// max number

console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2,3));
console.log(Math.pow(2,53) - 1);

// big int

var bigInt1 = BigInt(1);
console.log(bigInt1);

var bigInt2 = 2n
console.log(bigInt2);
console.log(typeof bigInt2);

console.log(bigInt2.toString());