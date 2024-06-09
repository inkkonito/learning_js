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
