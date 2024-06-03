// fun playing with arrays

var prenoms = ["Max", "Tom", "Pat", "Leo", "John", "Freddie"];
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

console.log(prenoms.filter(function(e) {
    return e.length > 4
}))

var numbers = [1, 3, 5, 7, 9, 10];

console.log(numbers.find( e => e%2 === 0))

var justine = [2, 4, 6, 8, 10, 12];

console.log(justine.map(e => e*2));

var names = ["Jon", "Max", "Justine", "Julien"];

console.log(
    names.filter(function(e) {
        return e.length >3;
    })
)
var name;

function palindrome(name) {
    name = name.toLowerCase(); 
    const length = name.length;

    for (i = 0; i < length; i++) {
        if(name.charAt(i) !== name.charAt(length - 1 - i))
            {
                console.log(name + " tested is not a palindrome" + " and stopped at " + i + " iteration ")
                return;
            }
        }
        console.log("palindrome confirmed")
}

palindrome("kayaK");
palindrome("anna");
palindrome("jean");
palindrome("etienne")
palindrome("bob");

names.push("Max");
console.log(names);
names.pop();
console.log(names);

function uppercase(str) {
    var array1 = str.split(" ");
    var newarray1 = [];

    for(i = 0; i < array1.length ; i++) {
        newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
    }
    return newarray1.join(" ");
}

console.log(uppercase("justine est la plus belle"));

function return_type(str) {
    return typeof str;
}
console.log(return_type(12));

function reverse_text(str) {
    var a = str.split("");
    console.log(a);
    a = a.reverse();
    console.log(a);
    a = a.join("");
    console.log(a);
    
  return str.split("").reverse().join("");
}
console.log(reverse_text("hello im jon"));

function find_longest_word(str) {
var words = str.split(" ");
var longestWord = "";

for (var i = 0; i<words.length; i++)
    {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
return longestWord;
}

console.log(find_longest_word("Justine aime beaucoup Julien"));

