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

// extends
