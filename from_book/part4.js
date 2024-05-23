// strings

console.log("L'auteur à faim");
console.log('Il nous à dit "Mangez à votre faim"');
console.log("Il m'a dit \"Mangez autant que vous le souhaitez\"");
console.log(`Début de la chaine
Suite de la chaine
Fin de la chaine`);

// litteral templates

var prenom = "olivier";
var text = "Bonjour " + prenom;
console.log(text);
text = console.log(`Bonsoir ${prenom}`);

// conversion

var dt = new Date();
var nb = 10;
var tab = new Array(1,2,8,10);

console.log(dt.toString());
console.log(nb.toString());
console.log(tab.toString());

// concatenate

nb = 1000;
console.log(typeof nb);
nb = nb+""; 
console.log(typeof nb);

// string object

text = "bonsoir";
console.log(text.length);
console.log(text.toUpperCase());
text = "BONJOUR";
console.log(text.toLowerCase());
var text2 = "Bonsoir ça va ? ";
console.log(text2.trim());

// 