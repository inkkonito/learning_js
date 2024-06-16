function maFonctionAvecErreur() {
    console.log("Debut de maFonctionAvecErreur()");
    variableInconnue++;
    console.log("Fin de maFonctionAvecErreur()");
}
try {
    maFonctionAvecErreur();
}
catch(error) {
    console.log("Entrée dans le bloc catch")
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

// own errors

function checkPseudo(pseudo) {
    var reg = new RegExp("^[0-9a-z](3,20)$", "gi");
    if (!reg.test(pseudo)) {
        var err = new RangeError("Le pseudo n'est pas valide", pseudo);
        throw err;
    }
}

try {
    checkPseudo("ju")     
} catch(err) {
    console.log(err);
}

// detect using event listener
uj = 9;
window.addEventListener("error", function (evt) {
    console.log("Event onerror");
    console.log("evt.error.stack");
})