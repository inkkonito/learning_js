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
console.table(typeof (tab2));
console.log(tab2.toString());
console.log(typeof (tab2.toString()));
console.log(tab2.join(", ")); // add ", " between days

// copy table

for (var i = 0; i < tab2.length ; i++) {
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

for(var index in currencies) {
    console.log(index + " : " + currencies[index]);
}