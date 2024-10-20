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

// search in a string

var text3 = "oui non oui";
console.log(text3.length); // return 11 as oui/non 3 times = 9 + 2 whitespaces = 11
console.log(text3.lastIndexOf("oui")); // return 8 as the last "oui" is after both "oui" and "non" and two whitespaces so 6 + 2 = 8
console.log(text3.indexOf("non")); // return 4 after the first "oui" and whitespace

// sub-string extraction

var text4 = "bonsoir oui j'aime le pays basque";
console.log(text4.substring(8)); // count 8 so after "bonsoir" and the first whitespace
console.log(text4.substr(0,7)); // start from "b" and counts 7 characters so only "bonsoir" will remain

// get domain of email and urls

var mail1 = "jpi@datadome.co";
var url1 = "https://www.datadome.co";
var url2 = "http://staff.datadome.co/leads";

function getDomain(text) {
    if(text.indexOf("@")>0) {
        return text.substring(text.indexOf("@")+1);
    } else if (text.indexOf("://")>0) {
        if (text.indexOf("/", 8)>0) {
            return text.substring(text.indexOf("://")+3, text.indexOf("/", 8));
        }
       return text.substring(text.indexOf("://")+3);
    } else {
        return "";
    }
}
console.log(getDomain(mail1));
console.log(getDomain(url1));
console.log(getDomain(url2));

// redo exercice substring 

var plaque1 = "FR-32-94-AB";

function getPlaque(elem) {
    if (elem.indexOf("FR")>-1) {
        return elem.substring(elem.indexOf("FR")+3);
    } else {
        return false
    }
}
console.log(plaque1.indexOf("94")); // output 6
console.log(plaque1.substring(plaque1.indexOf("94")+3)); // output AB only

console.log(getPlaque(plaque1));

// encoding

var encode_text = "euskal heria";
encode_text = encodeURIComponent(encode_text);
console.log(encode_text)
encode_text = decodeURIComponent(encode_text);
console.log(encode_text)

// execute string

var compteur = 10;
eval(compteur++);
eval(console.warn("test"));
console.log(compteur);

// regex

var regex1 = new RegExp("[0-9]{4}"); // syntax 1
var regex2 = /[0-9]{4}/; // syntax 2

/* motifs


IDENTIFYING CHARACTERS

^ start
$ end
. any character
ab|cd ab or cd
[abcd] group of characters, any of them in []
[a-z] group of characthers, any of them from a to z 
[A-Z] group of characters any of them from A to Z
[^0-9] group of characters reverse, none of them in []
\ to escape
\t tabulation
\n saut de ligne
\r retour en debut de ligne
\f saut de page pour impression

COUNTING CHARACTERS

* precedent character optional or illimited
+ previous character exist at least once
? previous character exist once or not present
{n} previous character exist n times
{n,} previous character exist at least n times
{n,m} previous character exist between n and m times

SHORTCUTS

\d equals [0-9]
\D equals [^0-9]
/w equals [A-Za-z-0-9_]
\W equals [^A-Za-z-0-9_]

OPTIONS

i = ignore casse
g = global evaluation

*/ 

var r = new RegExp("[0-9]{4}");
console.log(r.test("1929")); // return true
console.log(r.exec("9293-AB-0000"));

r = new RegExp("[a-z0-9]*@[a-z0-9]*\.[a-z]", "i")
var mailA = "jean@onkeydown.com";
console.log(r.test(mailA));

// dates extraction with match
r = new RegExp("[0123][0-9]{1}[-/]{1}[01][0-9]{1}[-/]{1}[0-9]{4}", "g");
// 0123 0123456789 / 01 0123456789 / 0123456789 0123456789 0123456789 0123456789
var txt = "Bonsoir je suis peut-être né le 12/02/1959 ou bien le 14/05/1992 ou bien encore le 29/03/2004";
console.log(txt.match(r));

// search and replace 

var chaine = "bonsoir comment";
var regex = new RegExp("o")
console.log(chaine.search(regex)); // output 1 as O is the second letter in the world
console.log(chaine.replace(regex, "a")); // replace O by A so output is bansoir
console.log(chaine.split(" ")[1]); // return second word

// more split

var prenoms = "Jean, Julien; Jerome";
var regSep = /[,;]/;
var prenoms = prenoms.split(regSep);
console.log(prenoms);