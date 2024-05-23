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

