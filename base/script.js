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
