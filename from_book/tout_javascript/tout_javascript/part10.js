// window object

// confirm


/* if (confirm("Voulez-vous valider cette commande ?")) { // request OK or CANCEL
  console.log("à cliqué sur OK");
} else {
  console.log("à cliqué sur annuler");
} */


// prompt

// var question = prompt("Comment allez-vous ce matin?");

/* if (prompt) {
    console.log(question); // show content from prompt
}
else {
    console.log("non");
}*/ 

// window navigator objects

console.log(window.navigator.userAgent);
console.log(window.navigator.onLine);
console.log(window.navigator.cookieEnabled);

// window orientation

console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.orientation);

// window location

console.log(window.location.href); // full uri
console.log(window.location.protocol); // protocol
console.log(window.location.host); // host+protocol
console.log(window.location.hostname); // host
console.log(window.location.port); // port used
console.log(window.location.pathname); // relative path
console.log(window.location.search); // after ?
console.log(window.location.hash); // part after # (included)
console.log(window.location.origin)  // origin page

// window navigation 

console.log(window.history.back) // return to previous page
console.log(window.history.forward) // go to next page
console.log(window.history.go(1)) // goes in page forward -1 would go 1 page backward


// console.log(window.print()) // trigger a print request

// position and resizing

window.resizeTo(600, 400) // resize screen to width & heigh values
window.resizeBy(200, 200) // resize from actual size to new size with input values
window.moveTo(300, 300) // move with values from TOP & LEFT points
window.moveBy(500, 300) // deplace with input vlaues

// scroll

window.scrollTo(100, 100) // scroll to horizontaly and vertical values
window.scrollBy(200, 200) // move scrollers from actual position

// pop ups

window.open("http://www.google.fr", "google.fr", {width:100, height:100})

// iframes

