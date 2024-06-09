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

function getUser() {
    ajax = new XMLHttpRequest();

    ajax.onload = function() {
        console.log(this.response);
        var response = JSON.parse(this.response)
        console.log(response);
        console.log(response.data);
    }
    url = "https://reqres.in/api/users/2";
    ajax.open("GET", url, true);
    ajax.send();
}
getUser();


var meteoToken = "3d41416adb0a833b523493866886d0b6a4954fab2b0bb233bf334683b12f2cd3";

function getMeteo() {
    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
        var resp = JSON.parse(this.response)
        console.log(resp);

    }
    var url = `https://api.meteo-concept.com/api/forecast/daily?token=${meteoToken}&insee=64122`;
    ajax.open("GET", url, true);
    ajax.setRequestHeader("Authorization", meteoToken);
    ajax.send();
}

getMeteo();

function getDogFacts() {
    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
        var response = JSON.parse(this.response);
        console.log(response);
    }
    var url = " https://dog-api.kinduff.com/api/facts"
    ajax.open("GET", url, true);
    ajax.send();
}
getDogFacts();