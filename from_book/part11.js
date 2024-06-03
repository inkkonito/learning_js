// interactivity 

var divExample = document.createElement("button");
divExample.innerText = "hi";
divExample.id = "idDiv";
divExample.className = "idClass";
document.querySelector("body").appendChild(divExample);

// positionning the div

divExample.style.width = "200px";
divExample.style.height = "100px";
divExample.style.backgroundColor = "lightblue";
divExample.style.border = "1px solid black"; // Ajouter une bordure noire
divExample.style.margin = "10px"; // Ajouter une marge
divExample.style.padding = "5px"; // Ajouter un padding
divExample.style.position = "absolute"; // Positionner le div
divExample.style.top = "50px"; // Positionner le div à 50px du haut
divExample.style.left = "100px"; // Positionner le div à 100px de la gauche 

// adding an event listen on it

var myDiv = document.getElementById("idDiv");
myDiv.addEventListener("click", clickDiv);

var evt;
function clickDiv(evt) {
    console.log("Click sur " + evt.currentTarget.id);
    evt.currentTarget.style.background = "#F00";
}

// onload event
window.addEventListener("onload", console.log("window loaded"));

// types of events
