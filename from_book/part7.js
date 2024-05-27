// arrays

var tab1 = new Array();
console.log(tab1);

tab1 = new Array("Lun", "Mar", "Merc", "Jeu", "Ven", "Sam", "Dim");
console.log(tab1);
console.table(tab1);

var cinq = new Array(5);
console.log(cinq);

console.log(tab1[5]);

// json format

var tab2 = ["Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit"];
var tab3 = [];

console.table(tab2);
console.table(typeof tab2);
console.log(tab2.toString());
console.log(typeof tab2.toString());
console.log(tab2.join(", ")); // add ", " between days

// copy table

for (var i = 0; i < tab2.length; i++) {
  tab3[i] = tab2[i];
}
tab3[0] = "One";
console.log(tab2);
console.log(tab3);

// tableaux associatifs

var currencies = [];
currencies["EUR"] = "Euro";
currencies["DOL"] = "Dollar";
currencies["GBP"] = "Pound";
console.table(currencies);

for (var index in currencies) {
  console.log(index + " : " + currencies[index]);
}

// verify if exist

if (typeof currencies["EUR"] !== "undefined") {
  console.log("it exist");
} else {
  console.log("it does not exist");
}

// tableau

var clients = [];
clients["Jean"] = [24, 9, 20, 3];
clients["Paul"] = [19, 2, 47, 32];
clients["Max"] = [31, 5, 8, 30];

console.table(clients);
console.log(clients["Jean"][0]);

// create table from objets

clients = [
  { nom: "Pierre", age: 24, nb: 6, ca: 5 },
  { nom: "Jean", age: 20, nb: 5, ca: 12.5 },
  { nom: "Max", age: 22, nb: 9, ca: 10 },
];

console.table(clients);
// get valeur from object using doted notation

console.log("L'âge du premier client est " + clients[0].age);

// methodes on arrays

var tableau1 = ["Julien", "Raoul", "Jertrand"];
var tableau2 = ["Justine", "Marie", "Alice"];
var tableau3 = ["Jean", "Julien", "Jerome"];

// concat

console.log(tableau1.concat(tableau2)); // adds tableau 2 items after tableau 1

// every

console.log(
  tableau3.every(function (val) {
    return val.charAt(0) === "J";
  })
);

if (
  tableau3.every(function (val) {
    return val.charAt(0) === "J";
  })
) {
  console.log("all items start with a J");
} else {
  console.log("not all items start with a J");
}

// every 2nd exercice

var blues = ["gris Bleu", "Bleu clair", "Bleu très clair"];
var blues2 = ["gris bleu", "Bleu clair", "Bleu très clair"];
var regex = /bleu/i;

console.log(
  blues.every(function (e) {
    return e.indexOf("Bleu") >= 0;
  })
); // all items contain "Blue

console.log(
  blues2.every(function (e) {
    return regex.test(e);
  })
); // all items match the regex "blue" with i option

// filter

var pairs = [0, 2, 4, 5, 8, 10];

console.log(
  pairs.filter(function (val) {
    return val % 2 == 0;
  })
);

var shortNames = ["Max", "Jean", "Paul", "Julien", "Jerome"];
console.log(shortNames[0].length); // Max length is 3

console.log(
  shortNames.filter(function (val) {
    return val.length <= 4; // return only names Max, Jean, Paul because length is <= 4
  })
);

// find

console.log(
  shortNames.find(function (val) {
    return val.charAt(0) === "P"; // return Jean (first J)
  })
);

console.log(
  shortNames.find(function (val) {
    return val.length > 4; // return only Julien (first length 4)
  })
);

// findIndex

console.log(
  shortNames.findIndex(function (val) {
    return val === "Julien"; // return 3 as Julin is in 3rd position
  })
);

// flat

var codes = [1, 2, [3, 4], 5, [6, 7, 8]];
console.table(codes);

console.log(codes.flat());

// for each

var days = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

days.forEach(function (day, index, table) {
  table[index] = day.toUpperCase();
});

console.log(days.join(", "));

var numbers = [0, 2, 4, 6, 8, 8];

numbers.forEach(function (number, index, table) {
  table[index] = number + 1; // add one to each elem in numbers array
});

console.log(numbers.toString()); // return 1, 3, 5, 7, 9

console.log(numbers.includes(3)); // return 3 because exist

// indexof 

console.log(numbers.indexOf(3)); // return 1 as 3 is in second position

// lastIndexOf

console.log(numbers.lastIndexOf(9)); // return 5 as there are two 9 (1, 3, 5, 7, 9, 9) and the last one is in 5th position

// join

console.log(numbers.join("/"));

// map

colors = ["BLUE", "GREEN", "YELLOW"];
console.log(colors.map(e => e.toLowerCase())); // new table with elem in lowercase

// pop

colors.pop(); // delete yellow
console.log(colors);

// push

colors.push("grey");
console.log(colors);

// reduce

var list = [2, 4, 6];
console.log(list.reduce(function(accumulateur, valeur) {
    console.log("Valeur de accumulateur est : "+ accumulateur);
    console.log("Valeur de l'élément en cours de traitement est : "+ valeur);
    return accumulateur + valeur;
}));

console.log(list.reduce(function(accumulateur, valeur) {
    console.log("Valeur de accumulateur est : "+ accumulateur);
    console.log("Valeur de l'élément en cours de traitement est : "+ valeur);
    console.log(list.length);
    return (accumulateur + valeur) / list.length;
}));

// reduceright

var ints = [1,2,3,4];
    console.log(ints.reduce(function(acc, elem) {
        return acc + elem;
    }));

// reverse

console.log(ints); // 1 2 3 4
console.log(ints.reverse()); // 4 3 2 1

// shift

ints.shift(); // remove first elem
console.log(ints); // 3 2 1 

// slice

console.log(ints.slice(0,2)); // return 3 2 

// some
ints = [1,3,5];
console.log(ints.some(function(elem) {
    return elem %2===0; // return false as none of them is pair
})); 

ints = [1,3,5,6];
console.log(ints.some(function(elem) {
    return elem %2===0; // return true because 6 is pair
})); 

// sort

ints = [9, 3, 1, 4];
ints.sort(); // now sorted to 1 3 4 9
console.log(ints);

// splice

ints.splice(0,1, -1); // changed elem 1 to -1 because index 0 is 1
console.log(ints);

// unshift

ints.unshift(0); // adds 0 in first position in the array 
console.log(ints); // 0 -1 1 3 4 9

// set

var newList = new Set([1,2,3,4,4]);
console.log(newList)

console.log(newList.size);

// set add

newList.add(99); // add 99 in last position
console.log(newList);

// delete

newList.delete(1); // now return 2 3 4 99
console.log(newList);

// clear

newList.clear();
console.log(newList);

// has
console.log(newList.has(99)); // Return false as the array is empty
newList.add(99);
console.log(newList);
console.log(newList.has(99)); // Now return yes

// map


