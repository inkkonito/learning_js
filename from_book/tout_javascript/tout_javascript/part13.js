// forms

myForm = document.getElementById("form1");
console.log(myForm);

console.log(document.forms[0]); // revient au même
console.log(document.monForm); // using form name
console.log(document.forms["monForm"]); // using form name 

// detect submission

document.monForm.addEventListener("submit", function(evt) {
    if (evt.currentTarget.saisie.value=="") {
        alert("Il faut saisir du texte"); 
        document.monForm.saisie.focus();
        evt.preventDefault();
    }
});

console.log(myForm.elements);
console.log(myForm.elements["saisie"]);

/* events properties

onfocus = quand le curseur clavier entre dans un élément
onblur = quand l'element perd le focus
onclick = detecte le click sur un evenement
onselect = selection du contenu d'un élément du formulaire

*/

//  access to value of input
document.monForm.saisie.value = "test set using JS";
console.log(document.monForm.saisie.value); // get access to value

if (document.monForm.saisie.value.length>3) {
    console.log("la valeur est plus longue que 6");
}
console.log(document.monForm.saisie.value.length>5); // true

// hidden fields

var reso = document.getElementById("resolution");
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
console.log(screenWidth);
console.log(screenHeight);
reso.value = `${screenHeight} + ${screenWidth}`;
console.log(reso); // show value

// password
var inputPass = document.getElementById("pass");
console.log(typeof pass.type);

document.getElementById("pass").addEventListener("click", function (evt) {
  if(pass.type === "password")
{    evt.target.setAttribute("type", "text");
} else {
    evt.target.setAttribute("type", "password")
}
})

inputCheck = document.getElementById("regles");
console.log(inputCheck.value);

if (!inputCheck.checked) {
    alert("Vous devez valider la checkbox");
}

var animal = "";
console.log(document.monForm.animal); // radio node list
console.log(document.monForm.animal.length); // radio node length

console.log(typeof animal);


for (var i = 0; i < document.monForm.animal.length; i++) {
    if (document.monForm.animal[i].checked) {
        animal = document.monForm.animal[i].value;
        console.log(animal);
        break;
    }
}

if (animal === "") { 
    console.log("Veuillez saisir votre animal préféré");
} else {
    console.log(animal);
}

var listFilm = document.monForm.film;
console.log(listFilm);
console.log(listFilm.options); // list options
console.log(listFilm.options[1].value); // show option value using index
