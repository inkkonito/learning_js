function getCours() {
    var ajax = new XMLHttpRequest;
    console.log("Valeur de readyStade " + ajax.readyState);

    ajax.onreadystatechange = function() {
        console.log("readyStage à changé et vaut maintenant " + ajax.readyState);
    }

    ajax.onload = function () {
        console.log("Appel AJAX terminé");
        console.log(this.status);
        console.log(this.response);
        if(this.status == 200) {
            var json = JSON.parse(this.response);
            console.log(json.EUR); // affichage de la valeur de la clé EUR
        }
    }

    ajax.onerror = function() {
        console.log("erreur dans l'appel"); // log si erreur
    }

    ajax.ontimeout = function() {
        console.log("l'appel n'a pas pu se faire, nouvel essai dans 5 secondes");
        setTimeout("getCours()", 5000); // retry apres 5s
    }

    var url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR"; // url à appeler
    ajax.open("GET", url, true); // parametres de l'appel
    ajax.send(); // declenchement de l'appel
}

getCours();