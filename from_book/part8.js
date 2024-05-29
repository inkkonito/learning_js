// POO

// doted notation

var orders = {
  "order1": 12,
  "order2": 12,
  "order3": 12,
};

var ttl = 0;

for (var i = 1; i <= 3; i++) {
  ttl += orders["order" + i];
}

console.log(ttl);

// object
var chat = {
  "nom": "freddie",
  "race": "europeen",
  "robe": "tigré",
};

// create object constructor instead

function creerAnimal(nom, age, sexe, photo) {
  this.nom = nom;
  this.age = age;
  this.sexe = sexe;
  this.photo = photo;
  this.log = function () {
    console.log("Nom : " + nom + " | Age : " + age + " | Sexe : " + sexe + " | Photo :");
  };
}
var freddie = new creerAnimal("freddie", 5, "mâle", "NON");
freddie.log();

function creerChat(nom, age, sexe, photo, robe) {
  this.creerAnimal = creerAnimal;
  this.creerAnimal(nom, age, sexe, robe);
  this.robe = robe;
  this.logRobe = function () {
    console.log("La robe de " + nom + " est " + robe);
  };
}

var leo = new creerChat("leo", 9, "mâle", "", "blanc");
leo.logRobe();

// using classes

class createAnimal {
  constructor(name, age, bread) {
    this.name = name;
    this.age = age;
    this.bread = bread;
  }
}


var chipie = new createAnimal("chipie", "20", "european");
console.log(chipie);

// practicing classes

class firemenGrades {
  constructor(grade, category, insigne, designationcourante, appelationorale) {
    this.grade = grade;
    this.category = category;
    this.insight = insigne;
    this.designationcourante = designationcourante;
    this.appelationorale = appelationorale;
  }
}

var gradesCategory = ["Homme du rang", "Sous-Officier", "Officiers"];

var gradeSapeur = new firemenGrades("Sapeur de 2ème classe", gradesCategory[0], "image", "Sapeur / Sapeure", "Sapeur / Sapeure");

console.log(gradeSapeur);

class anecdotes {
  constructor(name, date, description){
  this.firemenGrades = firemenGrades;
  this.name = name;
  this.date = date; 
  this.description = description;
}
}

// extends

class createCat extends createAnimal {
  constructor(name, age, bread, robe) {
    super(name, age, bread);
    this.robe = robe;
  }
}

var lilou = new createCat("lilou", "9", "european", "grey");
console.log(lilou);

// access properties

console.log(Object.keys(lilou));
console.log(Object.values(lilou));
console.log(Object.entries(lilou));

// delete property

delete freddie.age; // removed age entry
console.log(freddie);

// enumarable properties

var tab=["Hello", "Kitty"];
console.log(Object.keys(tab));
console.log(Object.getOwnPropertyNames(tab));

for (var index in tab) {
  console.log(index); // output index 0 1
}

for (var index in tab) {
  console.log(tab[index]); // output values "hello" "kitty"
}

for (var values of tab) {
  console.log(values); // output values "hello" "kitty"
}

// change object properties

var lilou = new creerChat("lilou", 20, "femelle", "non", "grey");

// apply and call

function Human(nom)
{
  this.nom=nom;
}
var nom;
var languages;

function Profession(nom, languages) {
  Human.call(this, nom);
  this.languages = languages;
}

var moi = new Profession("Julien", ["HTML, CSS, JS"]);

console.log(moi);
// json

var truite = {
  nom: "jean",
  prenom: "valjean",
  pouvoirs: ["premier", "deuxieme"],
  duree: 250,
  display: function() {
    return "hello";
  }
}

console.log(truite);
console.log(truite.pouvoirs.length);
console.log(truite.pouvoirs[1]);
console.log(truite.display());

// parse

var jsonString = '{ "name": "jean", "surname": "valjean"}';
console.log(typeof jsonString);
jsonString = JSON.parse(jsonString);
console.log(jsonString);
console.log(typeof jsonString)

var objectJS = { nom: "jean", prenom: "valjean"}
console.log(typeof objectJS);
objectJS = JSON.stringify(objectJS);
console.log(objectJS);
console.log(typeof objectJS);

