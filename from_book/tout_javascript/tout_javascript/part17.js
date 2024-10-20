// cookies

let allCookies = document.cookie;

function setCookie(name, value, expires="", path="", domain="", secure=0) {
    document.cookie=name+"="+encodeURIComponent(value)+
    ((expires=="") ? "" : (";expires="+expires.toUTCString()))+
    ((path=="") ? "" : (";path="+path))+
    ((domain=="") ? "" : (";domain="+domain))+
    ((secure=true) ? ";secure" : "");
}

setCookie("jean", "valjean");

function setCookie2(name, value, expires = "", path = "", domain = "", secure = 0) {
    let cookieString = name + "=" + encodeURIComponent(value);
    console.log(cookieString);

    if (expires) {
        let expiresDate = new Date(expires);
        cookieString += "; expires=" + expiresDate.toUTCString();
        console.log(cookieString);
    }

    if (path) {
        cookieString += "; path=" + path;
        console.log(cookieString);
    }

    if (domain) {
        cookieString += "; domain=" + domain;
        console.log(cookieString);
    }

    if (secure) {
        cookieString += "; secure";
    }

    document.cookie = cookieString;
    console.log("Cookie set: " + document.cookie);
}

var dt1An=new Date(); // init une nouvelle date
dt1An.setTime(dt1An.getTime()+(365*24*3600*1000)); // ajoute XX millisecondes pour faire une date dans un an

console.log(dt1An);
setCookie2("cookieName", "cookieValue", dt1An, "/blog", ".example.com", true);

// Afficher tous les cookies
console.log(document.cookie);

// Lire les cookies

    function allCookies() {
        // separator is ;

        var tab = document.cookie.split(";");
        var cookies = [];

        for(var i = 0; i < tab.length; i++) {
            var name = tab[i].substring(0, tab[i].indexOf("="));
            var value = tab[i].substring(tab[i].indexOf("=")+1)
            cookies[name]=value;
        }
        return cookies;
    }