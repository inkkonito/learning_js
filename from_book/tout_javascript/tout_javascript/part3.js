// list variable types and log them

var a = 1;
var b = "hello reunion";
var c;
var d = [];
var e = ["Un", "Deux", "Trois"];
var f = { "cle": "valeur" };
var g = true;

console.log("Number 1 = " + typeof a);
console.log('String with "hello reunion" as value = ' + typeof b);
console.log("Empty variable = " + typeof c);
console.log("Empty array = " + typeof d);
console.log("Array with three entries = " + typeof e);
console.log("JSON object = " + typeof f);
console.log("Boolean set to TRUE value = " + typeof g);

// show variable scopes within instructions

let h = 1;
i = 1;
console.log("Let H equal " + h);
console.log("I equals " + i);

if (h == 1) {
  let i = 0;
  console.log("H still equals " + h);
  console.log("Now I new value set as LET equals " + i);
}
console.log("Instruction block ended, now I value equals " + i);

// conditional testing

let total = 80;

if (total >= 100) var tax = 0; // one line

if (total >= 100) {
  var tax = 0;
} else {
  var tax = 5.5;
  console.log("Tax value is " + tax);
}

if (total >= 80) var tax = 0;
else var tax = 5.5;
console.log("Now tax value is " + tax); // if else conditions on two lines without {}

if (total >= 100) {
  var tax = 0;
} else if (total >= 50) {
  var tax = 9.9;
} else {
  var tax = 5.5;
}

// multiple testing

var dt = new Date();
console.log(dt);
var jour = dt.getDay();
console.log("Ce jour possède l'indice de position suivant " + jour);
var msg = "...";

switch (jour) {
  case 1:
    msg = "Pas facile le lundi..!";
    break;
  case 0:
  case 6:
    msg = "C'est le week-end!";
    break;
  default:
    msg = "Pleine seomaine: au boulot";
    break;
}

console.log("Le message choisi est le suivant : " + msg);

let fruits = "Apple"; // can also be used with string in cases
switch (fruits) {
  case "Banana":
    console.log("I love Bananas");
    break;
  case "Apple":
    console.log("I love Apples");
    break;
}

// ternary operator
montant = 50;
var port = montant > 100 ? 0 : 5.5;
console.log(`Le montant est ${montant} donc les frais de ports sont de ${port} `);

let nb = 2;
console.log("Votre devis comporte 5 article" + (nb > 1 ? "s" : "")); // example of ternary incopored directly in an instruction

// testing booleans

var isMajeur = true;

if (isMajeur) {
  // meaning equals true
  msg = "Vous êtes le bienvenue car majeur";
} else {
  msg = "Accès interdit, désolé vous n'êtes pas majeur";
}
console.log(msg);

if (nb) {
  msg = "Votre panier contient " + nb + " article(s)";
} else {
  msg = "Panier vide";
}
console.log(msg);

// test if equals

nb = 5;
nb2 = "5";

if (nb == nb2) {
  // equals due to nb2 being transformed into number
  console.log(nb + " equals " + nb2);
}

if (nb === nb2) {
  console.log(nb + " equals " + nb2);
} else {
  console.log(
    `${nb} does not equals ${nb2} because first variable is ${typeof nb} and second variable is ${typeof nb2}`
  );
}

isMajeur = false;
if (!isMajeur) {
  console.log("Accès interdit due to isMajeur variable being " + isMajeur);
}

//  differences between null, false and undefined

// low equality

console.log(null == false); // false
console.log(null == undefined); // true;

// strict equality

console.log(null === false); // false
console.log(null === undefined); // false

// assign and types

var myNull = null,
  myNull2nd = null;
console.log(typeof myNull); // object
console.log(typeof inconnu); // undefined
console.log(myNull === myNull2nd); // true

// combining conditions

(a = 1), (b = 2);
console.log(`A value is ${a}`);
console.log(`B value is ${b}`);

if (a == 1 || b != 2) {
  console.log("A may equals " + a + "or B may be different from value " + b);
}

if (a == 1 && b != 2) {
  console.log("A must be equals to " + a + "and B must be different from value " + b);
} else {
  console.log(`Two conditions not fufilled`);
}

if (a != 0 && b != 1) {
  console.log("Its a match!");
}
c = 0;

if (a == 0 || (b == 2 && c == 0)) {
  console.log(`Matching one block conditions requirements`);
} else {
  console.log("Or not");
}

// starting loops

var somme = 0;
var start = 1;
var max = 10;
for (var n = start; n <= max; n++) {
  console.log("Somme equals " + somme + " And N equals " + n);
  somme = somme + n;
  console.log("Now Somme equals " + somme);
}
console.log(n);

var birthDate = 14;
var count = 0;
for (count; count <= birthDate; count++) {
  console.log("Loop until reach the end of the condition, loop number " + count);
}

var longestRun = 40;
var count = 0;  // declare count properly
for (count; count <= longestRun; count += 5) {
  console.log("Run 5km longer this month, current run distance is " + count + "km.");
}

// while loops

var n = 0;
var somme = 0;
while (somme <10) {
    n++;
    console.log(`N equals value ${n} And Somme equals value ${somme}`);
    somme+=n;
    console.log(`Adding N value (${n}) to Somme now equals ${somme}`);
}
console.log(`Somme now equals ${somme} and N equals ${n}`);

// do while

var n = 0;
var somme = 0;
do {
    n++
    somme+=n;
} while (somme <10);
console.log(`Loop stopped as Somme now equals ${somme}`);

// functions

console.log(parseInt("150.01")); // 150
console.log(parseInt("xx333")); // NaN

var startHiking = function (length, elevation, difficulty) {
    console.log(`Lenght : ${length}, Elevation : ${elevation} d+, Difficulity : ${difficulty}`);
} // init function specs

startHiking("15 km", 3000, "easy");

// using return

var addNumbers = function(a,b,c) {
    return a + b + c;
}
console.log("Function returns sums of A + B + C which equals " + addNumbers(1,2,3));

// using ternary operator

nb = 2;
var getPuriel = function(nb) {
    return nb>1?"s":"";
}
console.log("Vous avez " + nb + " article" + getPuriel(2) + " dans votre panier");

// variables scope

var number = 10;
var msg = "Hello Reunion";

console.log(`Number equals ${number}`); // Hello Reunion
console.log(`Message equals ${msg}`); // 10

function getMessage() {
    var msg = "Bonjour dans la fonction"; // variable scoped as local modifying msg
    number++; // adding 1 to number => 11
    console.log(`Number in the function ${number}`); // new msg
    console.log(`Message in the function is ${msg}`); // 11
}
getMessage();

console.log(`Number after the function is ${number}`); // 11
console.log(`Message after the function is ${msg}`); // output remain "Hello Reunion" as the variable was declared as global

// setInterval

nb = 0;
var counter = 0;

const intervalId = setInterval(function() {
    nb++;
    console.log(nb);
    counter++;
    if (counter === 10) {
        clearInterval(intervalId);
    }
}, 250);
