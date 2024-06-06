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

// redo 

function inverse_string(str) {
    return str.split("").reverse().join("");
}

console.log(inverse_string("coucou non"));


// research element in nodes 

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByClassName("para"));
console.log(document.getElementsByName("img"));
console.log(document.getElementById("bloc"));
console.log(document.getElementById("myId"));

// access with CSS selectors

console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("span.span"));
console.log(document.querySelectorAll("div#bloc"));

// direct access

console.log(document.body);
console.log(document.getElementsByTagName("body")); // equals

// access child nodes - firstChild lastchild and siblings

console.log(document.querySelector("div#bloc").childNodes);
console.log(document.querySelector("div#bloc").firstChild);
console.log(document.querySelector("div#bloc").lastChild);
console.log(document.querySelector("div span").nextElementSibling);
console.log(document.querySelector("span#spaninbloc").parentElement);

// modifying the content

console.log(document.querySelectorAll("div#bloc > p")[0].innerHTML); // get Para A in bloc html
console.log(document.querySelectorAll("div#bloc > p")[0].outerHTML); // including tag
console.log(document.querySelectorAll("div#bloc > p")[0].innerText); // without HTML

document.querySelectorAll("div#bloc > p")[0].innerHTML = "this is a modification";
console.log(document.querySelectorAll("div#bloc > p")[0].innerHTML); // shows "this is a modification"

// test ajouter des évènements

var paras = document.querySelectorAll("p");
console.log(paras);
for(var i=0; i<paras.length ; i++) {
    paras[i].addEventListener("click", function(evt) {
        console.log("Clic détecté sur " + evt.target);
    })
}

paras = Array.prototype.slice.call(paras); // use 
console.log(paras); // array
console.log(Array.isArray(paras)); // true
paras.forEach(function(p) {
    p.addEventListener("click", function(evt)
{    console.log("Click détecté sur" + evt.target+ "(déclaration via ForEach");
})
});

// accéder aux attributs

getImg = document.querySelectorAll("img")[0];
console.log(getImg);

console.log(getImg.hasAttribute("alt")); // true
console.log(getImg.getAttribute("alt")); // return "alternative text"
console.log(getImg.hasAttribute("size")); // false
getImg.setAttribute("alt", "nouveau contenu"); // change alt content
console.log(getImg.getAttribute("alt")); // return "nouveau contenu"

// CSS manipulation - get style

console.log(window.getComputedStyle(getImg));
console.log(window.getComputedStyle(document.getElementById("monH1")));

// ajouter des class 

var ps = document.getElementById("monH1");
console.log(getComputedStyle(ps));

console.log(document.querySelector("p.para.paraBold").classList);
console.log(document.querySelector("p.para.paraBold").classList.add("test")); // added class test
console.log(document.querySelector("p.para.paraBold").classList);

// la position

console.log(ps.getBoundingClientRect());

// create element

var newDiv = document.createElement("div");
newDiv.setAttribute("id", "notification");
newDiv.innerHTML = "notre bloc de text";
newDiv.className = "newClass";
console.log(newDiv);

// clone element

var newDiv2 = newDiv.cloneNode(true);
newDiv2.innerHTML = "text du div 2";
console.log(newDiv2);
body.appendChilde(newDiv2);