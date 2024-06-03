// fun playing with arrays

var prenoms = ["Max", "Tom", "Pat", "Leo", "Jon", "Freddie"];
console.log(prenoms);

console.log(prenoms.map(function (e) {
  return e.toUpperCase(); // MAX, TOM, etc..
}));

console.log(prenoms.filter(function (e) {
  return e.charAt(0) === "M"; // Max
}));

console.log(prenoms.at(3)); // Leo

console.log(
  prenoms.filter(function (e) {
    return e.length > 3; // Return Freddie as it is the only one having the
  })
);

console.log(
  prenoms.every(function (e) {
    return e.length >= 3; // All elements are 3 or more length size => TRUE
  })
);

console.log(prenoms.some(function(e) {
    return e.includes("om"); // return True because of "Tom"
}));

console.log(prenoms.map(function(e) {
    return e+"hey";
}))