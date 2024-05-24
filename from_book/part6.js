// dates

var dt = new Date(2024, 11, 25, 11, 59, 59); // create date
console.log(dt);

console.log(dt.getDate()); // 25
console.log(dt.getDay()); // 3 => sunday 0, monday 1, tuesday 2, wednesday 3
console.log(dt.getFullYear()); // 2024
console.log(dt.getHours()); // 11 hours
console.log(dt.getMilliseconds()); // 0
console.log(dt.getMinutes()); // 59 minutes
console.log(dt.getMonth()); // 11 (december)
console.log(dt.getTime()); // time since 1st jan 1970
console.log(dt.getTimezoneOffset()); // 60min offset

jpi = new Date(1992, 4, 1, 9, 0, 0);

function formatDate(dt) {
    var jours = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");
    var mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");

    var j = dt.getDay();
    var d = dt.getDate();

    if (d === 1) { 
        d+="er"; // If date is 1 show 1er
    } 
    var m = dt.getMonth();
    var y = dt.getFullYear();
    var h = dt.getHours();

    if (h<10) {
        h = "0" + h;
    }

    var i = dt.getMinutes();
    if (i<10) {
        i = "0" + i;
    }

    var s = dt.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }

    return jours[j] + " " + d + " " + mois[m] + " " + y + " " + h + ":" + i + ":" + s;
}
console.log(formatDate(jpi));

// astrologie chinoise

var animaux = ["Rat", "Boeuf", "Tigre", "Lapin", "Dragon", "Serpent", "Cheval", "Chèvre", "Singe", "Coq", "Chien", "Cochon"];
var regYear = new RegExp("^[0-9]{4}$");

function getChineseAnimal(year) {
    if (regYear.test(year.toString())) {
        var index = (year - 4) % 12; // 4 corresponds to the year 1900 which is the year of the Rat
        console.log(animaux[index]);
    } else {
        console.log("Veuillez entrer une année valide à quatre chiffres.");
    }
}
getChineseAnimal(1992);

// set

var date = new Date(2000, 11, 5);
date.setFullYear(2002);
console.log(date);

// operations on dates

date = new Date();
var yesterday = new Date(date.getTime() - 24*60*60*1000);
console.log(yesterday);