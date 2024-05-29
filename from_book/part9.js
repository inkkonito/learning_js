// synthesis of ES6

var tab = ["lundi", "mardi", "mercredi"];
tab = tab || []; // tab is not modified because it exist
console.log(tab);

// anonymous functions

console.log(tab.map(function(v) {return v.length}));

var a
const multiplierBy2 = function(a) {
    return a*2
}
console.log(multiplierBy2(16));

// auto executed functions (IIFE immediately invoked function expression)

console.log((function(a,b) {
    return a*b
})(2,5));

// arrow functions

var functionB = p => {return p*3}; // one param no ()
console.log(functionB(3));

var functionC = (a,b,c) => {return (a+b+c) *2}; // multiple params requires ()
console.log(functionC(1,2,3)); // 1+2+3 = 6 * 2 = 12

var functionD = () => { return "hi"}; // no param requires ()
console.log(functionD());

var functionE = () => "hi again"; // no need of brackets {}
console.log(functionE());

// internal functions 

function main(a,b,c) {
    function internal() {
        return "hi for the third time"
    }
    console.log(internal());
    return (a+b)*c
}
console.log(main(2,2,4));


// spread
var restes = [5,10,15]
var d = function spreadTest (a,b,c, ...restes) {
var sum = 0;

for(var i = 0; i<restes.length; i++) {
    sum = sum + restes[i]; // 0 + 5 + 10 + 15 = 30
}
return sum/restes.length; // 30 / 3
}

console.log(d(1,2,3,...restes)); // 10

var restes2 = [...restes];
console.log(restes2);

var object = { nom: "pitre", age: 32};
var object2 = {...object};
console.log(object2);

// variable et const

let def = 0; // let variable are scoped to the instruction block where they are created
const pii = 3.143403939;
// pii = 30202;  can not reassign
var a = 2; // var variables are functional scope or global

// extends
var prenomMere;
var prenomFille;
class mere {
    constructor(prenomMere) {
        this.prenomMere = prenomMere;
    }
}

class fille extends mere {
    constructor(prenomMere, prenomFille) {
        super(prenomMere);
        this.prenomFille = prenomFille
    }
}

var newGirl = new fille("justine", "florence");
console.log(newGirl);